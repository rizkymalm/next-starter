import { headers } from 'next/headers';

export default async function getIPAddress() {
    const headerStore = await headers();
    const forwarded = headerStore.get('x-forwarded-for');
    // Get the first IP in the list
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';
    return ip;
}
