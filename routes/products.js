
const express= require('express');
const { getAllProducts, getAllProductsTesting, getProduct } = require('../controllers/products');
const router= express.Router();


router.route('/').get(getAllProducts);
router.route('/singleproduct/:id').get(getProduct);
router.route('/testing').get(getAllProductsTesting);

module.exports= router;