import { createStitches } from '@stitches/react';

export const { createTheme } = createStitches({
  theme: {
    colors: {
      backgroundColor: 'white'
    },
    borderWidths: {
      matchUp: '1px',
      factor: 2
    },
    space: {
      gameMarginRight: '0.25rem'
    }
  }
});
