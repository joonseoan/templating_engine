const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// global confiuration value
/* 
    app.set(name, value)
    Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. These special names are listed in the app settings table.
    Calling app.set('foo', true) for a Boolean property is the same as calling app.enable('foo'). Similarly, calling app.set('foo', false) for a Boolean property is the same as calling app.disable('foo').

    Retrieve the value of a setting with app.get().

    app.set('title', 'My Site');
    app.get('title'); // "My Site"
*/


/* 
    [view engines]
    The default engine extension to use when omitted.
    NOTE: Sub-apps will inherit the value of this setting.

    [views]
    A directory or an array of directories for the application's views. 
    If an array, the views are looked up in the order they occur in the array.

    */
app.set('view engine', 'pug');
// app.set('views', 'views');

const adminRouters = require('./routes/admin').router;
const shopRouters = require('./routes/shop'); 

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouters);
app.use(shopRouters);

app.use('/', (req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));

});

app.listen(3000, () => {

    console.log('Port: 3000')

});