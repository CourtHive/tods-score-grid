export const argTypes = {
  drawSize: {
    control: { type: 'range', min: 4, max: 64 }
  },
  completionGoal: {
    control: { type: 'range', min: 0, max: 100 }
  },
  eventType: {
    options: { Singles: 'SINGLES', Doubles: 'DOUBLES' },
    control: { type: 'select' }
  },
  drawType: {
    options: {
      'Round Robin': 'ROUND_ROBIN',
      'Feed In': 'FEED_IN',
      'Ad Hoc': 'AD_HOC',
      'Lucky Draw': 'LUCKY_DRAW'
    },
    control: { type: 'select' }
  },
  composition: {
    options: ['Australian', 'French', 'Wimbledon', 'US Open', 'ITF', 'Night'],
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
  },
  direction: {
    options: { 'Left to Right': 'ltr', 'Right to Left': 'rtl' },
    control: { type: 'inline-radio' }
  }
};
