// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* --- NAVBAR --- */}
      <nav style={{ backgroundColor: '#282c34', padding: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
          📝 DevBlog
        </Link>
      </nav>

      {/* --- ROUTES --- */}
      <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* The :id part is a dynamic URL parameter! */}
          <Route path="/post/:id" element={<PostDetail />} /> 
        </Routes>
      </div>

    </div>
  );
}

export default App;