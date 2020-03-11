const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "TYPE A VALID EMAIL!!!"];

var UserSchema = new Schema({
    name: { type: String, require: "THE NAME IS REQUIRED!!!" },
    email: { type: String, require: "THE EMAIL IS REQUIRED TOO!!!", match: email_match },
    posts_array: [{
        type: Schema.ObjectId,
        ref: "Post"
    }],
});

module.exports = mongoose.model('User', UserSchema);