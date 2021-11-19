import { australianTheme, itfTheme, frenchTheme, nightTheme, wimbledonTheme } from '../themes';

export const compositions = {
  Australian: { theme: australianTheme },
  French: { theme: frenchTheme, configuration: { bracketSeeds: true } },
  Wimbledon: { theme: wimbledonTheme, configuration: { resultsInfo: true } },
  'US Open': { theme: australianTheme },
  ITF: { theme: itfTheme, configuration: { centerInfo: true, winnerChevron: true } },
  Night: { theme: nightTheme }
};
