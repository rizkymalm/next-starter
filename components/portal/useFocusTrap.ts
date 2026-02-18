import type { RefObject } from 'react';
import { useEffect } from 'react';

const FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');

const useFocusTrap = (
    containerRef: RefObject<HTMLElement | null>,
    active: boolean
) => {
    useEffect(() => {
        if (!active) return undefined;

        const container = containerRef.current;
        if (!container) return undefined;

        const focusableElements = Array.from(
            container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        );

        if (focusableElements.length === 0) return undefined;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return undefined;

        const previouslyFocused = document.activeElement as HTMLElement | null;

        firstElement.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };

        container.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('keydown', handleKeyDown);
            previouslyFocused?.focus();
        };
    }, [active, containerRef]);
};

export default useFocusTrap;
