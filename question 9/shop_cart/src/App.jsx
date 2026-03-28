import { useState } from 'react';

function App() {
  // 1. Hardcoded inventory
  const products = [
    { id: 1, name: "Mechanical Keyboard", price: 120, icon: "⌨️" },
    { id: 2, name: "Gaming Mouse", price: 60, icon: "🖱️" },
    { id: 3, name: "Ultra-wide Monitor", price: 350, icon: "🖥️" },
    { id: 4, name: "Desk Mat", price: 25, icon: "⬛" },
  ];

  // 2. State for the cart
  const [cart, setCart] = useState([]);

  // 3. Add to Cart Logic
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If it's already in the cart, just increase the quantity
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If it's new, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 4. Update Quantity Logic (+ and - buttons)
  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + amount;
        // Prevent quantity from dropping below 1 using Math.max
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    }));
  };

  // 5. Remove Item Logic
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // 6. Calculate Total
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', fontFamily: 'Arial', padding: '0 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      
      {/* --- LEFT SIDE: STOREFRONT --- */}
      <div style={{ flex: '2', minWidth: '300px' }}>
        <h1 style={{ color: '#333' }}>🏪 Dev Shop</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>{product.icon}</div>
              <h3 style={{ margin: '0 0 10px' }}>{product.name}</h3>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745', margin: '0 0 15px' }}>${product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT SIDE: SHOPPING CART --- */}
      <div style={{ flex: '1', minWidth: '350px', backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '1px solid #ddd', height: 'fit-content' }}>
        <h2 style={{ marginTop: 0, borderBottom: '2px solid #333', paddingBottom: '10px' }}>🛒 Your Cart</h2>
        
        {cart.length === 0 ? (
          <p style={{ color: '#777', fontStyle: 'italic' }}>Your cart is empty.</p>
        ) : (
          <div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {cart.map(item => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #ccc' }}>
                  
                  {/* Item Info */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px', fontSize: '16px' }}>{item.icon} {item.name}</h4>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>${item.price} each</p>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '15px' }}>
                    <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>-</button>
                    <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>+</button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Total Area */}
            <div style={{ marginTop: '20px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span style={{ color: '#28a745' }}>${totalPrice}</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;