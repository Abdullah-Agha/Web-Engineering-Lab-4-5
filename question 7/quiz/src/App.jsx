// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  // Lifted state to pass the final score to the Result page
  const [score, setScore] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz setScore={setScore} />} />
        <Route path="/result" element={<Result score={score} setScore={setScore} />} />
      </Routes>
    </div>
  );
}

export default App;