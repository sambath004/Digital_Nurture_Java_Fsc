import React from 'react';

function App() {
  const element = "Office Space";
  const jsxattr = (
    <img
      src="meeting-room.jpg" // Make sure this is in your public folder
      width="25%"
      height="45%"
      alt="Office Space"
    />
  );
  const itemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  let colors = [];
  if (itemName.Rent <= 60000) {
    colors.push("red");
  } else {
    colors.push("green");
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // centers the whole block
        padding: '20px'
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <h1>{element} , at Affordable Range</h1>
        {jsxattr}
        <h2>Name: {itemName.Name}</h2>
        <h3 style={{ color: colors[0] }}>Rent: Rs. {itemName.Rent}</h3>
        <h3>Address: {itemName.Address}</h3>
      </div>
    </div>
  );
}

export default App;
