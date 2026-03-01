import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please Provide Username'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
        },
        role: {
            type: mongoose.Types.ObjectId,
            required: [true, 'Please provide a role'],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
