import { Structure as ST } from './Structure';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { nightTheme } from '../themes';
import { styled } from '@stitches/react';
import { argTypes } from './argTypes';
import React from 'react';

import { compositions } from './compositions';

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

export const Structure = (args) => {
  const composition = compositions[args.composition];
  const configuration = composition?.configuration || {};
  const className = useDarkMode() ? nightTheme : composition.theme;
  const { matchUps } = generateMatchUps({ ...args });

  return (
    <Container className={className}>
      <div style={{ padding: '1rem' }}>
        <ST {...args} composition={configuration} matchUps={matchUps} className={className} />
      </div>
    </Container>
  );
};

Structure.args = {
  composition: 'Australian',
  matchUpFormat: 'SET5-S:6/TB7',
  eventType: 'SINGLES',
  completionGoal: 100,
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16
};
