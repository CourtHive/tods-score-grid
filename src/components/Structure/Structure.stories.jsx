import { australianTheme, itfTheme, frenchTheme, nightTheme, wimbledonTheme } from '../themes';
import { Structure as ST } from './Structure';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { styled } from '@stitches/react';
import { argTypes } from './argTypes';
import React from 'react';

import { matchUpStyle } from './matchUpStyle';

export default {
  title: 'Score Grid/Draw',
  component: ST,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

const themes = {
  1: australianTheme,
  2: frenchTheme,
  3: wimbledonTheme,
  4: australianTheme,
  5: itfTheme,
  6: nightTheme
};

export const Structure = (args) => {
  const className = useDarkMode() ? nightTheme : themes[args.theme];
  const { matchUps } = generateMatchUps({ ...args });
  const composition = {
    bracketedSeeds: args.theme === 2,
    resultsInfo: args.theme === 3,
    centerInfo: args.theme === 5,
    winnerChevron: args.theme === 5
  };

  return (
    <Container className={className}>
      <ST {...args} composition={composition} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Structure.args = {
  matchUpFormat: 'SET5-S:6/TB7',
  eventType: 'SINGLES',
  completionGoal: 100,
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16,
  theme: 1
};
