// src/pages/PostDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';

export default function PostDetail() {
  // Grab the :id from the URL (e.g., if URL is /post/2, id will be "2")
  const { id } = useParams(); 

  // Find the specific post in our data array that matches the URL ID
  // Note: URL parameters are strings, so we convert it to a Number to match our data
  const post = blogPosts.find(p => p.id === Number(id));

  // If someone types a random URL like /post/999, handle the error gracefully
  if (!post) {
    return <h2 style={{ textAlign: 'center', color: 'red' }}>Post not found! 🕵️‍♂️</h2>;
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
      
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ fontSize: '36px', color: '#333', marginTop: '20px' }}>{post.title}</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
        {post.content}
      </p>
      
    </div>
  );
}