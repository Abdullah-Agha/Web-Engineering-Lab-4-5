export default function Products({ addToCart }) {
    const products = [
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Headphones", price: 150 },
      { id: 3, name: "Keyboard", price: 80 }
    ];
  
    return (
      <div>
        <h2>Our Products</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              {/* Notice how we use the function passed down from App.jsx! */}
              <button onClick={() => addToCart(product)}>Add to Cart</button> 
            </div>
          ))}
        </div>
      </div>
    );
  }