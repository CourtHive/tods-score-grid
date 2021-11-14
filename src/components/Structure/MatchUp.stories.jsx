import { australianTheme, frenchTheme, nightTheme } from '../themes';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { styled } from '@stitches/react';
import { argTypes } from './argTypes';
import { MatchUp } from './MatchUp';
import React from 'react';

import { matchUpStyle } from './matchUpStyle';

export default {
  title: 'Score Grid/Draw',
  component: MatchUp,
  argTypes
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

const themes = { 1: australianTheme, 2: frenchTheme, 3: nightTheme };

export const Match = (args) => {
  const className = useDarkMode() ? nightTheme : themes[args.theme];
  const composition = { bracketedSeeds: args.theme === 2 };

  const {
    matchUps: [matchUp]
  } = generateMatchUps(args);

  return (
    <Container className={className}>
      <MatchUp
        {...args}
        matchUpStyle={matchUpStyle}
        composition={composition}
        className={className}
        matchUp={matchUp}
      />
    </Container>
  );
};

Match.args = {
  matchUpFormat: 'SET5-S:6/TB7',
  eventType: 'SINGLES',
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16,
  theme: 1
};
