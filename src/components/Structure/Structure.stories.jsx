import { generateMatchUps } from '../Data/matchUps';
import { compositions } from '../Data/compositions';
import { useDarkMode } from 'storybook-dark-mode';
import { Structure as ST } from './Structure';
import { argTypes } from '../Data/argTypes';
import { styled } from '@stitches/react';
import { nightTheme } from '../themes';
import React from 'react';
import { setConsoleOptions } from '@storybook/addon-console';

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
  log: 'ScoreGrid'
});

export default {
  title: 'Score Grid/Structure',
  component: ST,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argTypes()
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

export const Structure = (args) => {
  const composition = compositions[args.composition];
  const className = useDarkMode() ? nightTheme : composition?.theme;
  const { matchUps } = generateMatchUps({ ...args });

  return (
    <Container className={className} style={{ direction: args.direction }}>
      <div style={{ padding: '1rem' }}>
        <ST {...args} composition={composition} matchUps={matchUps} />
      </div>
    </Container>
  );
};

Structure.args = {
  direction: 'Left to Right',
  composition: 'Australian',
  matchUpFormat: 'grand',
  eventType: 'Singles',
  completionGoal: 100,
  drawType: 'Feed In',
  drawSize: 16
};
