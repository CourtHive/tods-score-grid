import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from '../themes';
import { styled } from '@stitches/react';
import { Round as RD } from './Round';
import { argTypes } from './argTypes';
import React from 'react';

import { ausStyle } from '../Gallery/ausStyle';

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

const matchUpStyle = ausStyle;

export const Round = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  const { matchUps } = generateMatchUps(args);

  return (
    <Container className={className}>
      <RD {...args} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Round.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  direction: 'ltr',
  roundNumber: 1,
  drawSize: 8
};
