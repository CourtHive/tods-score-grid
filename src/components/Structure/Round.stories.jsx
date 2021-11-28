import { drawEngine } from 'tods-competition-factory';
import { compositions } from '../Data/compositions';
import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import { Round as RD } from './Round';
import React from 'react';

export default {
  title: 'Score Grid/Round',
  component: RD,
  argTypes: argTypes()
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: 1000
});

export const Round = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;
  const { matchUps } = generateMatchUps(args);

  const { hasOddMatchUpsCount } = drawEngine.getRoundMatchUps({
    matchUps
  });

  const isLucky = hasOddMatchUpsCount;

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <RD
          {...args}
          composition={composition}
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
  direction: 'Left to Right',
  composition: 'US Open',
  matchUpFormat: 'grand',
  eventType: 'Singles',
  completionGoal: 100,
  drawType: 'Feed In',
  drawSize: 16
};
