import { css } from '@stitches/react';
import { Side } from '../Side/Side';
import React from 'react';

const participantHeight = 42;

const matchAnchorStyle = css({
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    textDecoration: 'none'
  }
});

export const MatchUp = (params) => {
  const { matchUp, matchUpStyle } = params;
  const { roundNumber, finishingRound } = matchUp;
  const bracketStyle = roundNumber === 1 ? 'firstRound' : finishingRound === 1 ? 'finalRound' : 'connectors';

  const componentStyle = matchUpStyle({ roundNumber, participantHeight });

  return (
    <div className={componentStyle({ bracketStyle })}>
      <a href="" aria-label="match link" aria-click="CLICK" className={matchAnchorStyle()}>
        {' '}
        <Side sideNumber={1} {...matchUp} participantHeight={participantHeight} />
        <Side sideNumber={2} {...matchUp} participantHeight={participantHeight} />
      </a>{' '}
    </div>
  );
};
