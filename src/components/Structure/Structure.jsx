import { Round } from './Round';
import React from 'react';

export const Structure = ({ composition, matchUps, direction, matchUpStyle }) => {
  const roundNumbers = matchUps.reduce(
    (roundNumbers, { roundNumber }) =>
      roundNumbers.includes(roundNumber) ? roundNumbers : roundNumbers.concat(roundNumber),
    []
  );

  return (
    <div style={{ display: 'flex', overflowX: 'auto', direction }}>
      {roundNumbers.map((roundNumber, i) => (
        <Round
          matchUpStyle={matchUpStyle}
          composition={composition}
          roundNumber={roundNumber}
          matchUps={matchUps}
          key={`round-${i}`}
        />
      ))}
    </div>
  );
};
