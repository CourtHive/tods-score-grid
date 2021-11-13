import { generateMatchUps } from '../Data/matchUps';
import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from '../themes';
import { Structure as ST } from '../Structure/Structure';
import { styled } from '@stitches/react';
import React from 'react';

import { ausStyle } from './ausStyle';

export default {
  title: 'Gallery/Australian',
  component: ST,
  argTypes: {
    direction: {
      options: { 'Left to Right': 'ltr', 'Right to Left': 'rtl' },
      control: { type: 'inline-radio' }
    },
    drawSize: {
      control: { type: 'range', min: 4, max: 64 }
    },
    eventType: {
      options: { Singles: 'SINGLES', Doubles: 'DOUBLES' },
      control: { type: 'select' }
    },
    drawType: {
      options: {
        'Single Elimination': 'SINGLE_ELIMINATION',
        'Round Robin': 'ROUND_ROBIN',
        'Feed In': 'FEED_IN',
        'Ad Hoc': 'AD_HOC'
      },
      control: { type: 'select' }
    },
    matchUpFormat: {
      options: {
        standard: 'SET3-S:6/TB7',
        grand: 'SET5-S:6/TB7',
        doubles: 'SET3-S:6/TB7-F:TB10',
        'tb sets': 'SET3-S:TB10'
      },
      control: { type: 'select' }
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100%'
});

const matchUpStyle = ausStyle;

export const Structure = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  const { matchUps } = generateMatchUps({ ...args });
  return (
    <Container className={className}>
      <ST {...args} matchUps={matchUps} matchUpStyle={matchUpStyle} className={className} />
    </Container>
  );
};

Structure.args = {
  matchUpFormat: 'SET3-S:6/TB7',
  eventType: 'SINGLES',
  drawType: 'FEED_IN',
  direction: 'ltr',
  drawSize: 16
};
