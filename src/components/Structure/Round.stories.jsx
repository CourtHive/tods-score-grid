import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { australianTheme, nightTheme } from '../themes';
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

export const Round = (args) => {
  const className = useDarkMode() ? nightTheme : australianTheme;
  const { matchUps } = generateMatchUps(args);
  const composition = {
    bracketedSeeds: args.theme === 2,
    resultsInfo: args.theme === 3,
    centerInfo: args.theme === 5,
    winnerChevron: args.theme === 5
  };

  return (
    <Container className={className}>
      <RD {...args} composition={composition} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Round.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  direction: 'ltr',
  roundNumber: 1,
  drawSize: 8
};
