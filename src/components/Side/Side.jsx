import { Individual } from './Individual';
import { SideScore } from './SideScore';
import { css } from '@stitches/react';
import React from 'react';

const participantTypeStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginRight: '1rem',
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

export const Side = ({ participantHeight, matchUpType, sides, sideNumber, winningSide, matchUpStatus, score }) => {
  const sideContainerStyle = css({
    display: 'flex',
    position: 'relative',
    height: participantHeight,
    boxSizing: 'border-box',
    alignItems: 'center',
    backgroundColor: '$backgroundColor',
    justifyContent: 'space-between',
    padding: '0.5rem 0.5rem 0.5rem 0.75rem',
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
  const firstParticipant = isDoubles ? side.participant?.individualParticipants?.[0] : side.participant;
  const secondParticipant = isDoubles && side.participant?.individualParticipants?.[1];
  //   const drawPosition = side?.drawPosition;

  return (
    <div
      className={sideContainerStyle({
        sideNumber
        /*
        css: {
          '&:before': {
            position: 'absolute',
            insetInlineStart: -15,
            content: `"${drawPosition || ''}"`
          }
        }
        */
      })}
    >
      <div className={participantTypeStyle({ variant: isDoubles ? 'doubles' : undefined })}>
        {isTeam ? null : (
          <>
            <Individual side={side} individualParticipant={firstParticipant} />
            {!secondParticipant ? null : <Individual side={side} individualParticipant={secondParticipant} />}
          </>
        )}
      </div>{' '}
      <SideScore sideNumber={sideNumber} score={score} winningSide={winningSide} matchUpStatus={matchUpStatus} />
    </div>
  );
};
