import { createTheme } from './createTheme';

export const wimbledonTheme = createTheme('wimbledon-theme', {
  borderWidths: {
    matchUp: '1px 1px 1px 10px'
  },
  colors: {
    backgroundColor: '#00703c',
    connector: 'transparent',
    borderHover: 'lightgray',
    border: 'lightgray',
    borderInlineStart: '#00703c',
    matchUp: '#fff'
  },
  participant: {
    textTransform: 'uppercase'
  }
});
