const express = require('express');
const { createOrder, fetchOrderByUser, deleteOrder, updateOrder } = require('../conroller/Cart');
const { createOrder, fetchOrderByUser, updateOrder, deleteOrder } = require('../conroller/Order');

const router = express.Router();

router.post('/',createOrder)
    .get('/',fetchOrderByUser)
    .delete('/:id',deleteOrder)
    .patch('/:id',updateOrder)

exports.router = router;
