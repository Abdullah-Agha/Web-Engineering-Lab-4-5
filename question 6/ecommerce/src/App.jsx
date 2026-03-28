// src/App.jsx
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  // --- LIFTED STATE ---
  // The cart lives here so it doesn't get destroyed when changing pages!
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ fontFamily: 'Arial' }}>
      {/* --- NAVBAR --- */}
      <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Home</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>🛍️ Products</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>🛒 Cart ({cart.length})</Link>
      </nav>

      {/* --- ROUTES (Page Switcher) --- */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;