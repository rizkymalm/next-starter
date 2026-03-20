import { geolocation } from '@vercel/functions';
import mongoose from 'mongoose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';
import Visitor from '@/lib/models/VisitorModels';
import getIPAddress from '@/lib/get-ip-address';

export async function POST(request: NextRequest) {
    try {
        const { country } = geolocation(request);
        const { page, url } = await request.json();
        await connectMongoDB();
        const ip = await getIPAddress();
        await Visitor.create({
            _id: new mongoose.Types.ObjectId(),
            country: country || 'not detected',
            url,
            page,
            ip
        });
        return NextResponse.json(
            { message: 'Visitor Created' },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error, message: 'Failed to create visitor' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const visitor = await Visitor.find();
        return NextResponse.json({ visitor });
    } catch (error) {
        return NextResponse.json(
            { error, message: 'Failed to create visitor' },
            { status: 500 }
        );
    }
}
