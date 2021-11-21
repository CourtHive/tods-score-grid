import { createStitches } from '@stitches/react';

export const { createTheme } = createStitches({
  theme: {
    borderWidths: {
      matchUp: '1px',
      factor: 2
    },
    colors: {
      backgroundColor: 'white',
      border: 'darkgray',
      borderInlineStart: 'darkgray',
      color: 'black'
    },
    matchUp: {
      spacing: '1px',
      borderWidth: '1px'
    },
    participant: {
      textTransform: 'capitalize',
      seed: 'gray'
    },
    space: {
      gameMarginInlineEnd: '0.25rem'
    }
  }
});
