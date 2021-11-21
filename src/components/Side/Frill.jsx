import { ReactCountryFlag } from 'react-country-flag';
import React from 'react';

export const Flag = ({ className, individualParticipant }) => {
  const alt = individualParticipant?.person?.nationalityCode || '';
  const nationalityCode = individualParticipant?.person?.isoNationalityCode || '';

  return (
    <span className={className}>
      <ReactCountryFlag
        alt={alt}
        countryCode={nationalityCode}
        loading="lazy"
        style={{
          height: '100%',
          width: '100%',
          verticalAlign: 'initial'
        }}
        svg
      />
      {'  '}
    </span>
  );
};

export const Frill = ({
  individualParticipant,
  matchUpType = 'SINGLES',
  type = 'flag',
  composition,
  className,
  side
}) => {
  const { bracketedSeeds } = composition || {};
  const ratings = individualParticipant?.ratings?.[matchUpType];
  const rankings = individualParticipant?.rankings?.[matchUpType];
  if (ratings || rankings) {
    //
  }

  const seedValue = type === 'seed' && (side?.seedValue || side?.seedNumber);
  const seedDisplay = bracketedSeeds ? `(${seedValue})` : seedValue;

  return !individualParticipant ? null : type === 'flag' ? (
    <Flag className={className} individualParticipant={individualParticipant} />
  ) : seedValue ? (
    <sup className={className}>{seedDisplay}</sup>
  ) : null;
};
