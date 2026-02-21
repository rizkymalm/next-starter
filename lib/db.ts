import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DATABASE as string;

if (!MONGODB_URI) {
    throw new Error('Please define MONGODB_URI');
}

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
    mongooseCache?: MongooseCache;
};

if (!globalWithMongoose.mongooseCache) {
    globalWithMongoose.mongooseCache = {
        conn: null,
        promise: null,
    };
}

async function connectMongoDB() {
    const cache = globalWithMongoose.mongooseCache!;

    if (cache.conn) {
        return cache.conn;
    }

    if (!cache.promise) {
        cache.promise = mongoose.connect(MONGODB_URI, {
            dbName: MONGODB_DB,
            bufferCommands: false,
        });
    }

    cache.conn = await cache.promise;
    return cache.conn;
}

export default connectMongoDB;
