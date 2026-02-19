import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: 'portfolio',
        });
    } catch (error) {
        NextResponse.json(
            {
                error,
                message: 'Failed to connect DB',
            },
            { status: 503 }
        );
    }
};

export default connectMongoDB;
