'use client';

import { ThemeProvider } from 'next-themes';
import { useSelector } from 'react-redux';

import type { Reducers } from '@/redux/types';

export function Providers({ children }: { children: React.ReactNode }) {
    const systemState = useSelector((state: Reducers) => state.system);
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme={systemState.themes}
            enableSystem
        >
            {children}
        </ThemeProvider>
    );
}
