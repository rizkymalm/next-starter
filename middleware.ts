// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:3002',
    'https://rizkymalm.space',
    'https://www.rizkymalm.space',
    'https://rizkymalm.site',
    'https://www.rizkymalm.site',
    'https://next-gmbh-test.vercel.app',
];

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');

    const response = NextResponse.next();

    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }

    response.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );

    response.headers.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, x-api-key'
    );

    return response;
}

export const config = {
    matcher: '/api/:path*',
};
