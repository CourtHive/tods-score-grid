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
  marginLeft: 2,
  marginRight: 2,
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
  margin: '0 0.375rem 0 0.375rem',
  textTransform: 'capitalize',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  fontWeight: 500,
  variants: {
    variant: {
      winner: {
        fontWeight: 700
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
  marginLeft: '.5rem',
  color: '$participant$seed'
});

export function Individual(params) {
  const { onClick, side, individualParticipant, className } = params;

  const participantName = individualParticipant?.participantName;

  return (
    <div className={className} key={`${params.index}`}>
      <div className={participantStyle()} onClick={onClick}>
        <Frill {...params} className={flagStyles()} />

        <div className={participantNameStyle()}>
          {side?.bye || side?.qualifier || !participantName ? (
            <abbr className={participantStatus()}>{side.bye ? BYE : side.qualifier ? QUALIFIER : TBD}</abbr>
          ) : (
            <span>{participantName}</span>
          )}
        </div>

        <Frill {...params} className={seedStyle()} type="seed" />
      </div>

      <Address {...params} />
    </div>
  );
}
