import ReactCountryFlag from 'react-country-flag';
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

export const Frill = ({ className, individualParticipant, matchUpType = 'SINGLES', type = 'flag', side }) => {
  const ratings = individualParticipant?.ratings?.[matchUpType];
  const rankings = individualParticipant?.rankings?.[matchUpType];
  if (ratings || rankings) {
    //
  }

  const seedValue = type === 'seed' && (side?.seedValue || side?.seedNumber);

  return !individualParticipant ? null : type === 'flag' ? (
    <Flag className={className} individualParticipant={individualParticipant} />
  ) : seedValue ? (
    <sup className={className}>{seedValue}</sup>
  ) : null;
};
