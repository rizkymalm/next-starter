import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { DialogStackProvider } from '@/components/dialogs/DialogStackContext';
import { siteConfig } from '@/lib/seo';
import { ReduxProvider } from '@/redux/provider';

import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rizki Malem | Showcase',
    description: siteConfig.description,
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },

    icons: {
        icon: '/favicon.ico',
    },
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
                    <Providers>
                        <DialogStackProvider>{children}</DialogStackProvider>
                        <div id="portal-root" />
                    </Providers>
                </ReduxProvider>
            </body>
        </html>
    );
}
