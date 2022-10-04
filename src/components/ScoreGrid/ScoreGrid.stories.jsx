import { generateEventData } from '../Data/generateEventData';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { argTypes } from '../Data/argTypes';
import { ScoreGrid } from './ScoreGrid';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import React from 'react';

export default {
  title: 'Score Grid/Grid',
  component: ScoreGrid,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argTypes('all')
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

export const Grid = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;
  const { eventData } = generateEventData({ ...args }) || {};

  const eventHandlers = {};

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <ScoreGrid {...args} compositionName={args.composition} eventData={eventData} eventHandlers={eventHandlers} />
      </div>
    </Container>
  );
};

Grid.args = {
  direction: 'Left to Right',
  matchUpFormat: 'standard',
  composition: 'National',
  participantsCount: 30,
  eventType: 'Singles',
  completionGoal: 100,
  drawType: 'Feed In',
  drawSize: 32
};
