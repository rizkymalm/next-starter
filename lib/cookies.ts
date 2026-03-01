import type { NextResponse } from 'next/server';

export function setAuthCookies(
    res: NextResponse,
    accessToken: string,
    refreshToken: string
) {
    res.cookies.set('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 10, // 10 menit
        path: '/',
    });

    res.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 hari
        path: '/',
    });
}

export function clearAuthCookies(res: NextResponse) {
    res.cookies.delete('accessToken');
    res.cookies.delete('refreshToken');
}
