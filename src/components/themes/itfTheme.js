import { createTheme } from './createTheme';

export const itfTheme = createTheme('itf-theme', {
  colors: {
    backgroundColor: 'lightgray',
    connector: '#999',
    borderHover: '#0091d2',
    borderInlineStart: 'darkgray',
    border: 'darkgray',
    matchUp: '#fff',
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
  borderWidths: {
    centerInfo: 1,
    factor: 1
  }
});
