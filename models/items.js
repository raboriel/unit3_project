//=============
//DEPENDENCIES
//=============
const mongoose = require('mongoose');

//Schema
const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  image: String,
  zip: Number,
  price: Number,
  idForUser: String,
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
