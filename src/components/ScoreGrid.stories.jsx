import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from './themes';
import { styled } from '@stitches/react';
import ScoreGrid from './ScoreGrid';
import React from 'react';

export default {
  title: 'Playground',
  component: ScoreGrid,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100vh'
});

export const Grid = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  return (
    <Container className={className}>
      <ScoreGrid {...args} className={className} />
    </Container>
  );
};

Grid.args = {
  onClick: () => {
    console.log('logs into terminal console');
  }
};
