import { createTheme } from './createTheme';

export const nightTheme = createTheme('dark-theme', {
  colors: {
    backgroundColor: '#333333',
    borderHover: '#0091d2',
    borderLeft: 'darkgray',
    border: 'darkgray',
    color: 'white'
  },
  participant: {
    textTransform: 'capitalize',
    seed: 'cyan'
  },
  matchUp: {
    spacing: '1px'
  },
  /*
  space: {
    gameMarginInlineEnd: '0.25rem'
  },
  borderWidths: {
    matchUp: '1px'
  },
  */
  connector: {}
});
