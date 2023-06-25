import { ReactCountryFlag } from 'react-country-flag';
import { fixtures } from 'tods-competition-factory';
import React from 'react';

export const Flag = ({ className, individualParticipant }) => {
  const alt = individualParticipant?.person?.nationalityCode || '';
  const nationalityCode = individualParticipant?.person?.iso2NationalityCode || '';

  const iocFlag = nationalityCode ? fixtures.countryToFlag(nationalityCode)?.slice(0, 4) : '';

  return iocFlag ? (
    <span className={className}>{iocFlag}</span>
  ) : (
    <span className={className}>
      <ReactCountryFlag
        alt={alt}
        countryCode={nationalityCode}
        style={{
          height: '100%',
          width: '100%',
          verticalAlign: 'initial'
        }}
      />
      {'  '}
    </span>
  );
};

export const Frill = ({
  matchUpType = 'SINGLES',
  individualParticipant,
  type = 'flag',
  composition,
  className,
  side
}) => {
  const configuration = composition?.configuration || {};
  const { bracketedSeeds } = configuration;
  const ratings = individualParticipant?.ratings?.[matchUpType];
  const rankings = individualParticipant?.rankings?.[matchUpType];
  if (ratings || rankings) {
    //
  }

  const seedValue = type === 'seed' && (side?.seedValue || side?.seedNumber);
  const brackets = (typeof bracketedSeeds === 'boolean' && ['(', ')']) ||
    (bracketedSeeds === 'square' && ['[', ']']) || ['', ''];
  const seedDisplay = `${brackets[0]}${seedValue}${brackets[1]}`;

  return (
    (individualParticipant && type === 'flag' && configuration.flags && (
      <Flag className={className} individualParticipant={individualParticipant} />
    )) ||
    (individualParticipant && seedValue && <sup className={className}>{seedDisplay}</sup>) ||
    null
  );
};
