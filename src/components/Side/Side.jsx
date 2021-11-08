import { SideScore } from './SideScore';
import { Individual } from './Individual';
import { css } from '@stitches/react';
import React from 'react';

const participantTypeStyle = css({
  display: 'flex',
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
      },
      '&:last-child': {
        marginTop: '0.25rem'
      }
    }
  }
});

export const Side = ({ participantHeight, sides, sideNumber, winningSide, matchUpStatus, score }) => {
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

  const variant = sideNumber && sideNumber === winningSide ? 'winner' : 'loser';
  const side = sides?.find((side) => side.sideNumber === sideNumber);

  return (
    <div className={sideContainerStyle({ sideNumber })}>
      <div className={participantTypeStyle({ variant })}>
        <Individual side={side} individualParticipant={side.participant} />
      </div>{' '}
      <SideScore sideNumber={sideNumber} score={score} winningSide={winningSide} matchUpStatus={matchUpStatus} />
    </div>
  );
};
