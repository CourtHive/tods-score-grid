import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { compositions } from './compositions';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import { argTypes } from './argTypes';
import { MatchUp } from './MatchUp';
import React from 'react';

export default {
  title: 'Score Grid/Draw',
  component: MatchUp,
  argTypes
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
  completionGoal: 100,
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16
};
