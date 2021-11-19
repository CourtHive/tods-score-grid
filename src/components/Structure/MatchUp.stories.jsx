import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { compositions } from './compositions';
import { styled } from '@stitches/react';
import { argTypes } from './argTypes';
import { nightTheme } from '../themes';
import { MatchUp } from './MatchUp';
import React from 'react';

export default {
  title: 'Score Grid/Match',
  component: MatchUp,
  argTypes: {
    eventType: argTypes.eventType,
    composition: argTypes.composition,
    matchUpFormat: argTypes.matchUpFormat,
    direction: argTypes.direction
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
  height: '100vh'
});

export const Match = (args) => {
  const composition = compositions[args.composition];
  const configuration = composition?.configuration || {};
  const className = useDarkMode() ? nightTheme : composition.theme;
  const {
    matchUps: [matchUp]
  } = generateMatchUps(args);

  return (
    <Container className={className}>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={configuration} matchUp={matchUp} />
      </div>
    </Container>
  );
};

Match.args = {
  matchUpFormat: 'SET5-S:6/TB7',
  composition: 'Australian',
  eventType: 'SINGLES',
  direction: 'ltr'
};
