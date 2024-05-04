const express = require('express');
import { createProduct, fetchAllProducts, fetchProductById, updateProduct } from "..//node-backend/conroller/Product"

const router = express.Router();

router.post('/',createProduct)
    .get('/',fetchAllProducts)
    .get('/',fetchProductById)
    .patch('/:id', updateProduct)

exports.router = router;
