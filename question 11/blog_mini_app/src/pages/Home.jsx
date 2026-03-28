// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { blogPosts } from '../data'; // Import our fake database

export default function Home() {
  return (
    <div>
      <h1 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Latest Posts</h1>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h2 style={{ margin: '0 0 10px', color: '#007bff' }}>{post.title}</h2>
            <p style={{ color: '#555', margin: '0 0 15px' }}>{post.excerpt}</p>
            
            <Link to={`/post/${post.id}`}>
              <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Read More →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}