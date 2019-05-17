//==============
// DEPENDENCIES
//==============
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const session = require('express-session');
const marketplaceController = require('./controllers/controller.js');

//port
const PORT =  process.env.PORT || 3000;
//mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project';

// connect to mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
db.on('open', () => {
  console.log('connected to mongo');
});


//=============
// MIDDLEWARE
//=============
app.use(express.static('public'));
app.use(express.json());
app.use('/marketplace', marketplaceController);
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

//===================
// Get User Session
//===================
app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.json(req.session.currentUser);
    } else {
        res.status(401).json({
          status:401,
          message:'not logged in'
        });
    }
})
// usercontroller for sign up
const userController = require('./controllers/users.js')
app.use('/users', userController);
// sessioncontroller for log in
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


//=============
// LISTENER
//=============
app.listen(PORT, () => {
  console.log('listening on port:', PORT);
})
