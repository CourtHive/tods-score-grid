import { MatchUp } from '../MatchUp/MatchUp';
import React from 'react';

export const Round = ({ composition, eventHandlers, isLucky, matchUps, selectedMatchUpId, roundNumber }) => {
  const roundMatchUps = matchUps
    .filter((matchUp) => matchUp.roundNumber === roundNumber)
    .sort((a, b) => (a.roundPosition || 0) - (b.roundPosition || 0));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginInlineStart: '16px',
        marginInlineEnd: '16px',
        width: '460px'
      }}
    >
      {roundMatchUps.map((matchUp, i) => (
        <MatchUp
          selectedMatchUpId={selectedMatchUpId}
          composition={composition}
          moeity={i % 2 === 0}
          matchUp={matchUp}
          isLucky={isLucky}
          eventHandlers={eventHandlers}
          key={`m-${i}`}
        />
      ))}{' '}
    </div>
  );
};
