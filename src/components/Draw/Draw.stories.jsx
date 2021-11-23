import { generateEventData } from '../Data/generateEventData';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { Draw as DrawComponent } from './Draw';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import React from 'react';

export default {
  title: 'Score Grid/Draw',
  component: DrawComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argTypes('all')
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

export const Demo = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;
  const { eventData } = generateEventData({ ...args }) || {};

  const structures = eventData?.drawsData?.[0]?.structures || [];
  const initialStructureId = structures[0]?.structureId;

  const events = {};

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <DrawComponent
          {...args}
          composition={composition}
          structureId={initialStructureId}
          structures={structures}
          events={events}
        />
      </div>
    </Container>
  );
};

Demo.args = {
  direction: 'Left to Right',
  composition: 'Australian',
  matchUpFormat: 'standard',
  eventType: 'Singles',
  completionGoal: 100,
  drawType: 'Feed In',
  drawSize: 32
};

export const Nada = () => {
  return <DrawComponent />;
};
