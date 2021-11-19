import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { australianTheme, nightTheme } from '../themes';
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

export const Match = (args) => {
  const className = useDarkMode() ? nightTheme : australianTheme;
  const {
    matchUps: [matchUp]
  } = generateMatchUps(args);

  return (
    <Container className={className}>
      <MatchUp {...args} matchUp={matchUp} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Match.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  direction: 'ltr'
};
