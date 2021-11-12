import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from '../themes';
import { Structure as ST } from './Structure';
import { styled } from '@stitches/react';
import { argTypes } from './argTypes';
import React from 'react';

import { ausStyle } from '../Gallery/ausStyle';

export default {
  title: 'Score Grid/Draw',
  component: ST,
  argTypes
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

const matchUpStyle = ausStyle;

export const Structure = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  const { matchUps } = generateMatchUps({ ...args, drawType: 'FEED_IN' });

  return (
    <Container className={className}>
      <ST {...args} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Structure.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  direction: 'ltr',
  drawSize: 16
};
