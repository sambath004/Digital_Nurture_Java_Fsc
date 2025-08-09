import React, { useState, useEffect } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function FloatingMessage({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // hide after 2 seconds
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
      background: 'rgba(51, 51, 51, 0.7)', // transparent background
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

function App() {
  const [count, setCount] = useState(0);
  const [floatMsg, setFloatMsg] = useState('');

  useEffect(() => {
    setFloatMsg("Welcome to Event Examples App!");
  }, []);

  const sayHello = () => {
    setFloatMsg("Hello! This is a static message.");
  };

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
    setFloatMsg("Decremented count");
  };

  const sayWelcome = (msg) => {
    setFloatMsg(msg);
  };

  const handlePress = (e) => {
    e.preventDefault();
    setFloatMsg("I was clicked");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {/* Main content with margin to avoid overlap */}
      <div style={{ textAlign: 'left', marginTop: '80px' }}>
        <h1>Event Examples App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>
        <br /><br />
        <button onClick={handlePress}>OnPress</button>
        <br /><br />
        <CurrencyConvertor setFloatMsg={setFloatMsg} />
      </div>

      <FloatingMessage message={floatMsg} onClose={() => setFloatMsg('')} />
    </div>
  );
}

export default App;
