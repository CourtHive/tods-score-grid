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
  padding: '0 0.25rem',
  fontWeight: 700,
  borderRadius: '4px',
  color: '#fff',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  margin: '0 0.25rem',
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
  left: '17px',
  top: '-2px',
  letterSpacing: '-0.2em',
  fontSize: '0.625rem',
  lineHeight: '0.75rem'
});

const gameScoreStyle = css({
  fontWeight: 500,
  position: 'relative',
  margin: 0,
  width: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  variants: {
    variant: {
      winner: {
        fontWeight: 700
      }
    }
  }
});

const gameWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '0.25rem'
});

const scoreWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});

const tickStyles = css({
  color: 'green'
});

const Set = ({ set, sideNumber }) => {
  const isWinningSide = sideNumber === set?.winningSide;
  const variant = isWinningSide ? 'winner' : undefined;
  const gameScore = sideNumber === 2 ? set.side2Score : set.side1Score;
  const tieBreakScore = sideNumber === 2 ? set.side2TiebreakScore : set.side1TiebreakScore;
  const tieBreakSet = gameScore === undefined && tieBreakScore;
  const scoreDisplay = tieBreakSet || gameScore;

  return (
    <p className={gameScoreStyle({ variant })}>
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

export const SideScore = ({ matchUpStatus, score, sideNumber, winningSide }) => {
  const isWinningSide = sideNumber === winningSide;
  const irregularEnding = ['RETIRED', 'WALKOVER', 'DEFAULTED'].includes(matchUpStatus) && !isWinningSide;
  const sets = score?.sets || [];

  return (
    <div className={scoreWrapperStyle()}>
      <div style={{ lineHeight: 0 }}>
        {!isWinningSide ? null : <Tick className={tickStyles()} />}
        {!irregularEnding ? null : <StatusPill matchUpStatus={matchUpStatus} />}
      </div>{' '}
      <div className={gameWrapperStyle()}>
        {sets?.map((set, i) => (
          <Set key={`Side${sideNumber}-Set-${i}`} set={set} sideNumber={sideNumber} />
        ))}
      </div>{' '}
    </div>
  );
};
