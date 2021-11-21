import { matchUpStyle } from './matchUpStyle';
import { css } from '@stitches/react';
import { Side } from '../Side/Side';
import React from 'react';

export const MatchUp = (params) => {
  const { composition, isLucky, matchUp, moeity, selectedMatchUpId } = params;
  const events = params.events || {};
  const { roundFactor, roundNumber, finishingRound, matchUpType, preFeedRound } = matchUp;
  const link =
    !matchUp.drawPositions || matchUp.isRoundRobin || isLucky ? 'mr' : preFeedRound ? 'm0' : moeity ? 'm1' : 'm2';
  const finalRound = parseInt(finishingRound) === 1;
  const firstRound = parseInt(roundNumber) === 1;
  const isDoubles = matchUpType === 'DOUBLES';
  const configuration = composition?.configuration || {};
  const { resultsInfo } = configuration || {};

  const participantHeight = isDoubles ? 60 : 40;
  const componentStyle = matchUpStyle({ composition, roundFactor, roundNumber, participantHeight });

  const handleOnClick = () => {
    if (typeof events?.matchUpClick === 'function') {
      events.matchUpClick(matchUp?.matchUpId);
    }
  };

  return (
    <div onClick={handleOnClick}>
      <div
        className={componentStyle({
          firstRound,
          finalRound,
          link
        })}
      >
        <Side sideNumber={1} {...matchUp} composition={composition} participantHeight={participantHeight} />
        <Side sideNumber={2} {...matchUp} composition={composition} participantHeight={participantHeight} />
        {!resultsInfo ? null : <ResultsInfo {...matchUp} />}
        <div
          className="overlay"
          style={{
            display: selectedMatchUpId === matchUp.matchUpId ? '' : 'none',
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
            opacity: '0.2',
            backgroundColor: 'magenta'
          }}
        ></div>
      </div>
    </div>
  );
};

const resultsItemStyle = css({
  width: '$score$setWidth',
  fontSize: 9,
  display: 'inline-block',
  variants: {
    variant: {
      set: {
        textAlign: 'center'
      },
      points: {
        marginInlineEnd: 3
      }
    }
  }
});

const resultsInfoStyle = css({
  fontSize: 0,
  textTransform: 'uppercase',
  color: '#bbb',
  position: 'absolute',
  right: 4,
  top: `calc(50% - 2px)`,
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  textAlign: 'center'
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
