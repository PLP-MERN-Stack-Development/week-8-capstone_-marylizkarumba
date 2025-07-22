const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendWelcomeEmail(user) {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Welcome to TechTonic!',
      html: `
        <h1>Welcome to TechTonic, ${user.name}!</h1>
        <p>Thank you for joining our tech community.</p>
        <p>Start exploring our amazing collection of tech gadgets!</p>
      `
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendOrderConfirmation(order, user) {
    const itemsList = order.items.map(item => 
      `<li>${item.name} - Qty: ${item.quantity} - KSh ${item.price}</li>`
    ).join('');

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: `Order Confirmation - ${order.orderNumber}`,
      html: `
        <h1>Order Confirmed!</h1>
        <p>Hello ${user.name},</p>
        <p>Your order has been confirmed:</p>
        <h3>Order Details:</h3>
        <p>Order Number: ${order.orderNumber}</p>
        <p>Total: KSh ${order.totalAmount}</p>
        <ul>${itemsList}</ul>
        <p>We'll notify you when your order ships!</p>
      `
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendLowStockAlert(product) {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Send to admin
      subject: 'Low Stock Alert',
      html: `
        <h1>Low Stock Alert</h1>
        <p>Product: ${product.name}</p>
        <p>Current Stock: ${product.stock}</p>
        <p>Please restock soon!</p>
      `
    };

    return await this.transporter.sendMail(mailOptions);
  }
}

module.exports = new EmailService();
