import { geolocation } from '@vercel/functions';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
    const { country } = geolocation(request);
    return new Response(`Your location is ${country}`, {
        headers: { 'content-type': 'text/html' },
    });
}
