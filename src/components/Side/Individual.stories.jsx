import { mocksEngine, participantConstants } from 'tods-competition-factory';
import { useDarkMode } from 'storybook-dark-mode';
import { dayTheme, nightTheme } from '../themes';
import { styled } from '@stitches/react';
import React from 'react';

const { INDIVIDUAL } = participantConstants;

import { Individual as I } from './Individual.jsx';

export default {
  title: 'Score Grid/Side',
  component: I,
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

const Container = styled('div', {
  backgroundColor: '$colors$backgroundColor',
  color: '$colors$color',
  height: '100vh'
});

export const Individual = (args) => {
  const className = useDarkMode() ? nightTheme : dayTheme;
  return (
    <Container className={className}>
      <I {...args} className={className} />
    </Container>
  );
};

const {
  participants: [individualParticipant]
} = mocksEngine.generateParticipants({
  participantsCount: 1,
  participantTypes: [INDIVIDUAL],
  withISO: true
});

Individual.args = {
  showAddress: true,
  onClick: () => {},
  individualParticipant,
  side: { seedValue: 1 }
};
