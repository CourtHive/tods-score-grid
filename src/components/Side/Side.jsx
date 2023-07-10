import { scoreWrapperStyle } from './scoreWrapperStyle';
import { utilities } from 'tods-competition-factory';
import { CenterInfo } from './CenterInfo';
import { Individual } from './Individual';
import { StatusPill } from './StatusPill';
import { SideScore } from './SideScore';
import { css } from '@stitches/react';
import { Tick } from './Tick';
import React from 'react';
import dayjs from 'dayjs';

const sideContainerStyle = css({
  flexDirection: 'column',
  display: 'flex'
});

const sideRowStyle = css({
  alignItems: 'stretch',
  display: 'flex'
});

const participantTypeStyle = css({
  justifyContent: 'space-between',
  flexDirection: 'column',
  marginInlineEnd: '0rem',
  scrollbarWidth: 'none',
  overflowX: 'scroll',
  fontWeight: 500,
  display: 'flex',
  width: '100%',
  '&::WebkitScrollbar': { display: 'none' },
  variants: {
    variant: {
      doubles: {
        marginTop: '0.25rem',
        fontSize: '0.75rem',
        lineHeight: '1rem'
      }
    }
  }
});

const tickStyles = css({
  marginInlineEnd: '.25rem',
  color: 'green'
});

const EntryStatus = ({ entryStatus, sideNumber }) => (
  <CenterInfo height={30} sideNumber={sideNumber} entryStatus={entryStatus} />
);

