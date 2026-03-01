import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';
import { signAccessToken, signRefreshToken } from '@/lib/jwt';
import User from '@/lib/models/userModels';

export async function POST(request: Request) {
    try {
        await connectMongoDB();
        const { email, password } = await request.json();
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                {
                    statusCode: 1404,
                    message: 'User not found!',
                },
                { status: 404 }
            );
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json(
                {
                    statusCode: 1403,
                    message: 'Password not match!',
                },
                { status: 403 }
            );
        }
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
        };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);
        const response = NextResponse.json({
            data: user,
            token: {
                accessToken,
                refreshToken,
            },
            message: 'Login Successful',
        });

        response.cookies.set('token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            {
                statusCode: 1500,
                message: error,
            },
            { status: 500 }
        );
    }
}
