import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz({ setScore }) {
  const navigate = useNavigate();

  const questions = [
    { q: "What does HTML stand for?", options: ["Hyper Text", "Hot Mail", "How To Make", "Hyperlinks"], answer: "Hyper Text" },
    { q: "Which company developed React?", options: ["Google", "Apple", "Meta", "Amazon"], answer: "Meta" },
    { q: "What is the default port for Vite?", options: ["3000", "8080", "5173", "4200"], answer: "5173" },
    { q: "Which hook is used for state in React?", options: ["useEffect", "useState", "useRouter", "useContext"], answer: "useState" },
    { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Array to store the user's selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null)); 

  const handleSelect = (option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const calculateScoreAndSubmit = () => {
    let finalScore = 0;
    selectedAnswers.forEach((ans, index) => {
      if (ans === questions[index].answer) finalScore += 1;
    });
    setScore(finalScore);
    navigate('/result'); // Jump to the results page!
  };

  return (
    <div style={{ width: '400px', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2>Question {currentIndex + 1} of 5</h2>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{questions[currentIndex].q}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
        {questions[currentIndex].options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleSelect(opt)}
            style={{ 
              padding: '10px', textAlign: 'left', cursor: 'pointer', borderRadius: '5px',
              border: selectedAnswers[currentIndex] === opt ? '2px solid #007bff' : '1px solid #ccc',
              backgroundColor: selectedAnswers[currentIndex] === opt ? '#e6f2ff' : 'white'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button 
          onClick={() => setCurrentIndex(currentIndex - 1)} 
          disabled={currentIndex === 0}
          style={{ padding: '8px 16px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
        >
          Previous
        </button>

        {currentIndex === 4 ? (
          <button onClick={calculateScoreAndSubmit} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
        ) : (
          <button onClick={() => setCurrentIndex(currentIndex + 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}