import { useState } from 'react';

function App() {
  // 1. The initial "Database" of students
  const initialStudents = [
    { id: 1, name: "Ali", marks: 85 },
    { id: 2, name: "Sara", marks: 92 },
    { id: 3, name: "Zain", marks: 78 },
    { id: 4, name: "Fatima", marks: 65 },
    { id: 5, name: "Omar", marks: 88 },
    { id: 6, name: "Ayesha", marks: 95 }
  ];

  // 2. State for filtering and sorting
  const [minMark, setMinMark] = useState(0);
  const [sortMethod, setSortMethod] = useState('marks-desc'); // Default: Highest marks first

  // 3. The Data Processing Pipeline! 
  // First we filter, THEN we sort the remaining results.
  const processedStudents = initialStudents
    .filter(student => student.marks >= minMark)
    .sort((a, b) => {
      if (sortMethod === 'marks-desc') return b.marks - a.marks; // Highest to Lowest
      if (sortMethod === 'marks-asc') return a.marks - b.marks;  // Lowest to Highest
      if (sortMethod === 'name-asc') return a.name.localeCompare(b.name); // A to Z
      if (sortMethod === 'name-desc') return b.name.localeCompare(a.name); // Z to A
      return 0;
    });

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>🎓 Student Marks Dashboard</h2>

      {/* --- CONTROLS SECTION --- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        
        {/* Filter Slider */}
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold' }}>
            Minimum Marks: {minMark}
          </label>
          <input 
            type="range" min="0" max="100" 
            value={minMark} 
            onChange={(e) => setMinMark(Number(e.target.value))} 
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        {/* Sort Dropdown */}
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
            Sort By:
          </label>
          <select 
            value={sortMethod} 
            onChange={(e) => setSortMethod(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="marks-desc">Marks (Highest First)</option>
            <option value="marks-asc">Marks (Lowest First)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* --- DATA TABLE SECTION --- */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Marks</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {processedStudents.length > 0 ? (
            processedStudents.map(student => (
              <tr key={student.id} style={{ backgroundColor: student.marks < 50 ? '#ffe6e6' : '#fff' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{student.name}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>{student.marks}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd', color: student.marks >= 50 ? 'green' : 'red' }}>
                  {student.marks >= 50 ? 'Pass' : 'Fail'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ padding: '20px', color: '#777' }}>No students meet this criteria.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;