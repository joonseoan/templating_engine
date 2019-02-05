const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// ejs like pug, it is from node's box.
// Hence, we do not need to explicitly import it.
app.set('view engine', 'ejs');
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