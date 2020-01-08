
const mongoose = require('mongoose')

require('dotenv').config({ path: '../.env' });

const connect = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection success'))
    .catch(e => console.log('MongoDB connection failure,more info: ' + e))


module.exports = connect ;