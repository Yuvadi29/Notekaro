const mongoose = require('mongoose');
const {Schema} = mongoose;

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
const User = mongoose.model('user', UserSchema);
User.createIndexes()

module.exports = User;