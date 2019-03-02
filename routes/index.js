const path = require('path');
const express = require('express');
const router = express.Router();

const indexController = require('../controllers');

router.get('/', indexController.getAllProducts);

router.post('/new', indexController.postAProduct);

router.get('/:slug', indexController.getOneProduct);

module.exports = router;