# SpiceRoots - Indian Recipe Sharing Website

A beautiful, modern, and responsive Indian recipe sharing website built with HTML, CSS, and JavaScript. SpiceRoots celebrates the rich culinary heritage of India by providing a platform for food lovers to discover, share, and celebrate authentic Indian recipes.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Fully responsive layout that works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Indian Cuisine Theming**: Warm, vibrant colors inspired by Indian spices and culture
- **Interactive Search**: Real-time search functionality with category filtering
- **Recipe Categories**: Organized browsing by North Indian, South Indian, Street Food, Desserts, Vegetarian, and Beverages
- **User Authentication**: Login and signup modal forms (frontend only)
- **Contact Form**: Functional contact form with validation
- **Toast Notifications**: User-friendly notification system
- **Smooth Scrolling**: Enhanced navigation experience
- **Loading States**: Visual feedback for user interactions

### Technical Features
- **Vanilla JavaScript**: No frameworks required - pure HTML, CSS, and JavaScript
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Variables**: Consistent theming with CSS custom properties
- **Intersection Observer**: Performance-optimized scroll animations
- **Debounced Search**: Optimized search functionality
- **Keyboard Shortcuts**: Enhanced accessibility (Ctrl+K for search, Escape for modals)
- **Mobile-First Design**: Optimized for mobile devices

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### File Structure
```
spiceroots/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Palette
- **Primary**: #e74c3c (Warm Red)
- **Secondary**: #f39c12 (Golden Orange)
- **Accent**: #e67e22 (Deep Orange)
- **Text Dark**: #2c3e50 (Dark Blue-Gray)
- **Text Light**: #7f8c8d (Light Gray)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Animations
- Smooth hover effects on cards and buttons
- Scroll-triggered animations using Intersection Observer
- Ripple effects on button clicks
- Modal slide-in animations
- Toast notification animations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Customization

### Adding New Recipes
To add new recipes, edit the `recipes` array in `script.js`:

```javascript
const recipes = [
    {
        id: 7,
        title: "Your Recipe Name",
        author: "Chef Name",
        image: "image-url",
        rating: 4.5,
        time: "30 min",
        category: "north-indian", // or other categories
        tags: ["Tag1", "Tag2", "Tag3"],
        description: "Recipe description"
    }
    // ... more recipes
];
```

### Modifying Colors
Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... other variables */
}
```

### Adding New Categories
1. Add category card in `index.html`
2. Update category filtering logic in `script.js`
3. Add corresponding CSS styles if needed

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📋 Sample Recipes Included

1. **Butter Chicken** - Rich and creamy North Indian curry
2. **Masala Dosa** - Crispy South Indian crepe
3. **Pani Puri** - Popular street food snack
4. **Gulab Jamun** - Traditional Indian dessert
5. **Palak Paneer** - Healthy vegetarian curry
6. **Masala Chai** - Spiced Indian tea

## 🎯 Future Enhancements

### Backend Integration
- User authentication and profiles
- Recipe submission and management
- Database integration for recipes
- User ratings and reviews
- Recipe saving and favorites

### Additional Features
- Recipe detail pages with full instructions
- Ingredient lists and nutritional information
- Cooking time and difficulty levels
- Recipe sharing on social media
- Advanced search filters
- Recipe recommendations
- User-generated content moderation

### Technical Improvements
- Progressive Web App (PWA) features
- Service worker for offline functionality
- Image optimization and lazy loading
- SEO optimization
- Performance monitoring
- Analytics integration

## 🤝 Contributing

This is a frontend-only demonstration project. For a production application, consider:

1. Adding a backend API (Node.js, Python, C# ASP.NET Core)
2. Implementing a database (MongoDB, PostgreSQL, SQL Server)
3. Adding user authentication (JWT, OAuth)
4. Implementing image upload and storage
5. Adding form validation and security measures

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Images**: Unsplash for high-quality food photography
- **Icons**: Font Awesome for beautiful icons
- **Fonts**: Google Fonts for the Poppins typeface
- **Inspiration**: Indian culinary traditions and home cooks worldwide

## 📞 Contact

For questions or suggestions about this project:
- Email: hello@spiceroots.com
- Website: [SpiceRoots Demo](https://your-domain.com)

---

**SpiceRoots** - Connecting the world through the flavors of India 🌶️ 