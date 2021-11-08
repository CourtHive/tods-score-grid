import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from '../themes';
import { styled } from '@stitches/react';
import Bulma from './Bulma';
import React from 'react';

export default {
  title: 'Playground',
  component: Bulma,
  argTypes: {},
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100vh'
});

export const Explore = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  return (
    <Container className={className}>
      <Bulma {...args} className={className} />;
    </Container>
  );
};

Explore.args = {
  onClick: () => {
    console.log('logs into terminal console');
  }
};
