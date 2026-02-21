import mongoose, { Schema } from 'mongoose';

const visitorSchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        device: String,
        ip: String,
        country: String,
        url: String,
        page: String,
    },
    {
        timestamps: true,
    }
);

const Visitor =
    mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export default Visitor;
