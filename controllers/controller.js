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

//=======
// POST
//=======
router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.json(createdUser)
  });
});

//=========
// DELETE
//=========
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        res.json(deletedUser);
    });
});

//=========
// UPDATE
//=========
router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});

module.exports = router;
