import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: false,
        },
        action: {
            type: String,
            enum: ['LOGIN', 'LOGOUT', 'SIGN_UP'],
            required: [true, 'Action is required'],
        },
        ip: {
            type: String,
            required: false,
        },
        userAgent: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Activity =
    mongoose.models.activity || mongoose.model('activity', activitySchema);

export default Activity;
