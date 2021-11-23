import { createStitches } from '@stitches/react';

export const { createTheme } = createStitches({
  theme: {
    borderWidths: {
      matchUp: '1px',
      factor: 2
    },
    space: {
      1: '10px',
      centerInfoHeight: 30,
      gameMarginInlineEnd: '0.25rem'
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
