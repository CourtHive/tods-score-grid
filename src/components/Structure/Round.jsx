import { MatchUp } from '../MatchUp/MatchUp';
import React from 'react';

export const Round = ({
  selectedMatchUpId,
  eventHandlers,
  searchActive,
  composition,
  roundNumber,
  matchUps,
  isLucky
}) => {
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
          eventHandlers={eventHandlers}
          searchActive={searchActive}
          composition={composition}
          key={matchUp.matchUpId}
          moeity={i % 2 === 0}
          matchUp={matchUp}
          isLucky={isLucky}
        />
      ))}{' '}
    </div>
  );
};
