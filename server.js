//==============
// DEPENDENCIES
//==============
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const marketplaceController = require('./controllers/controller.js');

//port
const PORT =  process.env.PORT || 3000;
//mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project';

//=============
// MIDDLEWARE
//=============
app.use(express.static('public'));
app.use(express.json());
app.use('/marketplace', marketplaceController);


// connect to mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
db.on('open', () => {
  console.log('connected to mongo');
});


//=============
// LISTENER
//=============
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
})
