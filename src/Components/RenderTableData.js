import React from 'react';

const RenderTableData = ({ leaderboard }) => {
  let count = 0;
  const finalArray = leaderboard.sort((a, b) => b.score - a.score);
  return Object.keys(finalArray).map((i, o) => {
    const { player, score } = finalArray[i];
    count = count + 1;
    return (
      <tr key={count.toString(10)}>
        <th scope='row'>{count.toString(10)}</th>
        <td>{player}</td>
        <td>{score}</td>
      </tr>
    );
  });
};

export default RenderTableData;
