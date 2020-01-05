
require('dotenv').config();

const mongoose = require('mongoose');

// mongo Connect 
mongoose.connect('mongodb://divergiant:diver1pass@ds259738.mlab.com:59738/mukemmelblogdb',{useNewUrlParser:true})
.then(() => console.log('MongoDB connection success'))
.catch(e => console.log('MongoDB connection failure,more info: ' + e))









