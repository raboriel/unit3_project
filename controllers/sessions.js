const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcryptjs');

// router.get('/new', (req, res)=>{
//     res.render('sessions/new.ejs');
// })

router.delete('/', (req, res)=>{
    req.session.destroy(() => {
        res.status(200).json({
          status:200,
          message:'logout comlete'
        })
    })
});

router.post('/', (req, res)=>{
    User.findOne({username:req.body.username}, (err, foundUser)=>{
        if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser;
            res.status(201).json({
              status:201,
              message:'session created'
            });
        } else {
            res.status(401).json({
              status:401,
              message:'login failed'
            })
        }
    })
})

module.exports = router;
