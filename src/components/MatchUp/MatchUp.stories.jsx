import { generateMatchUps } from '../Data/matchUps';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import { MatchUp } from './MatchUp';
import React from 'react';

export default {
  title: 'MatchUp',
  component: MatchUp,
  argTypes: {
    eventType: argTypes().eventType,
    composition: argTypes().composition,
    matchUpFormat: argTypes().matchUpFormat,
    direction: argTypes().direction
  },
  parameters: {
    docs: {
      //     page: null
    }
  }
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100vh',
  width: 400
});

export const Outcomes = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;

  // prettier-ignore
  const outcomes = [
    { stage: 'MAIN', roundNumber: 1, roundPosition: 1, scoreString: '6-1 2-2', matchUpStatus: 'RETIRED', winningSide: 2 },
    { stage: 'MAIN',roundNumber: 1, roundPosition: 2, matchUpStatus: 'DEFAULTED', winningSide: 2 },
    { stage: 'MAIN',roundNumber: 1, roundPosition: 3, matchUpStatus: 'WALKOVER', winningSide: 1 },
    { stage: 'MAIN',roundNumber: 1, roundPosition: 4, matchUpStatus: 'DOUBLE_WALKOVER' }
  ];

  const { matchUps } = generateMatchUps({ ...args, drawSize: 16, outcomes });

  matchUps[2].preFeedRound = true;
  matchUps[3].finishingRound = 1;
  matchUps[3].stage = 'QUALIFYING';

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} moeity={1} composition={composition} matchUp={matchUps[0]} />
      </div>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} moeity={0} composition={composition} matchUp={matchUps[1]} />
      </div>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={matchUps[2]} />
      </div>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={matchUps[3]} />
      </div>
    </Container>
  );
};

Outcomes.args = {
  direction: 'Left to Right',
  matchUpFormat: 'standard',
  composition: 'Australian',
  eventType: 'Singles'
};

export const Sides = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;

  const qualifyingProfiles = [{ drawSize: 8, qualifyingPositions: 2 }];
  const matchUps = generateMatchUps({
    ...args,
    participantsCount: 14,
    qualifyingProfiles,
    drawSize: 16
  }).matchUps;

  const qualifyingMatchUps = matchUps.filter(({ stage }) => stage === 'QUALIFYING');
  const qualifierMatchUps = matchUps.filter(
    ({ stage, sides }) => stage === 'MAIN' && sides.some(({ qualifier }) => qualifier)
  );

  const m = generateMatchUps({
    ...args,
    participantsCount: 12,
    drawSize: 16
  }).matchUps;

  const byeMatchUps = m.filter(({ matchUpStatus }) => matchUpStatus === 'BYE');

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={qualifyingMatchUps[0]} />
      </div>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={qualifierMatchUps[0]} />
      </div>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={byeMatchUps[0]} />
      </div>
    </Container>
  );
};

Sides.args = {
  direction: 'Left to Right',
  matchUpFormat: 'standard',
  composition: 'Australian',
  eventType: 'Singles'
};
