import '/node_modules/flag-icons/css/flag-icons.min.css';
import React from 'react';

export const Flag = ({ className, individualParticipant }) => {
  const alt = individualParticipant?.person?.nationalityCode || '';
  const nationalityCode = individualParticipant?.person?.iso2NationalityCode?.toLowerCase() || '';

  const src = `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${nationalityCode}.svg`;
  if (window.dev) console.log({ src });
  const onError = (error) => {
    console.log({ error });
  };
  return (
    <span className={className}>
      {' '}
      <img src={src} alt={alt} onError={onError} />{' '}
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
  const configuration = composition?.configuration || {};
  const { bracketedSeeds } = configuration;
  const ratings = individualParticipant?.ratings?.[matchUpType];
  const rankings = individualParticipant?.rankings?.[matchUpType];
  if (ratings || rankings) {
    //
  }

  const seedValue = type === 'seed' && (side?.seedValue || side?.seedNumber);
  const brackets =
    typeof bracketedSeeds === 'boolean' ? ['(', ')'] : bracketedSeeds === 'square' ? ['[', ']'] : ['', ''];
  const seedDisplay = `${brackets[0]}${seedValue}${brackets[1]}`;

  return (
    (!individualParticipant && null) ||
    (type === 'flag' && configuration.flags && (
      <Flag className={className} individualParticipant={individualParticipant} />
    )) ||
    (seedValue && <sup className={className}>{seedDisplay}</sup>) ||
    null
  );
};
