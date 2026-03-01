import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/db';
import Role from '@/lib/models/roleModels';

export async function POST(request: NextRequest) {
    try {
        await connectMongoDB();
        const { role } = await request.json();
        const findRole = await Role.findOne({ role });
        if (findRole) {
            return NextResponse.json(
                {
                    statusCode: 1409,
                    message: 'Role already exist',
                },
                { status: 409 }
            );
        }

        const newRole = new Role({
            role,
            permission: [],
        });

        const saved = newRole.save();
        return NextResponse.json({
            message: 'Role created successfully',
            saved,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const role = await Role.find();
        return NextResponse.json({
            message: 'Success get Role list',
            data: role,
        });
    } catch (error) {
        return NextResponse.json(
            { error, message: 'Internal Server Error!' },
            { status: 500 }
        );
    }
}
