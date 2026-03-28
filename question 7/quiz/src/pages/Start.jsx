import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1>🧠 Web Dev Quiz</h1>
      <p>Test your knowledge with these 5 questions!</p>
      <Link to="/quiz">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
          Start Quiz
        </button>
      </Link>
    </div>
  );
}