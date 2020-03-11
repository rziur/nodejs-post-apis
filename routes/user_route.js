const express = require('express');
const routes = express.Router();

var UserController = require('../controllers/user_controller');

routes.post("/", UserController.createUser);               
routes.get("/:userId", UserController.getUser);                                                    
routes.get("/", UserController.getUsers);     
routes.get("/posts/:userId", UserController.getUserPosts);     
routes.put("/:userId", UserController.createPostUser);   

module.exports = routes;
