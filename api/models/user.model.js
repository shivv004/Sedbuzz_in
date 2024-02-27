import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/sedbuzz-7b0dd.appspot.com/o/public%2Fdefault-user.png?alt=media&token=10ed09fd-9c54-46ef-9908-70b8c37ee63f",
    },
    about: {
        type: String,
        default: "",
    },
    linkedin: {
        type: String,
        default: "",
    },
    twitter: {
        type: String,
        default: "",
    },
    github: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;