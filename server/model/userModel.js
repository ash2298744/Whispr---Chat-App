const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max: 20,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true, 
        min: 1,
        max: 45,
    },
    password:{
        type: String,
        required: true, 
        min: 1,
    },
    isAvatarImageSet : {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
})

module.exports = mongoose.model("Users", userSchema)