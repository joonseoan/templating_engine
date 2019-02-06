const express = require('express');
const routers = express.Router();

const { users } = require('./user_inputs');

routers.get('/', (req, res, next) => {
    
    // res.send('<h1>working!!!</h1>');
    res.render('users', { pageTitle: 'Users', users })
});

module.exports = routers;

