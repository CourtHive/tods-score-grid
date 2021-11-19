import { createTheme } from './createTheme';

export const australianTheme = createTheme('australian-theme', {
  colors: {
    backgroundColor: 'white',
    connector: '#999',
    borderHover: '#0091d2',
    borderLeft: 'darkgray',
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
  },
  space: {
    gameMarginRight: '0.25rem'
  },
  borderWidths: {
    matchUp: '1px'
  },
  connector: {}
});
