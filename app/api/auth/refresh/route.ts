import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';

export async function POST(request: Request) {
    try {
        await connectMongoDB();

        const authHeader = request.headers.get('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json(
                { error: 'Missing or invalid authorization header' },
                { status: 401 }
            );
        }

        const token = authHeader.substring(7);

        return NextResponse.json({
            message: '',
            data: token,
        });
    } catch (error) {
        return NextResponse.json(
            {
                statusCode: 1500,
                data: error,
                message: 'Internal server error',
            },
            { status: 500 }
        );
    }
}
