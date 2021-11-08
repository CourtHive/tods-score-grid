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
  borderRadius: 2,
  boxSizing: 'border-box',
  display: 'inline-block',
  marginLeft: 2,
  marginRight: 2,
  position: 'relative',
  width: '1rem'
});

const participantStyle = css({
  alignItems: 'center',
  display: 'flex',
  fontWeight: 500,
  justifyContent: 'flex-start',
  whiteSpace: 'nowrap'
});

const participantNameStyle = css({
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  margin: '0 0.375rem 0 0.375rem',
  textTransform: 'capitalize'
});

const seedStyle = css({
  color: '$participant$seed',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  marginLeft: '.5rem',
  textTransform: 'uppercase'
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
