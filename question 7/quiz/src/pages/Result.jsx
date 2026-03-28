import { Link } from 'react-router-dom';

export default function Result({ score, setScore }) {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2>🎉 Quiz Complete!</h2>
      <h1 style={{ fontSize: '48px', color: '#007bff', margin: '20px 0' }}>{score} / 5</h1>
      <p>Great job taking the quiz.</p>
      
      <Link to="/">
        <button 
          onClick={() => setScore(0)} // Reset score when going home
          style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
}