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
    }
}, { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User;