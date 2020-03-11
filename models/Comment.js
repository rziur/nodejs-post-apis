const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
    message: { type: String, require: "THE MESSAGE IS REQUIRED!!!" },
});

module.exports = mongoose.model('Comment', CommentSchema);
