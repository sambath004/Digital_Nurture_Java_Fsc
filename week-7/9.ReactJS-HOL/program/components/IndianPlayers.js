import React from 'react';

function IndianPlayers() {
  const teamPlayers = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  const oddPlayers = teamPlayers.filter((_, i) => i % 2 === 0);  // index 0, 2, 4
  const evenPlayers = teamPlayers.filter((_, i) => i % 2 !== 0); // index 1, 3, 5

  const T20players = [
    'Mr. First Player',
    'Mr. Second Player',
    'Mr. Third Player'
  ];

  const RanjiTrophyplayers = [
    'Mr. Fourth Player',
    'Mr. Fifth Player',
    'Mr. Sixth Player'
  ];

  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {oddPlayers[0]}</li>
        <li>Third : {oddPlayers[1]}</li>
        <li>Fifth : {oddPlayers[2]}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>Second : {evenPlayers[0]}</li>
        <li>Fourth : {evenPlayers[1]}</li>
        <li>Sixth : {evenPlayers[2]}</li>
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
