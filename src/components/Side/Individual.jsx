import { css } from '@stitches/react';
import { Frill } from './Frill';
import React from 'react';

const TBD = 'TBD';
const BYE = 'BYE';
const QUALIFIER = 'Qualifier';

export const participantStatus = css({
  margin: '2.5px 0'
});

import { Address } from './Address';

const flagStyles = css({
  width: '1rem',
  minWidth: '1rem',
  borderRadius: 2,
  marginInlineStart: 2,
  marginInlinEnd: 2,
  position: 'relative',
  display: 'inline-block',
  WebkitBoxSizing: 'border-box',
  boxSizing: 'border-box'
});

const participantStyle = css({
  display: 'flex',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

const participantNameStyle = css({
  marginInlineStart: '$space$2',
  marginInlineEnd: '$space$2',
  textTransform: '$participant$textTransform',
  fontSize: '0.875rem',
  fontWeight: 500,
  variants: {
    variant: {
      winner: {
        fontWeight: 700,
        color: '$winnerName'
      },
      loser: {
        fontWeight: 500
      }
    }
  }
});

const seedStyle = css({
  textTransform: 'uppercase',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  marginInlineStart: '.5rem',
  color: '$participant$seed'
});

export function Individual(params) {
  const { isWinningSide, side, individualParticipant, matchUp } = params;
  const eventHandlers = params.eventHandlers || {};
  const variant = isWinningSide ? 'winner' : undefined;

  const participantName = individualParticipant?.participantName;

  const handleOnClick = (event) => {
    if (typeof eventHandlers?.participantClick === 'function') {
      event.stopPropagation();
      eventHandlers.participantClick({ event, side, individualParticipant, matchUp });
    }
  };

  return (
    <div key={`${params.index}`}>
      <div className={participantStyle()} onClick={handleOnClick}>
        <Frill {...params} className={flagStyles()} />

        <div className={participantNameStyle({ variant })}>
          {participantName ? (
            <span>{participantName}</span>
          ) : (
            <abbr className={participantStatus()}>{(side?.bye && BYE) || (side?.qualifier && QUALIFIER) || TBD}</abbr>
          )}
        </div>

        <Frill {...params} className={seedStyle()} type="seed" />
      </div>

      <Address {...params} />
    </div>
  );
}
