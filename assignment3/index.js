const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const passRoutes = require('./routes/pass');
const testRoutes = require('./routes/test');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(testRoutes);
app.use('/test', passRoutes);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Page Not Found: 404</h1>`);
});


app.listen(3000, () => {

    console.log('Assignment server is up!!!');
});