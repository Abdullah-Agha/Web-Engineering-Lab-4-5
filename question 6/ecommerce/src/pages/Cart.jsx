import { Link } from 'react-router-dom';

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <Link to="/checkout">
            <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none' }}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}