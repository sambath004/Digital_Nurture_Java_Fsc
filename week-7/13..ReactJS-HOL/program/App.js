import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

// Floating message component
function FloatingMessage({ message, onClose }) {
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(51, 51, 51, 0.7)',
      color: '#fff',
      padding: '15px 30px',
      borderRadius: '8px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
      zIndex: 9999
    }}>
      {message}
    </div>
  );
}

export default function App() {
  const [floatMsg, setFloatMsg] = useState('');

  return (
    <div style={{ padding: '20px', marginTop: '80px' }}>
      <h1 style={{ textAlign: 'center' }}>Blogger App</h1>

      <div style={{ display: 'flex' }}>
        {/* First column */}
        <div
          style={{
            flex: 1,
            padding: '10px',
            borderRight: '2px solid green'
          }}
          onClick={() => setFloatMsg("Course Details clicked")}
        >
          <CourseDetails />
        </div>

        {/* Second column */}
        <div
          style={{
            flex: 1,
            padding: '10px',
            borderRight: '2px solid green'
          }}
          onClick={() => setFloatMsg("Book Details clicked")}
        >
          <BookDetails />
        </div>

        {/* Third column */}
        <div
          style={{
            flex: 1,
            padding: '10px'
          }}
          onClick={() => setFloatMsg("Blog Details clicked")}
        >
          <BlogDetails />
        </div>
      </div>

      <FloatingMessage message={floatMsg} onClose={() => setFloatMsg('')} />
    </div>
  );
}
