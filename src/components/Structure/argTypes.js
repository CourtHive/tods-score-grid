export const argTypes = {
  direction: {
    options: { 'Left to Right': 'ltr', 'Right to Left': 'rtl' },
    control: { type: 'inline-radio' }
  },
  drawSize: {
    options: [4, 8, 16, 32, 64],
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
