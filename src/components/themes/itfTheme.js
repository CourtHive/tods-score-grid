import { createTheme } from './createTheme';

export const itfTheme = createTheme('itf-theme', {
  borderWidths: {
    centerInfo: 1,
    factor: 1
  },
  colors: {
    backgroundColor: 'lightgray',
    connector: '#999',
    borderHover: '#0091d2',
    matchUp: '#fff'
  },
  participant: {
    textTransform: 'capitalize',
    seed: 'gray'
  }
});
