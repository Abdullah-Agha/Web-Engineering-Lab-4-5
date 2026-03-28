import { useState } from 'react';

export default function Checkout({ cart, setCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setCart([]); // Empty the cart after successful purchase!
  };

  if (isSubmitted) {
    return <h2>🎉 Thank you for your purchase! Your order is being processed.</h2>;
  }

  return (
    <div>
      <h2>Checkout Form</h2>
      <p>You are buying {cart.length} items.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <input type="text" placeholder="Full Name" required style={{ padding: '8px' }} />
        <input type="email" placeholder="Email" required style={{ padding: '8px' }} />
        <input type="text" placeholder="Address" required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Complete Purchase
        </button>
      </form>
    </div>
  );
}