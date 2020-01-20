const express = require('express')
const server = express()
const bodyParser = require('body-parser')
require('dotenv').config({ path: '../.env' });
require('../database/database');

server.use(bodyParser.urlencoded({ extended: false }));
// server.use(express.static("public"));

const Post = require('../models/Post')

server.get('/api/posts', (req, res) => {
    Post.find({}, function (err, posts) {
        if (err) { console.log(err) }
        res.send({
            posts: posts
        });
    });
})

server.get('/api/posts/:postId', (req, res) => {

    const requestedPost = req.params.postId;

    Post.findOne({ _id: requestedPost }, (err, post) => {
        res.send({
            postTitle: post.title,
            postDetail: post.detail,
            postDate: post.createdAt,
        });
    });
})

server.post('/create', (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        detail: req.body.postDetail
    })
    post.save()
    res.redirect('http://localhost:3000/create')
})

server.listen(process.env.BACKEND_PORT || 3001, () =>
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}/`));


