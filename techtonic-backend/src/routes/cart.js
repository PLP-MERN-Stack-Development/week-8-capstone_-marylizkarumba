const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart
} = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth); // All cart routes require authentication

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateCartItem);
router.delete('/remove/:productId', removeFromCart);

module.exports = router;
