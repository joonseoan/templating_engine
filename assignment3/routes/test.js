const express = require('express');
const routers = express.Router();
const path = require('path');

const rootPath = require('../utils/rootPath');

module.exports = routers.get('/', (req, res, next) => {

    res.sendFile(path.join(rootPath, 'views', 'test.html'));

});