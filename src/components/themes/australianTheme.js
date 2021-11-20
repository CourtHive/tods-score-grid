import { createTheme } from './createTheme';

export const australianTheme = createTheme('australian-theme', {
  colors: {
    backgroundColor: 'white',
    connector: '#999',
    borderHover: '#0091d2',
    borderInlineStart: 'darkgray',
    border: 'darkgray',
    color: 'black'
  },
  fontSizes: {
    //
  },
  participant: {
    textTransform: 'capitalize',
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px'
  }
});
