const express = require('express');

const router = express.Router();

// const path = require('path');
 
const rootDir = require('../utils/path');
const { products } = require('./admin');

router.get('/', (req, res, next) => {

   // It will be stored in Node server.
   //    Therefore, the elements appears in the other browser.
   console.log('products at shop: ', products)
   
   // 1) When implementing .html
   // res.sendFile(path.join(rootDir, 'views', 'shop.html')); 

   // 2) When implementing .pug which is a default templating engine
   res.render('shop', { products, docTitle: 'Shop' });

});

module.exports = router;