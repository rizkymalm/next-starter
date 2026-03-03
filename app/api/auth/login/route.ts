import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

import { ActivityAction, ActivityMessages } from '@/app/constants/activityEnum';
import { Messages } from '@/app/constants/messagesEnum';
import { apiFetch } from '@/config/api';
import connectMongoDB from '@/lib/db';
import getIPAddress from '@/lib/get-ip-address';
import { signAccessToken, signRefreshToken } from '@/lib/jwt';
import User from '@/lib/models/userModels';

export async function POST(request: Request) {
    try {
        await connectMongoDB();
        const { email, password } = await request.json();
        const user = await User.findOne({ email });
        const date = new Date();
        const ip = await getIPAddress();
        if (!user) {
            return NextResponse.json(
                {
                    statusCode: 1404,
                    message: Messages.USER_NOT_FOUND,
                },
                { status: 404 }
            );
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json(
                {
                    statusCode: 1403,
                    message: Messages.PASSWORD_NOT_MATCH,
                },
                { status: 403 }
            );
        }
        const activity = await apiFetch({
            method: 'POST',
            endpoint: '/activity',
            data: {
                user: user._id,
                action: ActivityAction.LOGIN,
                description: `[${date}] [User: ${user._id}] - ${ActivityMessages.LOGIN} IP:${ip}`,
            },
        });
        if (!activity) {
            return NextResponse.json(
                {
                    statusCode: 1400,
                    message: Messages.ACTIVITY_POST_FAILED,
                },
                { status: 400 }
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
            message: Messages.LOGIN_SUCCESS,
        });

        response.cookies.set('token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        });

        return response;
    } catch (error: any) {
        return NextResponse.json(
            {
                statusCode: 1500,
                message: error.message,
            },
            { status: 500 }
        );
    }
}
