import { createTheme } from './createTheme';

export const nightTheme = createTheme('dark-theme', {
  colors: {
    backgroundColor: '#333333',
    border: 'darkgray',
    color: 'white'
  },
  participant: {
    seed: 'cyan'
  },
  matchUp: {
    spacing: '1px'
  },
  borderWidths: {
    matchUp: '1px'
  },
  connector: {}
});
