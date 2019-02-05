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
   //  res.render('shop', { products, docTitle: 'Shop', path: '/' });

   // for handlebars that does not support a method. Therefore, we need to define the method and to get return here.
   res.render('shop', { 
      products, 
      docTitle: 'Shop', 
      path: '/', 
      hasProducts: products.length > 0,
      activeShop: true,
      mainCSS: true

      // "layout" is a special key not to use default layout, "main-layout.hbs"
      // layout: false
    });
});

module.exports = router;