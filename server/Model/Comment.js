const mongoose = require('mongoose');
const { Schema } = mongoose;

const comment = new Schema({
    postId: {
        type: String,
        required: [true, "please add post Id "],
    },
    name: {
        type: String,
        required: [true, "please add name "],
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
        default:0
    },
    text:{
        type: String,
        required: [true, "please add Comment "],
        default:""
    }
});

const Comment = mongoose.model('comment', comment);

module.exports = Comment;