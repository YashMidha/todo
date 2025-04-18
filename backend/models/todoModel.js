import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema);