export const Side = ({ participantHeight, eventHandlers, matchUp, composition, sideNumber }) => {
  const configuration = composition?.configuration || {};
  const scheduleInfo = configuration?.scheduleInfo;

  const { matchUpStatus, matchUpType, winningSide, roundNumber, isRoundRobin } = matchUp;

  const schedulingStyle = css({
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    alignItems: 'center',
    backgroundColor: '#F8F9F9',
    justifyContent: 'space-between',
    padding: '0.5rem',
    color: '#7F8080',
    height: scheduleInfo - 1,
    borderBottom: '1px solid darkgray'
  });

  const participantContainerStyle = css({
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    height: participantHeight,
    boxSizing: 'border-box',
    minWidth: '15rem',
    alignItems: 'center',
    backgroundColor: '$matchUp',
    justifyContent: 'space-between',
    paddingInlineStart: '0.75rem',
    paddingInlineEnd: '0rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    '& p': {
      fontFamily: 'Sharp Sans, Arial, sans-serif',
      color: '$color'
    },
    variants: {
      sideNumber: {
        1: {
          borderBottom: '1px solid $internalDividers'
        }
      }
    }
  });

  const scoringStyle = scoreWrapperStyle(participantHeight);

  const isDoubles = matchUpType === 'DOUBLES';
  const side = matchUp?.sides?.find((side) => side.sideNumber === sideNumber);
  const firstParticipant = isDoubles ? side?.participant?.individualParticipants?.[0] : side?.participant;
  const secondParticipant = isDoubles && side?.participant?.individualParticipants?.[1];
  const isWinningSide = sideNumber === winningSide || (matchUpStatus === 'BYE' && side?.participant);
  const winnerChevron = configuration?.winnerChevron && isWinningSide;
  const teamLogo = configuration?.teamLogo;
  const entryStatus = matchUp?.side?.participant?.entryStatus?.replace('_', ' ');

  const irregularEnding =
    ['RETIRED', 'DOUBLE_WALKOVER', 'WALKOVER', 'DEFAULTED'].includes(matchUpStatus) && !isWinningSide;
  const gameScoreOnly = composition?.configuration?.gameScoreOnly;

  const chevronHeight = (isDoubles ? 0.35 : 0.3) * participantHeight;
  const chevronStyle = css({
    variants: {
      variant: {
        winner: {
          '&:before': {
            content: '',
            position: 'absolute',
            display: 'block',
            borderTop: `${chevronHeight}px solid transparent`,
            borderBottom: `${chevronHeight}px solid transparent`,
            borderInlineStart: '8px solid #008f70',
            insetInlineStart: 0
          }
        }
      }
    }
  });

  const centerInfo = configuration?.centerInfo;
  const drawPosition =
    configuration.allDrawPositions ||
    (configuration.drawPositions && side?.drawPosition && (roundNumber === 1 || side.participantFed || isRoundRobin))
      ? side?.drawPosition
      : '';

  const hasScore = matchUp?.score?.scoreStringSide1;
  const scoreBox = composition?.configuration?.scoreBox && hasScore;
  const { scheduledTime, scheduledDate, venueAbbreviation, courtName } = matchUp?.schedule || {};
  const {
    dateTime: { extractDate, extractTime }
  } = utilities;
  const time = extractTime(scheduledTime);
  const date = extractDate(scheduledDate);
  let constructedDateString = date;
  let dateFormat = 'ddd D MMMM';
  if (time) {
    dateFormat += ', hh:mm A';
    constructedDateString += `T${time}`;
  }
  const displayDate = scheduledDate ? dayjs(constructedDateString).format(dateFormat) : 'Not scheduled';
  const location =
    (venueAbbreviation && courtName?.toString().startsWith(venueAbbreviation) && courtName) || // ensure no duplication of venuAbbreviation
    (venueAbbreviation && courtName && `${venueAbbreviation} ${courtName}`) ||
    courtName ||
    venueAbbreviation ||
    '';

  const handleSideClick = (event) => {
    if (typeof eventHandlers?.sideClick === 'function') {
      event.stopPropagation();
      eventHandlers.sideClick({ event, matchUp, sideNumber });
    }
  };

  const handleHeaderClick = (event) => {
    if (typeof eventHandlers?.headerClick === 'function') {
      event.stopPropagation();
      eventHandlers.headerClick({ event, matchUp });
    }
  };
  const handleScoreClick = (event) => {
    if (typeof eventHandlers?.scoreClick === 'function') {
      event.stopPropagation();
      eventHandlers.scoreClick({ event, matchUp });
    }
  };

  const readyToScore = matchUp?.readyToScore && eventHandlers.scoreClick && !utilities.scoreHasValue({ matchUp });

  return (
    <div className={sideContainerStyle()}>
      {!scheduleInfo || sideNumber === 2 ? null : (
        <div className={schedulingStyle()} onClick={handleHeaderClick}>
          <div>{displayDate}</div>
          <div> {location}</div>
        </div>
      )}
      {!centerInfo || sideNumber === 1 ? null : <EntryStatus entryStatus={entryStatus} sideNumber={sideNumber} />}
      <div className={sideRowStyle()}>
        <div
          className={participantContainerStyle({
            sideNumber,
            css: drawPosition && {
              '&:before': {
                display: 'flex',
                position: 'absolute',
                insetInlineStart: -10,
                width: 20,
                color: '#55AFFE',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: '$backgroundColor',
                content: `${drawPosition}`
              }
            }
          })}
          onClick={handleSideClick}
        >
          {!teamLogo ? null : (
            <div
              style={{ height: 40, width: 40, backgroundColor: 'pink', marginInlineEnd: '.5rem', marginInlineStart: 2 }}
            ></div>
          )}
          <div className={participantTypeStyle({ variant: isDoubles ? 'doubles' : undefined })}>
            {
              <div className={chevronStyle({ variant: winnerChevron ? 'winner' : undefined })}>
                <Individual
                  individualParticipant={firstParticipant}
                  eventHandlers={eventHandlers}
                  isWinningSide={isWinningSide}
                  composition={composition}
                  matchUp={matchUp}
                  side={side}
                />
                {!secondParticipant ? null : (
                  <Individual
                    individualParticipant={secondParticipant}
                    eventHandlers={eventHandlers}
                    isWinningSide={isWinningSide}
                    composition={composition}
                    matchUp={matchUp}
                    side={side}
                  />
                )}
              </div>
            }
          </div>
          <div style={{ lineHeight: 0 }}>
            {!isWinningSide || gameScoreOnly ? null : <Tick className={tickStyles()} />}
            {!irregularEnding ? null : <StatusPill matchUpStatus={matchUpStatus} />}
          </div>
        </div>
        {!scoreBox ? null : <div style={{ height: participantHeight, border: `1px solid lightgray` }}> </div>}
        {!hasScore ? null : (
          <SideScore
            participantHeight={participantHeight}
            eventHandlers={eventHandlers}
            composition={composition}
            sideNumber={sideNumber}
            matchUp={matchUp}
          />
        )}
        {!readyToScore ? null : ( // and not scoreHasValue
          <div
            className={scoringStyle({ fontSize: 'small', sideNumber: !scoreBox && sideNumber })}
            onClick={handleScoreClick}
          >
            [Score]&nbsp;
          </div>
        )}
      </div>
      {!centerInfo || sideNumber === 2 ? null : <EntryStatus />}
    </div>
  );
};
