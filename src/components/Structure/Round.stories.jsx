import { australianTheme, nightTheme } from '../themes';
import { drawEngine } from 'tods-competition-factory';
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

export const Round = (args) => {
  const className = useDarkMode() ? nightTheme : australianTheme;
  const { matchUps } = generateMatchUps(args);
  const composition = {
    bracketedSeeds: args.theme === 2,
    resultsInfo: args.theme === 3,
    centerInfo: args.theme === 5,
    winnerChevron: args.theme === 5
  };

  const { hasOddMatchUpsCount } = drawEngine.getRoundMatchUps({
    matchUps
  });

  const isLucky = hasOddMatchUpsCount;

  return (
    <Container className={className}>
      <RD
        {...args}
        composition={composition}
        matchUpStyle={matchUpStyle}
        className={className}
        matchUps={matchUps}
        isLucky={isLucky}
        roundNumber={1}
      />
    </Container>
  );
};

Round.args = {
  matchUpFormat: 'SET5-S:6/TB7',
  eventType: 'SINGLES',
  completionGoal: 100,
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16,
  theme: 1
};
