import mongoose, { Schema } from 'mongoose';

const visitorSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    device: String,
    ip: String,
});

const Visitor =
    mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export default Visitor;
