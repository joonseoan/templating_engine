const express = require('express');

// mini express app
const router = express.Router();

const path = require('path');

// 2) dry-up
const rootDir = require('../utils/path');

const products = [];

// 'router' works exactly in the same way as app here
// ------------------ Gropued based on '/admin' -----------------
// by app.use('/admin', adminRouter)
router.get('/addProducts', (req, res, next) => {

    // res.send(`

    //     <form action="/admin/addProducts" method="POST">
    //         <input type="text", name="title">
    //         <button type="submit">Add Product</button>
    //     </form>
    // `);

    // 1) ../
    // res.sendFile(path.join(__dirname, '../', 'views', 'addProducts.html'));
    
    // 2) ..
    // '..' works as well.
    // res.sendFile(path.join(__dirname, '..', 'views', 'addProducts.html'));

    // 3) dry-up
    res.sendFile(path.join(rootDir, 'views', 'addProducts.html'));

});

router.post('/addProducts', (req, res, next) => {
    
    console.log(req.body.title);
    
    products.push(req.body.title);
    console.log(products);

    // it works without declaring 'GET'
    res.redirect('/');

});


module.exports = { router, products };
