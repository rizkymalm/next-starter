'use client';

import { createContext, useCallback, useContext, useMemo, useRef } from 'react';

interface StackItem {
    id: number;
    zIndex: number;
}

interface DialogStackContextValue {
    register: () => StackItem;
    unregister: (id: number) => void;
    isTopMost: (id: number) => boolean;
}

const DialogStackContext = createContext<DialogStackContextValue | null>(null);

export const DialogStackProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const stack = useRef<StackItem[]>([]);
    const baseZIndex = 40;

    const register = useCallback(() => {
        const id = Date.now() + Math.random();
        const zIndex = baseZIndex + stack.current.length * 10;

        const item = { id, zIndex };
        stack.current.push(item);

        return item;
    }, []);

    const unregister = useCallback((id: number) => {
        stack.current = stack.current.filter(item => item.id !== id);
    }, []);

    const isTopMost = useCallback((id: number) => {
        const last = stack.current[stack.current.length - 1];
        return last?.id === id;
    }, []);

    const value = useMemo(
        () => ({ register, unregister, isTopMost }),
        [register, unregister, isTopMost]
    );

    return (
        <DialogStackContext.Provider value={value}>
            {children}
        </DialogStackContext.Provider>
    );
};

export const useDialogStack = () => {
    const ctx = useContext(DialogStackContext);
    if (!ctx) {
        throw new Error(
            'useDialogStack must be used within DialogStackProvider'
        );
    }
    return ctx;
};
