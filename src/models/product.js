import mongoose from 'mongoose';

const productSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true})

export default mongoose.model("Product", productSchemas)