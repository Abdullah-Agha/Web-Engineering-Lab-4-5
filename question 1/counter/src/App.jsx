import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Current value [cite: 151]
  const [history, setHistory] = useState([]); // Array to store past counts

  const updateCount = (newValue) => {
    setHistory([...history, count]); // Save current count to history before changing [cite: 164]
    setCount(newValue);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Counter with History</h1>
      <h2>Current Count: {count}</h2>

      <button onClick={() => updateCount(count + 1)}>Increment (+)</button>
      <button onClick={() => updateCount(count - 1)}>Decrement (-)</button>
      <button onClick={() => { setHistory([]); setCount(0); }}>Reset</button>

      <h3>History Log</h3>
      <ul>
        {history.map((h, index) => (
          <li key={index}>Value was: {h}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;