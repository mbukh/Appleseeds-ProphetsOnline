const mongoose = require('mongoose');
const { Schema } = mongoose;

const author = new Schema({
    name: {
        type: String,
        required: [true, "please add name "],
    },
    picture: {
        type: String,
        required: [true, "please add picture "],
    },
    personalInfo: {
        type: String,
        required: [true, "please add picture "],
    }

});

const Author = mongoose.model('author', author);

module.exports = Author;