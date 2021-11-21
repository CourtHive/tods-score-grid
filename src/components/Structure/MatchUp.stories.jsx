import { generateMatchUps } from '../Data/matchUps';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import { MatchUp } from './MatchUp';
import React from 'react';

export default {
  title: 'Score Grid/Match',
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
  height: '100vh'
});

export const Match = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition.theme;
  const {
    matchUps: [matchUp]
  } = generateMatchUps(args);

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <MatchUp {...args} composition={composition} matchUp={matchUp} />
      </div>
    </Container>
  );
};

Match.args = {
  direction: 'Left to Right',
  matchUpFormat: 'standard',
  composition: 'Australian',
  eventType: 'Singles'
};
