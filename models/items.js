//=============
//DEPENDENCIES
//=============
const mongoose = require('mongoose');

//Schema
const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  zip: String,
  price: Number,
  description: String,
  idForUser: String,
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
