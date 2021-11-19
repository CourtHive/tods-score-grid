const directions = { 'Left to Right': 'ltr', 'Right to Left': 'rtl' };
const eventTypes = { Singles: 'SINGLES', Doubles: 'DOUBLES' };
const drawTypes = {
  'Round Robin': 'ROUND_ROBIN',
  'Feed In': 'FEED_IN',
  'Ad Hoc': 'AD_HOC',
  'Lucky Draw': 'LUCKY_DRAW'
};
const matchUpFormats = {
  standard: 'SET3-S:6/TB7',
  grand: 'SET5-S:6/TB7',
  doubles: 'SET3-S:6/TB7-F:TB10',
  'tb sets': 'SET3-S:TB10'
};

export const argTypes = {
  drawSize: {
    control: { type: 'range', min: 4, max: 64 }
  },
  completionGoal: {
    control: { type: 'range', min: 0, max: 100 }
  },
  eventType: {
    options: Object.keys(eventTypes),
    mapping: eventTypes,
    control: { type: 'select' }
  },
  drawType: {
    options: Object.keys(drawTypes),
    mapping: drawTypes,
    control: { type: 'select' }
  },
  composition: {
    options: ['Australian', 'French', 'Wimbledon', 'US Open', 'ITF', 'Night'],
    control: { type: 'select' }
  },
  matchUpFormat: {
    options: Object.keys(matchUpFormats),
    mapping: matchUpFormats,
    control: { type: 'select' }
  },
  direction: {
    options: Object.keys(directions),
    mapping: directions,
    control: { type: 'inline-radio' }
  }
};
