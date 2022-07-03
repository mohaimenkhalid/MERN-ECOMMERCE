const express = require('express')
const router = express.Router();
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controllers/productController')

router.route('/products').get(getAllProducts)
router.route('/product/create').post(createProduct)
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)
module.exports = router;
