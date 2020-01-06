
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const glob = require('glob')
const next = require('next')

require('dotenv').config({ path: '../.env' });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));

const Post = require('../models/Post')

// mongo Connect 
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection success'))
    .catch(e => console.log('MongoDB connection failure,more info: ' + e))

const post = new Post({
    title: 'Post Title 2',
    slug: 'post-title-2',
    details: 'Selman Kahya blog videosu için teşekkürler'
})

// post.save();
server.get('/', (req, res) => {
    Post.find({}, function (err, posts) {
        if (err) { console.log(err) }
        res.send({
            posts: posts
        });
    });
})

server.listen(process.env.BACKEND_PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}/`));







