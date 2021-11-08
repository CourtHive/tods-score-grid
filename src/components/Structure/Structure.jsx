import { Round } from './Round';
import React from 'react';

export const Structure = ({ matchUps, direction, matchUpStyle }) => {
  const roundNumbers = matchUps.reduce(
    (roundNumbers, { roundNumber }) =>
      roundNumbers.includes(roundNumber) ? roundNumbers : roundNumbers.concat(roundNumber),
    []
  );

  return (
    <div style={{ display: 'flex', overflowX: 'auto', direction }}>
      {roundNumbers.map((roundNumber, i) => (
        <Round matchUps={matchUps} matchUpStyle={matchUpStyle} key={`round-${i}`} roundNumber={roundNumber} />
      ))}
    </div>
  );
};
