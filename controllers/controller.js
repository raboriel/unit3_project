//==============
// DEPENDENCIES
//==============
const express = require('express');
const router = express.Router();
const User = require('../models/user.js')


//========
// INDEX
//========
router.get('/', (req, res) => {
  User.find({}, (error, foundUser) => {
    res.json(foundUser);
  });
});


module.exports = router;
