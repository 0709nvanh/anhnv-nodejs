import mongoose from 'mongoose';

const categorySchemas = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    }
}, { timestamps: true })

export default mongoose.model('Category', categorySchemas)