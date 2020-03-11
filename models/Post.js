const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, require: "THE TITLE IS REQUIRED!!!" },
    body: { type: String, require: "THE BODY IS REQUIRED!!!" },
    comments_array: [{
        type: Schema.ObjectId,
        ref: "Comment"
    }],
});
module.exports = mongoose.model('Post', PostSchema);