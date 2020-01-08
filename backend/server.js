
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
require('dotenv').config({ path: '../.env' });
require('../database/database'); 

server.use(bodyParser.urlencoded({ extended: false }));
// server.use(express.static("public"));

const Post = require('../models/Post')

// const post = new Post({
//     title: 'Post Title 2',
//     slug: 'post-title-2',
//     details: 'Selman Kahya blog videosu için teşekkürler'
// })

// server.get('/',(req,res)=>{
//     res.render
// })

server.get('/api/posts', (req, res) => {
    Post.find({}, function (err, posts) {
        if (err) { console.log(err) }
        res.send({
            posts: posts
        });
    });
})


// server.get('/:postId', (req, res) => {

//     const requestedPostId = req.params.postId;

//     console.log("PARAMS : " + req.params.postId); 

//     Post.findOne({ _id: requestedPostId }), (err, post) => {
//         res.send({
//             post: post
//         })
//     }
// })

server.listen(process.env.BACKEND_PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}/`));







