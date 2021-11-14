import { Side } from '../Side/Side';
import React from 'react';

export const MatchUp = (params) => {
  const { composition, matchUp, matchUpStyle, moeity } = params;
  // const { headerHeight, footerHeight, showHeader, showFooter } = composition;
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
      <Side sideNumber={1} {...matchUp} composition={composition} participantHeight={participantHeight} />
      <Side sideNumber={2} {...matchUp} composition={composition} participantHeight={participantHeight} />
    </div>
  );
};
