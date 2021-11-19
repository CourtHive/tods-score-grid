import { generateEventData } from '../Data/generateEventData';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { Draw as DrawComponent } from './Draw';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import React from 'react';

Draw;
export default {
  title: 'Score Grid/Draw',
  component: DrawComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

export const Draw = (args) => {
  const composition = compositions[args.composition];
  const configuration = composition?.configuration || {};
  const className = useDarkMode() ? nightTheme : composition?.theme;
  const { eventData } = generateEventData({ ...args });

  const structures = eventData?.drawsData?.[0]?.structures;
  const initialStructureId = structures[0].structureId;

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <DrawComponent {...args} composition={configuration} structures={structures} structureId={initialStructureId} />
      </div>
    </Container>
  );
};

Draw.args = {
  direction: 'Left to Right',
  composition: 'Australian',
  matchUpFormat: 'standard',
  eventType: 'Singles',
  completionGoal: 100,
  drawType: 'Feed In',
  drawSize: 16
};
