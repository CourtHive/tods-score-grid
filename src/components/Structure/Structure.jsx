import { drawEngine } from 'tods-competition-factory';
import { Round } from './Round';
import React from 'react';

export const Structure = ({ composition, events, matchUps, selectedMatchUpId }) => {
  const { roundNumbers, hasOddMatchUpsCount } = drawEngine.getRoundMatchUps({
    matchUps
  });

  const isLucky = hasOddMatchUpsCount;

  return (
    <div style={{ marginInlineStart: '1rem', display: 'flex', overflowX: 'auto' }}>
      {roundNumbers.map((roundNumber, i) => (
        <Round
          selectedMatchUpId={selectedMatchUpId}
          composition={composition}
          roundNumber={roundNumber}
          matchUps={matchUps}
          key={`round-${i}`}
          isLucky={isLucky}
          events={events}
        />
      ))}
    </div>
  );
};

export default Structure;
