import { australianTheme, itfTheme, frenchTheme, nightTheme, wimbledonTheme } from '../themes';

export const compositions = {
  Australian: { theme: australianTheme, configuration: { id: 'A' } },
  French: { theme: frenchTheme, configuration: { id: 'F', bracketSeeds: true } },
  Wimbledon: { theme: wimbledonTheme, configuration: { id: 'W', resultsInfo: true } },
  'US Open': { theme: australianTheme, configuration: { id: 'U' } },
  ITF: { theme: itfTheme, configuration: { id: 'I', centerInfo: true, winnerChevron: true } },
  Night: { theme: nightTheme, configuration: { id: 'N' } }
};
