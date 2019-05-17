//==============
// DEPENDENCIES
//==============
const express = require('express');
const router = express.Router();
const Items = require('../models/items.js');
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');


//========
// INDEX
//========
router.get('/', (req, res) => {
  Items.find({}, (error, foundUser) => {
    res.json(foundUser);
  });
})

//=======
// POST
//=======
router.post('/', (req, res) => {
  Items.create(req.body, (err, createdItem) => {
    res.json(createdItem)
  });
});

//=========
// DELETE
//=========
router.delete('/:id', (req, res)=>{
    Items.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        res.json(deletedItem);
    });
});

//=========
// UPDATE
//=========
router.put('/:id', (req, res)=>{
    Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
        res.json(updatedItem);
    });
});

module.exports = router;
