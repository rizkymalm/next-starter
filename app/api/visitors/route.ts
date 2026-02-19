import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';
import Visitor from '@/lib/models/VisitorModels';

export async function POST(request: {
    json: () =>
        | PromiseLike<{ device: any; ip: string }>
        | { device: any; ip: string };
}) {
    try {
        const { ip, device } = await request.json();
        await connectMongoDB();
        await Visitor.create({
            _id: new mongoose.Types.ObjectId(),
            ip,
            device,
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
