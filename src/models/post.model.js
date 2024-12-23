import mongoose from "mongoose";

const postShcema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 500
    },
    image: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
})