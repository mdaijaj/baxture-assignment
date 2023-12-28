const mongoose = require('../database/db');
const Schema = mongoose.Schema;
// const validate=require("validate")

var user_schema = new Schema({
    first_name: {
        type: String,
        maxlength: [30, "first_name cannot exceed 30 charactor"],
        required: [true, "please enter first_name"],
        min: [4, "first_name should be more than 4 charactor"]
    },
    last_name: {
        type: String,
        maxlength: [30, "last_name cannot exceed 30 charactor"],
        required: [true, "please enter your last_name"],
        min: [4, "last_name should be more than 4 charactor"]
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: true,
        // validate: [validator.isEmail, "please enter valid email id"]
    },
    age: {
        type: Number,
    },
    hobbies: {
        type: Array,
    },
}, 
{
    timestamps: true
});


const User = mongoose.model('User', user_schema);
module.exports = User;