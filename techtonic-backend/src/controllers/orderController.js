const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const emailService = require('../utils/emailService');
const { updateStock } = require('./productController');

exports.createOrder = async (req, res) => {
  try {
    const { customerInfo, paymentMethod = 'cash' } = req.body;

    const cart = await Cart.findOne({ user: req.user.id })
      .populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Validate stock
    for (let item of cart.items) {
      if (item.product.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for ${item.product.name}`
        });
      }
    }

    const orderItems = cart.items.map(item => ({
      product: item.product._id,
      name: item.product.name,
      price: item.price,
      quantity: item.quantity,
      image: item.product.images[0]?.url
    }));

    const order = new Order({
      user: req.user.id,
      items: orderItems,
      totalAmount: cart.totalAmount,
      customerInfo,
      paymentInfo: {
        method: paymentMethod,
        status: paymentMethod === 'cash' ? 'paid' : 'pending'
      }
    });

    await order.save();

    // Update stock for each product
    for (let item of cart.items) {
      await updateStock(item.product._id, item.quantity);
    }

    // Clear cart
    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    // Send confirmation email
    try {
      await emailService.sendOrderConfirmation(order, req.user);
    } catch (emailError) {
      console.error('Confirmation email failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate('items.product', 'name images');

    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.id
    }).populate('items.product', 'name images');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
