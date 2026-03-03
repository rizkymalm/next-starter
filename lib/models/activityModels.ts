import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: false,
        },
        action: {
            type: ['LOGIN', 'LOGOUT', 'SIGN_UP'],
            required: false,
        },
        ip: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Activity =
    mongoose.models.activity || mongoose.model('activity', activitySchema);

export default Activity;
