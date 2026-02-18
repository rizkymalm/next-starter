import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import Overlay from '../portal/Overlay';
import useFocusTrap from '../portal/useFocusTrap';
import useLockBodyScroll from '../portal/useLockBodyScroll';
import { useDialogStack } from './DialogStackContext';

type DialogAnimation = 'fade' | 'scale' | 'slide-up';

interface DialogProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    width?: 'sm' | 'md' | 'lg';
    closeOnOutsideClick?: boolean;
    closeButton?: boolean;
    animation?: DialogAnimation;
}

const widthMap = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
};

const animationMap: Record<DialogAnimation, string> = {
    fade: 'opacity-0 data-[open=true]:opacity-100',
    scale: 'opacity-0 scale-95 data-[open=true]:opacity-100 data-[open=true]:scale-100',
    'slide-up':
        'opacity-0 translate-y-8 data-[open=true]:opacity-100 data-[open=true]:translate-y-0',
};

const Dialog = ({
    open,
    onClose,
    children,
    width = 'md',
    closeOnOutsideClick = true,
    closeButton = false,
    animation = 'scale',
}: DialogProps) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const [isMounted, setIsMounted] = useState(open);
    const [stackItem, setStackItem] = useState<{
        id: number;
        zIndex: number;
    } | null>(null);

    const stack = useDialogStack();

    useLockBodyScroll(open);
    useFocusTrap(dialogRef, open);

    /* register / unregister stack */
    useEffect(() => {
        if (open) {
            const item = stack.register();
            setStackItem(item);

            return () => {
                stack.unregister(item.id);
            };
        }

        return () => {};
    }, [open, stack]);

    /* mount animation */
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | undefined;

        if (open) {
            setIsMounted(true);
        } else {
            timer = setTimeout(() => {
                setIsMounted(false);
            }, 300);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [open]);

    /* ESC only topmost */
    useEffect(() => {
        if (!open || !stackItem) return undefined;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && stack.isTopMost(stackItem.id)) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, stackItem, stack, onClose]);

    if (!isMounted) return null;

    return (
        <Overlay>
            <div
                style={{ zIndex: stackItem?.zIndex }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                onMouseDown={e => {
                    if (
                        closeOnOutsideClick &&
                        stackItem &&
                        stack.isTopMost(stackItem.id) &&
                        e.target === e.currentTarget
                    ) {
                        onClose();
                    }
                }}
                role="dialog"
                aria-modal="true"
            >
                <div
                    ref={dialogRef}
                    tabIndex={-1}
                    data-open={open}
                    className={`relative w-full ${widthMap[width]} rounded-xl border border-accent-dark/10 bg-light-2 text-text-light-primary shadow-4 transition-all duration-300 focus:outline-none dark:bg-dark-2 dark:text-text-dark-primary ${animationMap[animation]} `}
                >
                    {closeButton &&
                        stackItem &&
                        stack.isTopMost(stackItem.id) && (
                            <button
                                type="button"
                                aria-label="Close dialog"
                                onClick={onClose}
                                className="absolute right-3 top-3 rounded-md p-1"
                            >
                                <Icon icon="mdi:close" width={20} height={20} />
                            </button>
                        )}
                    {children}
                </div>
            </div>
        </Overlay>
    );
};

export default Dialog;
