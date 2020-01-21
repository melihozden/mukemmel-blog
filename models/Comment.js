const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    postId : {
        type: mongoose.ObjectId,
        required: true
    },
    content : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('comment', commentSchema);