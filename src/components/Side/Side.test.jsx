import { render, screen } from '@testing-library/react';
import { compositions } from '../Data/compositions';
import { Side } from './Side';
import React from 'react';

test('empty side renders TBD', () => {
  render(<Side />);

  expect(screen.getByText('TBD')).toBeDefined();
});

test('render Side with correct date format (showin hours in 24-hour format)', () => {
  const scheduleObject = {
    scheduledDate: '2022-08-24',
    scheduledTime: '2022-08-24T17:30',
    isoDateString: '2022-08-24T17:30',
    venueAbbreviation: 'VNU',
    venueName: 'Venue',
    venueId: 'venueId',
    milliseconds: 0,
    time: '00:00:00'
  };

  render(<Side schedule={scheduleObject} composition={compositions.National} />);

  expect(screen.getByText('Wed 24 August, 05:30 PM')).toBeDefined();
});
