export const argTypes = {
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
      'Round Robin': 'ROUND_ROBIN',
      'Feed In': 'FEED_IN',
      'Ad Hoc': 'AD_HOC'
    },
    control: { type: 'select' }
  },
  theme: {
    options: { Australian: 1, French: 2, Night: 3 },
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
};
