const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./db/conn');
// const User = require('./models/userSchema');

app.use(express.json());

app.use(require('./router/auth'));
//Middleware

// const middleware = (req,res,next) => {
//     console.log(`Hello middleware`);
//     next;
// } 

// middleware();



// app.get('/about', (req, res) => {
//     res.send(`Hello world from about server`);
// })

app.get('/contact', (req, res) => {
    res.send(`Hello world from contact server`);
})

app.get('/signin', (req, res) => {
    res.send(`Hello world from signin server`);
})

app.get('/signup', (req, res) => {
    res.send(`Hello world from signup server`);
})

app.listen(5000, () =>{
    console.log(`Server is running at port no 5000`);
})

