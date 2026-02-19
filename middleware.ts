import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const country = request.geo?.country || 'US'; // Default to 'US' or some other value

    // Example: Redirect users from a specific country
    if (country === 'BLOCKED_COUNTRY_CODE') {
        return NextResponse.redirect(new URL('/blocked', request.url));
    }

    // You can also add the country to the request headers for use in pages/components
    const response = NextResponse.next();
    response.headers.set('x-user-country', country);
    return response;
}

// Optionally, configure which paths the middleware applies to
export const config = {
    matcher: '/:path*', // Apply to all paths
};
