import { useState } from 'react';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [history, setHistory] = useState([]); // State to hold our log

  // Handle Celsius input
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === '') {
      setFahrenheit('');
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  // Handle Fahrenheit input
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === '') {
      setCelsius('');
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  // Save the current conversion to the history array
  const saveToHistory = () => {
    if (celsius !== '' && fahrenheit !== '') {
      const newEntry = `${celsius}°C = ${fahrenheit}°F`;
      // Add the new entry to the top of the history list
      setHistory([newEntry, ...history]); 
    }
  };

  // Clear the history log
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', backgroundColor: '#e9ecef', fontFamily: 'Arial', padding: '40px 20px' }}>
      
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h2 style={{ color: '#333', marginBottom: '30px' }}>Temperature Converter</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Celsius Input */}
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', color: '#555' }}>Celsius (°C)</label>
            <input 
              type="number" 
              value={celsius} 
              onChange={handleCelsiusChange}
              placeholder="Enter Celsius"
              style={{ width: '100%', padding: '12px', marginTop: '8px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ fontSize: '24px', color: '#888', fontWeight: 'bold' }}>=</div>

          {/* Fahrenheit Input */}
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', color: '#555' }}>Fahrenheit (°F)</label>
            <input 
              type="number" 
              value={fahrenheit} 
              onChange={handleFahrenheitChange}
              placeholder="Enter Fahrenheit"
              style={{ width: '100%', padding: '12px', marginTop: '8px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {/* Save Button */}
        <button 
          onClick={saveToHistory}
          style={{ width: '100%', padding: '12px', marginTop: '25px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer' }}
        >
          Save to History
        </button>

        {/* --- HISTORY LOG SECTION --- */}
        <div style={{ marginTop: '30px', textAlign: 'left', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{ margin: 0, color: '#333' }}>History Log</h3>
            {history.length > 0 && (
              <button onClick={clearHistory} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                Clear
              </button>
            )}
          </div>
          
          {history.length === 0 ? (
            <p style={{ color: '#888', fontSize: '14px' }}>No history yet.</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {history.map((entry, index) => (
                <li key={index} style={{ padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '8px', fontSize: '14px', color: '#555' }}>
                  {entry}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;