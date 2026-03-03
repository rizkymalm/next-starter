import { geolocation } from '@vercel/functions';
import { headers } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { Messages } from '@/app/constants/messagesEnum';
import connectMongoDB from '@/lib/db';
import getIPAddress from '@/lib/get-ip-address';
import Activity from '@/lib/models/activityModels';
import User from '@/lib/models/userModels';

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        const { country } = geolocation(request);
        const headersList = headers();
        const { user, action, description } = await request.json();
        const userAgent = headersList.get('user-agent');
        const ip = await getIPAddress();
        const users = await User.findOne({ _id: user });
        if (!users) {
            return NextResponse.json(
                {
                    statusCode: 1404,
                    message: Messages.USER_NOT_FOUND,
                },
                { status: 404 }
            );
        }
        const create = new Activity({
            user,
            action,
            ip,
            userAgent,
            country,
            description,
        });
        const saved = await create.save();
        if (saved) {
            return NextResponse.json(
                {
                    message: 'Success save',
                    data: saved,
                    statusCode: 1200,
                },
                { status: 200 }
            );
        }
        return NextResponse.json(
            {
                message: 'Failed save',
                data: saved,
                statusCode: 1200,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
