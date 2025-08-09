import React, { useState } from 'react';

export default function CurrencyConvertor({ setFloatMsg }) {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    if (!rupees) {
      setFloatMsg("Please enter an amount");
      return;
    }
    const converted = (parseFloat(rupees) / 90).toFixed(2); // Approx conversion
    setEuro(converted);
    setFloatMsg(`Converted ₹${rupees} to €${converted}`);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Euro: €{euro}</p>}
    </div>
  );
}
