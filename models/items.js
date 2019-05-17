//=============
//DEPENDENCIES
//=============
const mongoose = require('mongoose');

//Schema
const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  zip: Number
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
