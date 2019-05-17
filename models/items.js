//=============
//DEPENDENCIES
//=============
const mongoose = require('mongoose');

//Schema
const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  zip: Number,
  price: Number,
  idForUser: String
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
