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
//so this GET route needs to be available to be seen by anyone
router.get('/', (req, res) => {
  Items.find({}, (error, foundUser) => {
    res.json(foundUser);
  });
})

//=======
// POST
//=======
router.post('/', (req, res) => {
  Items.create(req.body, (err, createdItems) => {
    res.json(createdItems)
  })
})

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
