import { drawEngine } from 'tods-competition-factory';
import { Round } from './Round';
import React from 'react';

export const Structure = ({ composition, eventHandlers, matchUps, selectedMatchUpId, searchActive }) => {
  const { roundNumbers, hasOddMatchUpsCount } = drawEngine.getRoundMatchUps({
    matchUps
  });

  const isLucky = hasOddMatchUpsCount;

  return (
    <div style={{ marginInlineStart: '1rem', display: 'flex', overflowX: 'auto' }}>
      {roundNumbers.map((roundNumber) => (
        <Round
          selectedMatchUpId={selectedMatchUpId}
          eventHandlers={eventHandlers}
          searchActive={searchActive}
          composition={composition}
          roundNumber={roundNumber}
          key={roundNumber || 1}
          matchUps={matchUps}
          isLucky={isLucky}
        />
      ))}
    </div>
  );
};

export default Structure;
