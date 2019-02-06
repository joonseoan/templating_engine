const express = require('express');
const routers = express.Router();

const users = [];

routers.get('/userInput', (req, res, next) => {

   res.render('userInput', { pageTitle: 'User Input' }); 

});

routers.post('/userInput', (req, res, next) => {

    users.push(req.body.username);
    res.redirect('/');

});

module.exports = { routers, users };