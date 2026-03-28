import { useState } from 'react';

function App() {
  // 1. State to track the currently selected tab
  const [activeTab, setActiveTab] = useState('profile');

  // 2. A helper function to render the correct content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div style={contentStyle}>
            <h2 style={{ marginTop: 0 }}>👤 User Profile</h2>
            <p><strong>Name:</strong> Jane Doe</p>
            <p><strong>Email:</strong> jane.doe@example.com</p>
            <p><strong>Role:</strong> Senior Developer</p>
            <button style={btnStyle}>Edit Profile</button>
          </div>
        );
      case 'settings':
        return (
          <div style={contentStyle}>
            <h2 style={{ marginTop: 0 }}>⚙️ Account Settings</h2>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              <input type="checkbox" defaultChecked /> Enable Email Notifications
            </label>
            <label style={{ display: 'block', marginBottom: '20px' }}>
              <input type="checkbox" /> Enable Dark Mode (Beta)
            </label>
            <button style={btnStyle}>Save Changes</button>
          </div>
        );
      case 'analytics':
        return (
          <div style={contentStyle}>
            <h2 style={{ marginTop: 0 }}>📊 Weekly Analytics</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={statBox}>
                <h3>Views</h3>
                <p style={{ fontSize: '24px', margin: 0, color: '#007bff' }}>1,245</p>
              </div>
              <div style={statBox}>
                <h3>Clicks</h3>
                <p style={{ fontSize: '24px', margin: 0, color: '#28a745' }}>342</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Admin Dashboard</h1>

      {/* --- TAB BUTTONS --- */}
      <div style={{ display: 'flex', borderBottom: '2px solid #ddd', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('profile')}
          style={getTabStyle(activeTab === 'profile')}
        >
          Profile
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          style={getTabStyle(activeTab === 'settings')}
        >
          Settings
        </button>
        <button 
          onClick={() => setActiveTab('analytics')}
          style={getTabStyle(activeTab === 'analytics')}
        >
          Analytics
        </button>
      </div>

      {/* --- TAB CONTENT --- */}
      <div style={{ minHeight: '250px' }}>
        {renderContent()}
      </div>

    </div>
  );
}

// --- STYLING HELPERS ---
// This keeps the JSX clean by moving the inline styles down here

const getTabStyle = (isActive) => ({
  flex: 1,
  padding: '15px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  backgroundColor: isActive ? '#fff' : '#f8f9fa',
  color: isActive ? '#007bff' : '#555',
  border: 'none',
  borderBottom: isActive ? '3px solid #007bff' : '3px solid transparent',
  transition: 'all 0.2s ease-in-out',
});

const contentStyle = {
  padding: '30px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #eee'
};

const statBox = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#f8f9fa',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center'
};

const btnStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default App;