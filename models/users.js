const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    Phone: Number,
    zip: Number
})

const User = mongoose.model('User', userSchema);

module.exports = User;
