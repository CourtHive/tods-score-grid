import { css } from '@stitches/react';
import { Side } from '../Side/Side';
import React from 'react';

const matchAnchorStyle = css({
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    textDecoration: 'none'
  }
});

export const MatchUp = (params) => {
  const { matchUp, matchUpStyle, moeity } = params;
  const { roundFactor, roundNumber, finishingRound, matchUpType, preFeedRound } = matchUp;
  const link = !matchUp.drawPositions || matchUp.isRoundRobin ? 'mr' : preFeedRound ? 'm0' : moeity ? 'm1' : 'm2';
  const finalRound = parseInt(finishingRound) === 1;
  const firstRound = parseInt(roundNumber) === 1;
  const isDoubles = matchUpType === 'DOUBLES';

  const participantHeight = isDoubles ? 60 : 40;
  const componentStyle = matchUpStyle({ roundFactor, roundNumber, participantHeight });

  return (
    <div
      className={componentStyle({
        firstRound,
        finalRound,
        link
        // css: { ...(firstRound && { marginLeft: 30 }) }
      })}
    >
      <a href="" aria-label="match link" aria-click="CLICK" className={matchAnchorStyle()}>
        {' '}
        <Side sideNumber={1} {...matchUp} participantHeight={participantHeight} />
        <Side sideNumber={2} {...matchUp} participantHeight={participantHeight} />
      </a>{' '}
    </div>
  );
};
