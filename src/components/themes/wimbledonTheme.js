import { createTheme } from './createTheme';

export const wimbledonTheme = createTheme('wimbledon-theme', {
  colors: {
    backgroundColor: '#00703c',
    connector: 'transparent',
    borderHover: 'lightgray',
    border: 'lightgray',
    borderLeft: '#00703c',
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
    // boxShadow: 'inset 0 0 0 0,inset 0 0 0 0 ,inset 0 0 0 0, -10px 0 0 #00703c'
  },
  space: {
    gameMarginRight: '0.25rem'
  },
  borderWidths: {
    matchUp: '1px 1px 1px 10px'
  },
  connector: {}
});
