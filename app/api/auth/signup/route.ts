import bcryptjs from 'bcryptjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';
import User from '@/lib/models/userModels';

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        const { username, email, password } = await request.json();
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                {
                    statusCode: 1409,
                    message: 'User already exist',
                },
                { status: 409 }
            );
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        return NextResponse.json({
            message: 'User created successfully',
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
