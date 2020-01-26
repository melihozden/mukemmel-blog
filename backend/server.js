const express = require('express')
const server = express()
const bodyParser = require('body-parser')
require('dotenv').config({ path: '../.env' });
require('../database/database');

server.use(bodyParser.urlencoded({ extended: false }));
// server.use(express.static("public"));

const Post = require('../models/Post')
const Comment = require('../models/Comment')

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
            postId: post._id,
            postTitle: post.title,
            postDetail: post.detail,
            postTag : post.tag,
            postLike: post.like,
            postDate: post.createdAt,
        });
    });
})

server.post('/create', (req, res) => {

    // res.send(req.body)

    const post = new Post({
        title: req.body.postTitle,
        tag:  req.body.postTag,
        detail: req.body.postDetail
    })
    post.save()
    res.redirect('http://localhost:3000/create')
})

server.post('/comment/:postId', (req, res) => {
    const requestedId = req.params.postId;

    const comment = new Comment({
        postId: requestedId,
        content: req.body.commentContent,
    })
    comment.save();
    res.redirect(`http://localhost:3000/${requestedId}`);
})

server.get('/comments/:postId', (req, res) => {
    const requestedId = req.params.postId;
    Comment.find({ postId: requestedId }, function (err, comments) {
        if (err) { console.log(err) }
        res.send({
            comments: comments,
        });
    });
})

server.post('/register', (req, res) => {
    // User registeration here 
    res.send(req.body)
})



server.listen(process.env.BACKEND_PORT || 3001, () =>
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}/`));


