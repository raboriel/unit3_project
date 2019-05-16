//==============
// DEPENDENCIES
//==============
const express = require('express');
const router = express.Router();


//========
// INDEX
//========
router.get('/', (req, res) => {
  res.send('hi')
})

module.exports = router;
