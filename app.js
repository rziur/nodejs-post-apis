//WE IMPORT THE PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//WE EXECUTED
const app = express();
app.use(bodyParser.json());

//CONNECT TO DB
mongoose.connect('mongodb://localhost:27017/iugo_test',
    { useNewUrlParser: true }, 
    ()=> console.log('CONNECTED TO DB!!!')            
);

//IMPORT ROUTES
const userRoute = require('./routes/user_route');
const postRoute = require('./routes/post_route');
 
//MIDDLEWARES
app.use('/api/user', userRoute); 
app.use('/api/post', postRoute); 

//INITIAL ROUTE
app.get('/api', (req, res) => {
    res.send('WE ARE ON HOME NOW!!!');        
});

//HANDLING CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Methods, Access-Control-Request-Headers, X-Access-Token, Authorization');
    res.header("Access-Control-Allow-Headers", "Origing, X-Requested-With, Content-Type, Origin");
    next();
});

//HOW TO WE START LISTENING TO THE SERVER
app.listen(3000);
