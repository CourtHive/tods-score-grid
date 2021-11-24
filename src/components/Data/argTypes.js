import { compositions } from './compositions';

const directions = { 'Left to Right': 'ltr', 'Right to Left': 'rtl' };
const eventTypes = { Singles: 'SINGLES', Doubles: 'DOUBLES' };
const drawTypes = {
  'Round Robin': 'ROUND_ROBIN',
  'Feed In': 'FEED_IN',
  'Ad Hoc': 'AD_HOC',
  'Lucky Draw': 'LUCKY_DRAW'
};

const allDrawTypes = {
  'Round Robin': 'ROUND_ROBIN',
  'Feed In': 'FEED_IN',
  'Ad Hoc': 'AD_HOC',
  'Lucky Draw': 'LUCKY_DRAW',
  'Feed In Championship': 'FEED_IN_CHAMPIONSHIP',
  Compass: 'COMPASS',
  Olympic: 'OLYMPIC',
  'First Match Loser Consolation': 'FIRST_MATCH_LOSER_CONSOLATION',
  'Curtis Consolation': 'CURTIS_CONSOLATION',
  'Round Robin with Playoffs': 'ROUND_ROBIN_WITH_PLAYOFFS'
};

const matchUpFormats = {
  standard: 'SET3-S:6/TB7',
  grand: 'SET5-S:6/TB7',
  doubles: 'SET3-S:6/TB7-F:TB10',
  'Timed Sets': 'SET1-S:T20',
  'Tiebreak Sets': 'SET3-S:TB10'
};

export const argTypes = (type) => ({
  drawSize: {
    control: { type: 'range', min: 4, max: 64 }
  },
  completionGoal: {
    control: { type: 'range', min: 0, max: 100 }
  },
  eventType: {
    options: Object.keys(eventTypes),
    mapping: eventTypes,
    control: { type: 'select' }
  },
  drawType: {
    options: Object.keys(!type ? drawTypes : allDrawTypes),
    mapping: !type ? drawTypes : allDrawTypes,
    control: { type: 'select' }
  },
  composition: {
    options: Object.keys(compositions),
    control: { type: 'select' }
  },
  matchUpFormat: {
    options: Object.keys(matchUpFormats),
    mapping: matchUpFormats,
    control: { type: 'select' }
  },
  direction: {
    options: Object.keys(directions),
    mapping: directions,
    control: { type: 'inline-radio' }
  }
});
