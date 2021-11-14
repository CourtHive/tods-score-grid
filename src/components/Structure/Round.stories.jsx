import { australianTheme, frenchTheme, nightTheme } from '../themes';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { styled } from '@stitches/react';
import { Round as RD } from './Round';
import { argTypes } from './argTypes';
import React from 'react';

import { matchUpStyle } from './matchUpStyle';

export default {
  title: 'Score Grid/Draw',
  component: RD,
  argTypes
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: 1000
});

const themes = { 1: australianTheme, 2: frenchTheme, 3: nightTheme };

export const Round = (args) => {
  const className = useDarkMode() ? nightTheme : themes[args.theme];
  const { matchUps } = generateMatchUps(args);
  const composition = { bracketedSeeds: args.theme === 2 };

  return (
    <Container className={className}>
      <RD {...args} composition={composition} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Round.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  eventType: 'SINGLES',
  drawType: 'FEED_IN',
  direction: 'ltr',
  roundNumber: 1,
  drawSize: 8,
  theme: 1
};
