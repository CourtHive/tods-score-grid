import { scoreWrapperStyle } from './scoreWrapperStyle';
import { css } from '@stitches/react';
import React from 'react';

const tieBreakStyle = css({
  position: 'absolute',
  left: '1.1rem',
  top: '.4rem',
  letterSpacing: '-0.2em',
  fontSize: '0.625rem',
  lineHeight: '0.75rem'
});

const gameScoreStyle = css({
  fontWeight: 500,
  position: 'relative',
  margin: 0,
  width: '$score$setWidth',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '$1',
  lineHeight: '2.5rem',
  variants: {
    variant: {
      winner: {
        color: '$winner!important',
        fontWeight: 700
      },
      loser: {
        color: '$loser!important'
      }
    }
  }
});

const gameWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginInlineEnd: '$space$gameMarginInlineEnd'
});

const ScoreSet = ({ gameScoreOnly, scoreStripes, set, sideNumber }) => {
  const isWinningSide = sideNumber === set?.winningSide;
  const variant = (isWinningSide && 'winner') || set?.winningSide ? 'loser' : undefined;
  const gameScore = sideNumber === 2 ? set.side2Score : set.side1Score;
  const tieBreakScore = sideNumber === 2 ? set.side2TiebreakScore : set.side1TiebreakScore;
  const tieBreakSet = gameScore === undefined && tieBreakScore;
  const scoreDisplay = tieBreakSet || gameScore;
  const stripedScore = scoreStripes && set.setNumber % 2 ? 'lightgray' : 'transparent';

  return (
    <p className={gameScoreStyle({ variant })} style={{ backgroundColor: stripedScore }}>
      {!isNaN(scoreDisplay) ? scoreDisplay : ''}
      {gameScoreOnly ? null : <span className={tieBreakStyle()}>{!tieBreakSet ? tieBreakScore : ''}</span>}
    </p>
  );
};

export const SideScore = ({ composition, sideNumber, participantHeight, eventHandlers, matchUp }) => {
  const scoreStripes = composition?.configuration?.winnerChevron;
  const gameScoreOnly = composition?.configuration?.gameScoreOnly;
  const sets = matchUp?.score?.sets || [];

  const scoreBox = composition?.configuration?.scoreBox;

  const scoreStyle = scoreWrapperStyle(participantHeight);

  const handleScoreClick = (event) => {
    if (typeof eventHandlers?.scoreClick === 'function') {
      event.stopPropagation();
      eventHandlers.scoreClick({ event, matchUp });
    }
  };

  return (
    <div className={scoreStyle({ fontSize: '5px', sideNumber: !scoreBox && sideNumber })} onClick={handleScoreClick}>
      <div className={gameWrapperStyle()}>
        {sets?.map((set) => (
          <ScoreSet
            key={`Side${sideNumber}-Set-${set.setNumber}`}
            gameScoreOnly={gameScoreOnly}
            scoreStripes={scoreStripes}
            sideNumber={sideNumber}
            set={set}
          />
        ))}
      </div>
    </div>
  );
};
