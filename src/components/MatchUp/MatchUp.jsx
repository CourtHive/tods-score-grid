import { matchUpStyle } from './matchUpStyle';
import { css } from '@stitches/react';
import { Side } from '../Side/Side';
import React from 'react';

export const MatchUp = (params) => {
  const { className, composition, isLucky, matchUp, moeity, selectedMatchUpId } = params;
  const eventHandlers = params.eventHandlers || {};
  const { roundFactor, roundNumber, finishingRound, matchUpType, preFeedRound, stage } = matchUp;
  const noProgression = stage !== 'QUALIFUYING' && parseInt(finishingRound) === 1;
  const isQualifying = stage === 'QUALIFYING' && parseInt(finishingRound) === 1;
  const isFirstRound = parseInt(roundNumber) === 1;
  const isDoubles = matchUpType === 'DOUBLES';

  const link =
    ((matchUp.isRoundRobin || isLucky) && 'mr') || ((isQualifying || preFeedRound) && 'm0') || (moeity && 'm1') || 'm2';

  const configuration = composition?.configuration || {};
  const { resultsInfo, showAddress } = configuration || {};

  const participantHeight = (isDoubles && ((showAddress && 80) || 60)) || showAddress ? 50 : 40;
  const componentStyle = matchUpStyle({ composition, roundFactor, roundNumber, participantHeight });

  const handleOnClick = (event) => {
    if (typeof eventHandlers?.matchUpClick === 'function') {
      eventHandlers.matchUpClick({ event, matchUpId: matchUp?.matchUpId });
    }
  };

  return (
    <div className={className} onClick={handleOnClick}>
      <div
        className={componentStyle({
          isFirstRound,
          noProgression,
          link
        })}
      >
        <Side
          participantHeight={participantHeight}
          eventHandlers={eventHandlers}
          composition={composition}
          sideNumber={1}
          {...matchUp}
        />
        <Side
          participantHeight={participantHeight}
          eventHandlers={eventHandlers}
          composition={composition}
          sideNumber={2}
          {...matchUp}
        />
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
      {!sets?.length
        ? null
        : sets.map((set, index) => (
            <div key={set.setNumber} className={resultsItemStyle({ variant: 'set' })}>
              {index + 1}
            </div>
          ))}
    </div>
  );
}
