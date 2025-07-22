const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrder
} = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth); // All order routes require authentication

router.post('/', createOrder);
router.get('/', getUserOrders);
router.get('/:id', getOrder);

module.exports = router;
