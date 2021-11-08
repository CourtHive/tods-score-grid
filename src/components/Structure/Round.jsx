import { MatchUp } from './MatchUp';
import React from 'react';

export const Round = ({ matchUps, roundNumber, matchUpStyle }) => {
  const roundMatchUps = matchUps.filter((matchUp) => matchUp.roundNumber === roundNumber);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '460px',
        marginRight: '32px'
      }}
    >
      {roundMatchUps.map((matchUp, i) => (
        <MatchUp matchUp={matchUp} matchUpStyle={matchUpStyle} key={`m-${i}`} />
      ))}{' '}
    </div>
  );
};
