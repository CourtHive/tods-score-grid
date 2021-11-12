import { MatchUp } from './MatchUp';
import React from 'react';

export const Round = ({ matchUps, roundNumber, matchUpStyle }) => {
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
        <MatchUp matchUp={matchUp} matchUpStyle={matchUpStyle} moeity={i % 2 === 0} key={`m-${i}`} />
      ))}{' '}
    </div>
  );
};
