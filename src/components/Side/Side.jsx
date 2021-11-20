import { CenterInfo } from './CenterInfo';
import { Individual } from './Individual';
import { SideScore } from './SideScore';
import { css } from '@stitches/react';
import React from 'react';

const sideContainerStyle = css({
  display: 'flex',
  flexDirection: 'column'
});

const participantTypeStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginInlineEnd: '0rem',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  fontWeight: 500,
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

export const Side = ({
  participantHeight,
  matchUpStatus,
  composition,
  matchUpType,
  winningSide,
  sideNumber,
  score,
  sides
}) => {
  const participantContainerStyle = css({
    display: 'flex',
    position: 'relative',
    height: participantHeight,
    boxSizing: 'border-box',
    minWidth: '15rem',
    alignItems: 'center',
    backgroundColor: '$matchUp',
    justifyContent: 'space-between',
    padding: '0.5rem 0rem 0.5rem 0.75rem',
    '& p': {
      fontFamily: 'Sharp Sans, Arial, sans-serif',
      color: '$color'
    },
    variants: {
      sideNumber: {
        1: {
          borderBottom: '1px solid lightgray'
        }
      }
    }
  });

  const isTeam = matchUpType === 'TEAM';
  const isDoubles = matchUpType === 'DOUBLES';
  const side = sides?.find((side) => side.sideNumber === sideNumber);
  const firstParticipant = isDoubles ? side?.participant?.individualParticipants?.[0] : side?.participant;
  const secondParticipant = isDoubles && side?.participant?.individualParticipants?.[1];
  const isWinningSide = sideNumber === winningSide;
  const winnerChevron = composition?.winnerChevron && isWinningSide;
  const entryStatus = side?.entryStatus?.replace('_', ' ');
  const EntryStatus = () => <CenterInfo height={30} sideNumber={sideNumber} entryStatus={entryStatus} />;

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

  const centerInfo = composition?.centerInfo;

  return (
    <div className={sideContainerStyle()}>
      {!centerInfo || sideNumber === 1 ? null : <EntryStatus />}
      <div
        className={participantContainerStyle({
          sideNumber
          /*
          css: {
            '&:before': {
              position: 'absolute',
              insetInlineStart: -15,
              content: `"${side?.drawPosition || ''}"`
            }
          }
          */
        })}
      >
        <div className={participantTypeStyle({ variant: isDoubles ? 'doubles' : undefined })}>
          {isTeam ? null : (
            <div className={chevronStyle({ variant: winnerChevron ? 'winner' : undefined })}>
              <Individual
                individualParticipant={firstParticipant}
                isWinningSide={isWinningSide}
                composition={composition}
                side={side}
              />
              {!secondParticipant ? null : (
                <Individual
                  individualParticipant={secondParticipant}
                  isWinningSide={isWinningSide}
                  composition={composition}
                  side={side}
                />
              )}
            </div>
          )}
        </div>{' '}
        <SideScore
          matchUpStatus={matchUpStatus}
          composition={composition}
          winningSide={winningSide}
          sideNumber={sideNumber}
          score={score}
        />
      </div>
      {!centerInfo || sideNumber === 2 ? null : <EntryStatus />}
    </div>
  );
};
