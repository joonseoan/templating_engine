const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const userRoutes = require('./routes/users');
const inputRoutes = require('./routes/user_inputs').routers;

app.use(bodyParser.urlencoded({ extended: false }));

// working with css file.
// "express.static()": create a middleware to serve a file within a given root directory
//      and then grant a acess permission to that folder
// No matter where the requesting file is, public folder can reached at "./" 
//      which means the same directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoutes);
app.use(inputRoutes);

app.use('/', (req, res, next) => {
    res.status('404').render('pageNotFound', {pageTitle: 'Page Not Found'});
});

app.listen(4000, () => {
    console.log('Listening the requests');
});
