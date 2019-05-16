//=============
//DEPENDENCIES
//=============
const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required: true},
  phone: Number,
  zip: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
