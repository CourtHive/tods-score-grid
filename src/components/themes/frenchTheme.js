import { createTheme } from './createTheme';

export const frenchTheme = createTheme('french-theme', {
  colors: {
    backgroundColor: 'white',
    winner: '#01503d!important',
    connector: 'lightgray',
    border: '#F8F9F9',
    color: 'black'
  },
  participant: {
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px',
    boxShadow: '0 0 30px 0 hsla(0,0%,89%,9)'
  },
  borderWidths: {
    matchUp: '1px'
  },
  connector: {}
});
