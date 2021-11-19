import { MatchUp } from './MatchUp';
import React from 'react';

export const Round = ({ composition, isLucky, matchUps, roundNumber, matchUpStyle }) => {
  const roundMatchUps = matchUps
    .filter((matchUp) => matchUp.roundNumber === roundNumber)
    .sort((a, b) => (a.roundPosition || 0) - (b.roundPosition || 0));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginRight: '32px',
        width: '460px'
      }}
    >
      {roundMatchUps.map((matchUp, i) => (
        <MatchUp
          matchUpStyle={matchUpStyle}
          composition={composition}
          moeity={i % 2 === 0}
          matchUp={matchUp}
          isLucky={isLucky}
          key={`m-${i}`}
        />
      ))}{' '}
    </div>
  );
};
