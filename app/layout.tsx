import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ReduxProvider } from '@/redux/provider';

import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rizki Malem | Showcase',
    description: 'Rizki Malem Portfolio | Showcase | Documentation | Contact',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Providers>{children}</Providers>
                </ReduxProvider>
            </body>
        </html>
    );
}
