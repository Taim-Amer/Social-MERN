import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    converPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
}, { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User;