import React, { useState } from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import OutputLeaderBoard from './Components/OutputLeadrBoard';

function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const updateLeaderboardArray = (eachEntry) => {
    setLeaderboard([...leaderboard, eachEntry]);
  };
  return (
    <div className='container mt-4'>
      <InputForm updateLeaderboardArray={updateLeaderboardArray} />
      <OutputLeaderBoard leaderboard={leaderboard} />
    </div>
  );
}

export default App;
