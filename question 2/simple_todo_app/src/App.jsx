import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // 1. ADD a task
  const addTask = () => {
    if (taskInput.trim() === '') return; 
    const newTask = { id: Date.now(), text: taskInput, isDone: false };
    setTodos([...todos, newTask]); 
    setTaskInput(''); 
  };

  // 2. TOGGLE "done" status
  const toggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  // 3. DELETE a task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>Simple Todo App ✅</h2>
      
      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
          placeholder="Add a new task..."
          style={{ padding: '8px', width: '70%' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px', marginLeft: '5px' }}>Add</button>
      </div>

      {/* List Section */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ 
              display: 'flex', justifyContent: 'space-between', padding: '10px',
              marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px',
              backgroundColor: todo.isDone ? '#d4edda' : '#f8f9fa',
              textDecoration: todo.isDone ? 'line-through' : 'none'
            }}>
            
            <span onClick={() => toggleDone(todo.id)} style={{ cursor: 'pointer', flexGrow: 1, textAlign: 'left' }}>
              {todo.text}
            </span>
            
            <button onClick={() => deleteTask(todo.id)} style={{ background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;