import mongoose, { Schema } from 'mongoose';

const roleSchema = new Schema(
    {
        role: {
            type: String,
            required: [true, 'Please provide a role'],
            unique: true,
        },
        permission: [
            {
                type: mongoose.Types.ObjectId,
                required: false,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Role = mongoose.models.roles || mongoose.model('roles', roleSchema);

export default Role;
