import { css } from '@stitches/react';
import { Side } from '../Side/Side';
import React from 'react';

export const MatchUp = (params) => {
  const { composition, isLucky, matchUp, matchUpStyle, moeity } = params;
  const { /*headerHeight, footerHeight, showHeader, showFooter*/ resultsInfo } = composition || {};
  const { roundFactor, roundNumber, finishingRound, matchUpType, preFeedRound } = matchUp;
  const link =
    !matchUp.drawPositions || matchUp.isRoundRobin || isLucky ? 'mr' : preFeedRound ? 'm0' : moeity ? 'm1' : 'm2';
  const finalRound = parseInt(finishingRound) === 1;
  const firstRound = parseInt(roundNumber) === 1;
  const isDoubles = matchUpType === 'DOUBLES';

  const participantHeight = isDoubles ? 60 : 40;
  const componentStyle = matchUpStyle({ composition, roundFactor, roundNumber, participantHeight });

  return (
    <>
      {!composition?.itf ? null : <Decoration roundNumber={roundNumber} roundFactor={roundFactor} />}
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
        {!resultsInfo ? null : <ResultsInfo {...matchUp} />}
      </div>
    </>
  );
};

const resultsInfoStyle = css({
  fontSize: 0,
  textTransform: 'uppercase',
  color: '#bbb',
  position: 'absolute',
  right: 12,
  top: 38,
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  textAlign: 'center'
});

const resultsItemStyle = css({
  width: 24,
  fontSize: 9,
  display: 'inline-block',
  variants: {
    variant: {
      set: {
        textAlign: 'center'
      },
      points: {
        marginRight: 3
      }
    }
  }
});

function ResultsInfo({ score }) {
  const sets = score?.sets?.filter(Boolean).sort((a, b) => (a.setNumber || 0) - (b.setNumber || 0));
  const finalSet = sets?.[sets.length - 1];
  const points = finalSet?.side1PointsScore || finalSet?.side2PointsScore;

  return (
    <div className={resultsInfoStyle()}>
      {!points ? null : <div className={resultsItemStyle({ variant: 'points' })}>PTS</div>}
      {!sets.length
        ? null
        : sets.map((_, index) => (
            <div key={`set-${index}`} className={resultsItemStyle({ variant: 'set' })}>
              {index + 1}
            </div>
          ))}
    </div>
  );
}

export function Decoration({ roundFactor, roundNumber }) {
  const factor = roundFactor || Math.pow(2, roundNumber - 1);
  const top = 80 * (factor > 1 ? factor : 0);

  const decorationStyle = css({
    fontFamily: 'Lato,Arial,Helvetica,sans-serif',
    WebkitFontSmooting: 'antialiased',
    WebkitBoxDirection: 'normal',
    boxSizing: 'inherit',
    position: 'relative',
    height: '100%',
    right: -30
  });

  const topTriangleStyle = css({
    borderLeft: '30px solid #979797',
    right: '-1px',
    position: 'absolute',
    borderTop: '72px solid transparent',
    borderBottom: '72px solid transparent',
    top
    // top: '-1px'
  });

  const bottomTriangleStyle = css({
    borderTop: '72px solid transparent',
    borderBottom: '72px solid transparent',
    position: 'absolute',
    right: 0,
    borderLeft: '30px solid #fff',
    // top: '-1px'
    top
  });

  return (
    <div className={decorationStyle()}>
      <div className={topTriangleStyle()}></div>
      <div className={bottomTriangleStyle()}></div>
    </div>
  );
}
