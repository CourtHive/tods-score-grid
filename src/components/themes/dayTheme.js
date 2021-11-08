import { createTheme } from './createTheme';

export const dayTheme = createTheme('light-theme', {
  colors: {
    backgroundColor: 'white',
    color: 'black'
  },
  participant: {
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px',
    borderColor: 'darkgray'
  },
  connector: {}
});
