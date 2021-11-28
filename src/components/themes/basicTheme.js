import { createTheme } from './createTheme';

export const basicTheme = createTheme('basic-theme', {
  colors: {
    winner: '#50B649!important',
    loser: '#E61A1A!important',
    connector: '#999',
    internalDividers: 'transparent'
  },
  space: {
    gameMarginInlineEnd: '0.75rem'
  },
  participant: {
    seed: 'transparent'
  },
  fontSizes: {
    1: '1.5rem'
  }
});
