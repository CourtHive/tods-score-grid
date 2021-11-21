import { australianTheme, itfTheme, frenchTheme, nightTheme, wimbledonTheme, usOpenTheme } from '../themes';

// name only need to be unique for React updates
export const compositions = {
  Australian: { name: 'oz', theme: australianTheme, configuration: { id: 'A', flags: true } },
  French: { name: 'fr', theme: frenchTheme, configuration: { id: 'F', bracketSeeds: true, flags: true } },
  Wimbledon: { name: 'gb', theme: wimbledonTheme, configuration: { id: 'W', resultsInfo: true, flags: true } },
  'US Open': { name: 'us', theme: usOpenTheme, configuration: { id: 'U', flags: true } },
  ITF: { name: 'itf', theme: itfTheme, configuration: { id: 'I', centerInfo: 30, winnerChevron: true, flags: true } },
  National: { name: 'ngb', theme: australianTheme, configuration: { id: 'U', drawPositions: true } },
  Night: { name: 'xx', theme: nightTheme, configuration: { id: 'N', flags: true } }
};
