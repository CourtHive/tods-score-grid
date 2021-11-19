import { drawEngine } from 'tods-competition-factory';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { compositions } from './compositions';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import { Round as RD } from './Round';
import { argTypes } from './argTypes';
import React from 'react';

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
  const composition = compositions[args.composition];
  const configuration = composition?.configuration || {};
  const className = useDarkMode() ? nightTheme : composition.theme;
  const { matchUps } = generateMatchUps(args);

  const { hasOddMatchUpsCount } = drawEngine.getRoundMatchUps({
    matchUps
  });

  const isLucky = hasOddMatchUpsCount;

  return (
    <Container className={className}>
      <div style={{ padding: '1rem' }}>
        <RD
          {...args}
          composition={configuration}
          className={className}
          matchUps={matchUps}
          isLucky={isLucky}
          roundNumber={1}
        />
      </div>
    </Container>
  );
};

Round.args = {
  matchUpFormat: 'SET5-S:6/TB7',
  composition: 'Australian',
  eventType: 'SINGLES',
  completionGoal: 100,
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16
};
