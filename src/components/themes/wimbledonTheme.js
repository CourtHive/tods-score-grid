import { createTheme } from './createTheme';

export const wimbledonTheme = createTheme('wimbledon-theme', {
  colors: {
    backgroundColor: '#00703c',
    connector: 'transparent',
    borderHover: 'lightgray',
    border: 'lightgray',
    borderInlineStart: '#00703c',
    matchUp: '#fff',
    color: 'black'
  },
  participant: {
    textTransform: 'uppercase',
    seed: 'gray'
  },
  matchUp: {
    spacing: '1px',
    borderWidth: '1px'
  },
  borderWidths: {
    matchUp: '1px 1px 1px 10px'
  }
});
