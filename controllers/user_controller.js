var User = require('../models/User');
var Post = require('../models/Post');

function UserController() {
    
    this.createUser = (req, res) => {
        let item = new User({
            name: req.body.name,
            email: req.body.email,
        });
        item.save().then(us => {
            res.status(200).json({ 'user': item });
        }).catch(err => {
            res.status(400).json({ 'err': err });
        })
    };

    this.getUser = (req, res, next) => {
        User.findById(req.params.userId).populate('posts_array').then(item => {
            res.status(200).json({ 'data': item });
        }).catch(err => {
            res.status(400).json({ 'err': err });
        })
    };

    this.getUserPosts = (req, res, next) => {
        User.findById(req.params.userId).populate('posts_array').then(item => {
            res.status(200).json({ 'data': item.posts_array });
        }).catch(err => {
            res.status(400).json({ 'err': err });
        })
    };

    this.getUsers = (req, res, next) => {
        User.find().populate('posts_array').then(item => {
            res.status(200).json({ 'data': item });
        }).catch(err => {
            res.status(500).json({ 'err': err });
            ;
        });
    };

    this.createPostUser = (req, res, next) => {
        User.findById(req.params.userId).then(item_user => {
            let item_post = new Post({
                title: req.body.title,
                body: req.body.body,
            });
            item_post.save();
            item_user.posts_array.push(item_post);
            item_user.save().then(obj => {
                res.status(200).json({ 'msg': 'ok' });
            }).catch(err => {
                res.status(400).json({ 'err': err });
            })
        }).catch(err => {
            res.status(500).json({ 'err': err });
        })
    };
}
module.exports = new UserController();