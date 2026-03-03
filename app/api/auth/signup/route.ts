import bcryptjs from 'bcryptjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { Messages } from '@/app/constants/messagesEnum';
import connectMongoDB from '@/lib/db';
import Role from '@/lib/models/roleModels';
import User from '@/lib/models/userModels';

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        const { username, email, password, role } = await request.json();
        const user = await User.findOne({ email });
        const roles = await Role.findOne({ _id: role });
        if (user) {
            return NextResponse.json(
                {
                    statusCode: 1409,
                    message: Messages.SIGNUP_USER_EXIST,
                },
                { status: 409 }
            );
        }
        // check role
        if (!roles) {
            return NextResponse.json(
                {
                    statusCode: 1404,
                    message: Messages.SIGNUP_ROLE_NOT_FOUND,
                },
                { status: 404 }
            );
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
        });
        const savedUser = await newUser.save();
        return NextResponse.json({
            message: Messages.SIGNUP_POST_SUCCESS,
            savedUser,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'success',
    });
}
