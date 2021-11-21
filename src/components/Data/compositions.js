import { australianTheme, itfTheme, frenchTheme, nightTheme, wimbledonTheme, usOpenTheme } from '../themes';

export const compositions = {
  Australian: { theme: australianTheme, configuration: { id: 'A', flags: true } },
  French: { theme: frenchTheme, configuration: { id: 'F', bracketSeeds: true, flags: true } },
  Wimbledon: { theme: wimbledonTheme, configuration: { id: 'W', resultsInfo: true, flags: true } },
  'US Open': { theme: usOpenTheme, configuration: { id: 'U', flags: true } },
  ITF: { theme: itfTheme, configuration: { id: 'I', centerInfo: 30, winnerChevron: true, flags: true } },
  National: { theme: australianTheme, configuration: { id: 'U', drawPositions: true } },
  Night: { theme: nightTheme, configuration: { id: 'N', flags: true } }
};
