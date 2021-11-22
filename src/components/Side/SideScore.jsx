import { css } from '@stitches/react';
import { Tick } from './Tick';
import React from 'react';

const pillStyle = css({
  width: 'auto',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontFamily: 'Sharp Sans, Arial, sans-serif',
  fontSize: '0.625rem',
  lineHeight: '1rem',
  marginInline: '0 0.25rem',
  paddingInline: '0 0.25rem',
  fontWeight: 700,
  borderRadius: '4px',
  color: '#fff',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  variants: {
    variant: {
      defaulted: {
        backgroundColor: '#df164c'
      },
      retired: {
        backgroundColor: '#df164c'
      },
      walkover: {
        backgroundColor: 'black'
      }
    }
  }
});

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
  fontSize: '0.875rem',
  lineHeight: '2.5rem',
  variants: {
    variant: {
      winner: {
        color: '$winner!important',
        fontWeight: 700
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

const scoreWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});

const tickStyles = css({
  color: 'green',
  marginInlineEnd: '1px'
});

const Set = ({ scoreStripes, set, sideNumber }) => {
  const isWinningSide = sideNumber === set?.winningSide;
  const variant = isWinningSide ? 'winner' : undefined;
  const gameScore = sideNumber === 2 ? set.side2Score : set.side1Score;
  const tieBreakScore = sideNumber === 2 ? set.side2TiebreakScore : set.side1TiebreakScore;
  const tieBreakSet = gameScore === undefined && tieBreakScore;
  const scoreDisplay = tieBreakSet || gameScore;
  const stripedScore = scoreStripes && set.setNumber % 2 ? 'lightgray' : 'transparent';

  return (
    <p className={gameScoreStyle({ variant })} style={{ backgroundColor: stripedScore }}>
      {!isNaN(scoreDisplay) ? scoreDisplay : ''}
      <span className={tieBreakStyle()}>{!tieBreakSet ? tieBreakScore : ''}</span>
    </p>
  );
};

const StatusPill = ({ matchUpStatus }) => {
  const variant = matchUpStatus?.toLowerCase();
  const statusText = matchUpStatus === 'WALKOVER' ? 'WO' : matchUpStatus?.slice(0, 3) || '';
  return (
    <div className={pillStyle({ variant })}>
      <abbr title={matchUpStatus} style={{ textDecoration: 'none', borderBottom: 'none' }}>
        {statusText}
      </abbr>
    </div>
  );
};

export const SideScore = ({ composition, matchUpStatus, score, sideNumber, winningSide }) => {
  const isWinningSide = sideNumber === winningSide;
  const irregularEnding = ['RETIRED', 'WALKOVER', 'DEFAULTED'].includes(matchUpStatus) && !isWinningSide;
  const scoreStripes = composition?.configuration?.winnerChevron;
  const sets = score?.sets || [];

  return (
    <div className={scoreWrapperStyle()}>
      <div style={{ lineHeight: 0 }}>
        {!isWinningSide ? null : <Tick className={tickStyles()} />}
        {!irregularEnding ? null : <StatusPill matchUpStatus={matchUpStatus} />}
      </div>{' '}
      <div className={gameWrapperStyle()}>
        {sets?.map((set, i) => (
          <Set key={`Side${sideNumber}-Set-${i}`} set={set} scoreStripes={scoreStripes} sideNumber={sideNumber} />
        ))}
      </div>
    </div>
  );
};
