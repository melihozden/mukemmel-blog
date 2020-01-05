
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const glob = require('glob')
const next = require('next')

require('dotenv').config({ path: '../.env' });

const Post = require('../models/Post')

// mongo Connect 
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection success'))
    .catch(e => console.log('MongoDB connection failure,more info: ' + e))

const post = new Post({
    title: 'Post Title',
    slug: 'post-title',
    details: 'this is a post details there is a lot of things here'
})

//post.save();
server.get('/', (req, res) => {

    Post.find((err, posts) => {
        if (err) { console.log(err) }
        else {
            console.log(posts);
            res.send(posts);
        }
    })
})

server.listen(process.env.BACKEND_PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}/`));







