import { useState } from 'react';

function App() {
  // 1. Our "Database" of products
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 99.99 },
    { id: 2, name: "Running Shoes", category: "Apparel", price: 75.50 },
    { id: 3, name: "Coffee Maker", category: "Home & Kitchen", price: 45.00 },
    { id: 4, name: "Mechanical Keyboard", category: "Electronics", price: 120.00 },
    { id: 5, name: "Water Bottle", category: "Accessories", price: 15.99 },
    { id: 6, name: "Desk Lamp", category: "Home & Kitchen", price: 25.00 }
  ];

  // 2. States for our TWO filters
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(150); // 150 is our default max

  // 3. The Dual-Filter Logic
  const filteredProducts = products.filter(product => {
    // Check if the name matches
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Check if the price is less than or equal to the chosen max price
    const matchesPrice = product.price <= maxPrice;
    
    // Only keep the product if BOTH are true
    return matchesName && matchesPrice;
  });

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>🛒 Product Catalog Search</h2>

      {/* --- FILTER CONTROLS SECTION --- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        
        {/* Name Filter */}
        <input
          type="text"
          placeholder="Search for a product by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        {/* Price Filter (Slider) */}
        <div style={{ width: '80%', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold' }}>
            Max Price: ${maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="150"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: '100%', marginTop: '8px', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* --- PRODUCT LIST SECTION --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} style={{ 
              border: '1px solid #eee', borderRadius: '10px', padding: '20px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#fff' 
            }}>
              <h3 style={{ margin: '0 0 10px', color: '#333' }}>{product.name}</h3>
              <p style={{ margin: '0 0 10px', color: '#777', fontSize: '14px' }}>{product.category}</p>
              <p style={{ margin: '0', fontWeight: 'bold', color: '#28a745', fontSize: '18px' }}>
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', color: '#888', fontSize: '18px' }}>
            No products found matching your filters. 🕵️‍♂️
          </p>
        )}
      </div>
    </div>
  );
}

export default App;