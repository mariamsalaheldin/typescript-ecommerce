# Pet Supplies Shopping Cart

A modern, responsive e-commerce shopping cart application built with React, TypeScript, and Bootstrap. This project demonstrates frontend development skills with a focus on state management, user experience, and component architecture.

## 🛍️ Features

- **Shopping Cart Functionality**: Add, remove, and update item quantities
- **Persistent Cart**: Cart contents saved in browser local storage
- **Responsive Design**: Mobile-friendly layout using Bootstrap 5
- **State Management**: Global cart state managed with React Context API
- **Type Safety**: Full TypeScript implementation with interfaces
- **Multi-page Navigation**: Home, Store, and About pages
- **Currency Formatting**: Consistent price display with custom utility
- **Component Architecture**: Modular, reusable components

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript 4.6, JavaScript (ES6+)
- **Routing**: React Router DOM 6
- **UI Framework**: Bootstrap 5, React Bootstrap 2
- **Build Tool**: Vite 2.9
- **State Management**: React Context API
- **Data Persistence**: Local Storage with custom hooks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-ts-shopping-cart.git
   cd react-ts-shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CartItem.tsx    # Individual cart item component
│   ├── Navbar.tsx      # Navigation bar
│   ├── ShoppingCart.tsx # Cart sidebar component
│   └── StoreItem.tsx   # Product card component
├── context/            # React Context for state management
│   └── ShoppingCartContext.tsx
├── data/               # Static data
│   └── items.json      # Product catalog
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Home.tsx        # Home page
│   └── Store.tsx       # Store page
├── utilities/          # Utility functions
│   └── formatCurrency.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### ShoppingCartContext
- Manages global cart state using React Context API
- Provides cart operations: add, remove, update quantities
- Handles cart persistence with local storage

### useLocalStorage Hook
- Custom hook for persistent state management
- Automatically syncs data with browser local storage
- Type-safe implementation with TypeScript

### StoreItem Component
- Displays individual product cards
- Handles add to cart functionality
- Shows quantity controls when item is in cart

### ShoppingCart Component
- Offcanvas sidebar for cart display
- Shows cart items with quantity and price
- Displays total cost with currency formatting

## 🎨 Features in Detail

### Shopping Cart
- Add items to cart with quantity controls
- Remove items completely from cart
- Update quantities with +/- buttons
- Real-time total calculation
- Persistent cart data across browser sessions

### Responsive Design
- Mobile-first approach with Bootstrap grid
- Responsive product catalog layout
- Collapsible cart sidebar
- Touch-friendly interface

### State Management
- Context API for global cart state
- TypeScript interfaces for type safety
- Local storage integration for persistence
- Optimized re-renders with proper state updates

## 🔧 Customization

### Adding New Products
1. Add product data to `src/data/items.json`
2. Include product image in `public/imgs/`
3. Update image path in the JSON file

### Styling
- Bootstrap classes for responsive layout
- Custom CSS can be added to components
- Color scheme can be modified in component styles

### Features to Add
- User authentication
- Backend API integration
- Payment processing
- Product categories and filtering
- Search functionality
- User reviews and ratings

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

[Your Name]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**Note**: This is a frontend-only application. All data is stored locally in the browser. For a production application, consider adding a backend API and database. 
- # Modified Project

This project is a modified version of the original work by [WebDevSimplified](https://github.com/WebDevSimplified). The original project is licensed under the MIT License, which permits free use, modification, and distribution under the terms outlined below.