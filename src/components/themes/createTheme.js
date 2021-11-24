import { createStitches } from '@stitches/react';

export const { createTheme } = createStitches({
  theme: {
    borderWidths: {
      matchUp: '1px',
      factor: 2
    },
    space: {
      1: '10px',
      2: '0.375rem', // start/end spacing for individual
      centerInfoHeight: 30,
      gameMarginInlineEnd: '0.25rem'
    },
    fontSizes: {
      1: '0.875rem'
    },
    colors: {
      backgroundColor: 'white',
      border: 'darkgray',
      borderInlineStart: 'darkgray',
      internalDividers: 'lightgray',
      color: 'black'
    },
    participant: {
      textTransform: 'capitalize',
      seed: 'gray'
    },
    score: {
      setWidth: '1.5rem'
    }
  }
});
