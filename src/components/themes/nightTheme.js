import { createTheme } from './createTheme';

export const nightTheme = createTheme('dark-theme', {
  colors: {
    backgroundColor: '#333333',
    color: 'white'
  },
  participant: {
    seed: 'cyan'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px',
    borderColor: 'gray'
  },
  connector: {}
});
