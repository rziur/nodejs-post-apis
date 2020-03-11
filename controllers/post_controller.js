var Post = require('../models/Post');
var Comment = require('../models/Comment');

function PostController() {

    this.getPost = (req, res, next) => {
        Post.findById(req.params.postId).populate('comments_array').then(item => {
            res.status(200).json({ 'data': item });
        }).catch(err => {
            res.status(400).json({ 'err': err });
        })
    };

    this.getPosts = (req, res, next) => {
        Post.find().populate('comments_array').then(item => {
            res.status(200).json({ 'data': item });
        }).catch(err => {
            res.status(500).json({ 'err': err });
            ;
        });
    };

    this.createCommentPost = (req, res, next) => {
        Post.findById(req.params.postId).then(item_post => {
            let item_comment = new Comment({
                message: req.body.message,
            });
            item_comment.save();
            item_post.comments_array.push(item_comment);
            item_post.save().then(obj => {
                res.status(200).json({ 'msg': 'ok' });
            }).catch(err => {
                res.status(400).json({ 'err': err });
            })
        }).catch(err => {
            res.status(500).json({ 'err': err });
        })
    };

    this.updatePost = (req, res, next) => {
        Post.findById(req.params.postId).populate('comments_array').then(item_post => {

            item_post.title = req.body.title;
            item_post.body = req.body.body;

            item_post.save().then(obj => {
                res.status(200).json({ "msg": "ok" });
            }).catch(err => {
                res.status(400).json({ 'err': err });
            })
        }).catch(err => {
            res.status(500).json({ 'err': err });
        })
    };
}
module.exports = new PostController();