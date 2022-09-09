const mongoose = require('mongoose');

//Something like the reqirements in the database for the Users
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //Everyone will have a unique Email id
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('user', UserSchema);