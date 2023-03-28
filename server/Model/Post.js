const mongoose = require('mongoose');
const { Schema } = mongoose;

const post = new Schema({
    text: {
        type: String,
        required: [true, "please add Comment "],
        default: ""
    },
    authorId: {
        type: String,
        required: [true, "please add authorId "],
    },
    date: {
        type: String,
        required: [true, "please add date "],
    },
    likesCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    }
});

const Post = mongoose.model('post', post);

module.exports = Post;