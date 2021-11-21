import { createStitches } from '@stitches/react';

export const { createTheme } = createStitches({
  theme: {
    borderWidths: {
      matchUp: '1px',
      factor: 2
    },
    space: {
      1: '20px',
      centerInfoHeight: 30,
      gameMarginInlineEnd: '0.25rem'
    },
    colors: {
      backgroundColor: 'white',
      border: 'darkgray',
      borderInlineStart: 'darkgray',
      color: 'black'
    },
    participant: {
      textTransform: 'capitalize',
      seed: 'gray'
    }
  }
});
