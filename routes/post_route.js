const express = require('express');
const routes = express.Router();

var PostController = require('../controllers/post_controller');
           
routes.get("/:postId", PostController.getPost);                                                    
routes.get("/", PostController.getPosts);     
routes.put("/comment/:postId", PostController.createCommentPost);
routes.put("/:postId", PostController.updatePost);     

module.exports = routes;