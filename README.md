# MERN Stack Capstone Project

This assignment focuses on designing, developing, and deploying a comprehensive full-stack MERN application that showcases all the skills you've learned throughout the course.

## Assignment Overview

You will:
1. Plan and design a full-stack MERN application
2. Develop a robust backend with MongoDB, Express.js, and Node.js
3. Create an interactive frontend with React.js
4. Implement testing across the entire application
5. Deploy the application to production

## Getting Started

1. Accept the GitHub Classroom assignment
2. Clone the repository to your local machine
3. Follow the instructions in the `Week8-Assignment.md` file
4. Plan, develop, and deploy your capstone project

## Files Included

- `Week8-Assignment.md`: Detailed assignment instructions

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git and GitHub account
- Accounts on deployment platforms (Render/Vercel/Netlify/etc.)

## Project Ideas

The `Week8-Assignment.md` file includes several project ideas, but you're encouraged to develop your own idea that demonstrates your skills and interests.

## Submission

Your project will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Commit and push your code regularly
2. Include comprehensive documentation
3. Deploy your application and add the live URL to your README.md
4. Create a video demonstration and include the link in your README.md

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [GitHub Classroom Guide](https://docs.github.com/en/education/manage-coursework-with-github-classroom)

TechTonic - Modern Tech E-commerce Website
A vibrant, modern, and fully responsive tech e-commerce website built with React, TypeScript, and Tailwind CSS. TechTonic features a bright, colorful design with smooth animations and an intuitive shopping experience.

🏢 About TechTonic
TechTonic is your premier destination for cutting-edge technology products, designed to revolutionize how you shop for tech. We specialize in curating the latest and greatest technology products from trusted brands, making it easy for tech enthusiasts, professionals, and everyday consumers to find exactly what they need.

Our Mission
To democratize access to premium technology by providing a seamless, enjoyable shopping experience that connects people with the devices that enhance their digital lives.

What We Offer
Premium Product Curation: Hand-selected devices from top brands like Apple, Samsung, Sony, and more
Competitive Pricing: Best-in-market prices with regular promotions and deals
Expert Reviews: Detailed product insights and ratings to help you make informed decisions
Fast Delivery: Quick and reliable shipping across all locations
Customer Support: Dedicated support team for all your tech needs
Target Audience
Tech Enthusiasts: Early adopters who want the latest gadgets and innovations
Professionals: Business users seeking reliable, high-performance devices
Students: Budget-conscious shoppers looking for quality tech for education
Families: Parents and individuals seeking user-friendly, reliable technology
Gamers: Gaming enthusiasts in need of high-performance hardware and accessories
Business Model
TechTonic operates as a B2C e-commerce platform, generating revenue through:

Direct product sales with competitive margins
Partnership programs with manufacturers
Extended warranty and service plans
Accessory and complementary product sales
🌟 Features
🎨 Modern Design
Bright & Vibrant UI: Eye-catching gradient backgrounds and colorful sections
Fully Responsive: Optimized for desktop, tablet, and mobile devices
Smooth Animations: Hover effects, transitions, and interactive elements
Modern Typography: Clean, readable fonts with proper hierarchy
🛍️ E-commerce Functionality
Product Categories: 6 main categories (Phones, Laptops, Smartwatches, Gaming, Audio, Accessories)
Interactive Shopping Cart: Add/remove items with real-time updates
Product Grid Layouts: Beautiful card-based product displays
Hover Effects: Engaging product card interactions
📱 Product Categories
Smartphones: Latest iPhone and Android devices
Laptops: MacBooks, gaming laptops, and ultrabooks
Smartwatches: Apple Watch, Samsung Galaxy Watch, and fitness trackers
Gaming: Consoles, accessories, and gaming peripherals
Audio: Headphones, earbuds, and speakers
Accessories: Cases, chargers, and tech accessories
🎯 User Experience
Hero Section: Dynamic landing area with call-to-action
Navigation: Smooth scrolling between sections
Contact Form: Easy way for customers to get in touch
Mobile-First: Designed for mobile users first
🚀 Tech Stack
Frontend Framework: React 18 with TypeScript
Styling: Tailwind CSS for utility-first styling
Build Tool: Vite for fast development and building
UI Components: shadcn/ui component library
Icons: Lucide React for consistent iconography
State Management: React Query (TanStack Query)
Routing: React Router DOM
📦 Installation & Setup
Prerequisites
Node.js (v18 or higher)
npm or yarn package manager
Quick Start
Clone the repository

git clone <YOUR_GIT_URL>
cd techtonic-emporium-vogue
Install dependencies

npm install
Start the development server

npm run dev
Open your browser Navigate to http://localhost:8080 to see the website

Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build locally
npm run lint - Run ESLint for code quality
🏗️ Project Structure
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
🎨 Design Features
Color Scheme
Primary Colors: Bright gradients (purple, pink, blue)
Accent Colors: Vibrant oranges, greens, and reds
Background: Dynamic gradient overlays
Text: High contrast for readability
Responsive Breakpoints
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
🛒 Shopping Cart Features
Add products to cart with one click
View cart items in a slide-out panel
Update quantities or remove items
Real-time cart total calculation
Persistent cart state during session
📞 Contact & Support
The website includes a contact form with:

Name and email fields
Message textarea
Form validation
Responsive design
🚀 Deployment
npm run build
# Upload the 'dist' folder to your hosting provider
🔧 Customization
Adding New Products
Products are currently stored in the component state. To add new products:

Navigate to src/pages/Index.tsx
Find the products array in each category
Add your product following this structure:
{
  id: number,
  name: string,
  price: number,
  image: string,
  category: string
}
Changing Colors
The color scheme uses Tailwind CSS classes. Main colors can be updated by modifying:

Gradient backgrounds: bg-gradient-to-* classes
Button colors: bg-* and hover:bg-* classes
Text colors: text-* classes
Adding New Sections
To add new sections:

Create the section in src/pages/Index.tsx
Add navigation link in the header
Implement smooth scrolling behavior
🤝 Contributing
Fork the project
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📄 License
This project is open source and available under the MIT License.
