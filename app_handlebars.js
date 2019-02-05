const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// handlebars is required to be imported
const expressHbs = require('express-handlebars');

// Assign third party templating engine to a field, 'hanglebars'
// app.engine('hbs', expressHbs());

// setup main layout directory, file name, and file extension(required)
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));

// Then, assign handlebars to the default engine
app.set('view engine', 'hbs');
// app.set('views', 'views');

const adminRouters = require('./routes/admin').router;
const shopRouters = require('./routes/shop'); 

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouters);
app.use(shopRouters);

app.use('/', (req, res, next) => {

    // res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));

    // we must use the same form of res.render for both pug and handlebars
    res.status(404).render('pageNotFound', { docTitle: 'Page Not Found' });

});

app.listen(3000, () => {

    console.log('Port: 3000')

});