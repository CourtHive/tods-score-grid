import { createTheme } from './createTheme';

export const frenchTheme = createTheme('french-theme', {
  colors: {
    backgroundColor: 'white',
    winner: '#01503d!important',
    borderHover: '#0091d2',
    connector: 'lightgray',
    borderLeft: '#F8F9F9',
    border: '#F8F9F9',
    color: 'black'
  },
  participant: {
    textTransform: 'capitalize',
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px',
    boxShadow: '0 0 30px 0 hsla(0,0%,89%,9)'
  },
  space: {
    gameMarginRight: '0.25rem'
  },
  borderWidths: {
    matchUp: '1px'
  },
  connector: {}
});
