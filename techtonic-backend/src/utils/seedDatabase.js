require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');

const connectAndSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create admin user
    const adminExists = await User.findOne({ email: 'techtonic792@gmail.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'techtonic792@gmail.com',
        password: 'admin123',
        phone: '+254797552830',
        role: 'admin'
      });
      console.log('Admin user created');
    }

    // Sample products
    const products = [
      {
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        category: 'phones',
        price: 120000,
        description: 'Latest iPhone with Pro features and A17 Pro chip',
        specifications: [
          'Display: 6.1-inch Super Retina XDR',
          'Chip: A17 Pro',
          'Storage: 128GB',
          'Camera: 48MP Pro camera system'
        ],
        images: [{ url: '/images/iphone-15-pro.jpg', alt: 'iPhone 15 Pro' }],
        stock: 25,
        featured: true
      },
      {
        name: 'Samsung Galaxy S23 Ultra',
        brand: 'Samsung',
        category: 'phones',
        price: 110000,
        description: 'Premium Android phone with S Pen and advanced cameras',
        specifications: [
          'Display: 6.8-inch Dynamic AMOLED 2X',
          'Processor: Snapdragon 8 Gen 2',
          'RAM: 12GB',
          'Storage: 256GB'
        ],
        images: [{ url: '/images/samsung-galaxy-s23-ultra.jpg', alt: 'Samsung Galaxy S23 Ultra' }],
        stock: 30,
        featured: true
      }
    ];

    const existingProducts = await Product.countDocuments();
    if (existingProducts === 0) {
      await Product.insertMany(products);
      console.log('Sample products created');
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

connectAndSeed();
