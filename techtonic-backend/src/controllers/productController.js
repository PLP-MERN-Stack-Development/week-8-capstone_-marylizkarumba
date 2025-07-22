const Product = require('../models/Product');
const emailService = require('../utils/emailService');

exports.getProducts = async (req, res) => {
  try {
    const {
      category,
      search,
      page = 1,
      limit = 12,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (search) filter.$text = { $search: search };

    const skip = (page - 1) * limit;
    const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      products,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalProducts: total
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product || !product.isActive) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStock = async (productId, quantity) => {
  try {
    const product = await Product.findById(productId);
    if (!product) return;

    product.stock -= quantity;
    await product.save();

    // Send low stock alert if stock is below 5
    if (product.stock <= 5) {
      try {
        await emailService.sendLowStockAlert(product);
      } catch (emailError) {
        console.error('Low stock email failed:', emailError);
      }
    }
  } catch (error) {
    console.error('Stock update failed:', error);
  }
};
