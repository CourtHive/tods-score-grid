import { createTheme } from './createTheme';

export const australianTheme = createTheme('australian-theme', {
  colors: {
    backgroundColor: 'white',
    connector: '#999',
    border: 'darkgray',
    color: 'black'
  },
  participant: {
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px'
  },
  borderWidths: {
    matchUp: '1px'
  },
  connector: {}
});
