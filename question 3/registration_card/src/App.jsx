import { useState } from 'react';

function App() {
  // 1. State for the list of registered users
  const [users, setUsers] = useState([]);
  
  // 2. State for the current form inputs
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  // Handle changes in the input fields
  const handleChange = (e) => {
    // This dynamically updates the correct field (name, email, or role)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill out all fields!");
      return;
    }

    const newUser = { id: Date.now(), ...formData };
    setUsers([...users, newUser]); // Add new user to the array
    
    // Clear the form
    setFormData({ name: '', email: '', role: '' }); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>User Registration Portal</h2>

      {/* --- FORM SECTION --- */}
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto 30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          value={formData.email} onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <input 
          type="text" name="role" placeholder="Role (e.g., Student, Admin)" 
          value={formData.role} onChange={handleChange} 
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Register User
        </button>
      </form>

      {/* --- CARDS DISPLAY SECTION --- */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {users.length === 0 ? <p>No users registered yet.</p> : null}
        
        {users.map(user => (
          <div key={user.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              👤
            </div>
            <h3 style={{ margin: '0 0 5px', textAlign: 'center' }}>{user.name}</h3>
            <p style={{ margin: '0 0 5px', fontSize: '14px', textAlign: 'center', color: '#555' }}>{user.email}</p>
            <p style={{ margin: '0', fontSize: '14px', textAlign: 'center', fontWeight: 'bold', color: '#007bff' }}>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;