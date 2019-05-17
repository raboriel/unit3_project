//==============
// DEPENDENCIES
//==============
const express = require('express');
const router = express.Router();
const Items = require('../models/items.js');
const User = require('../models/users.js');


//========
// INDEX
//========
router.get('/', (req, res) => {
  Items.find({}, (error, foundUser) => {
    res.json(foundUser);
  });
});

//=======
// POST
//=======
router.post('/', (req, res) => {
  Items.create(req.body, (err, createdUser) => {
    res.json(createdUser)
  });
});

//=========
// DELETE
//=========
router.delete('/:id', (req, res)=>{
    Items.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        res.json(deletedUser);
    });
});

//=========
// UPDATE
//=========
router.put('/:id', (req, res)=>{
    Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});

module.exports = router;
