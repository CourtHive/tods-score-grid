import { mocksEngine, tournamentEngine } from 'tods-competition-factory';

export function generateEventData({
  matchUpFormat = 'SET5-S:6/TB7',
  completionGoal,
  drawSize = 4,
  eventType,
  drawType
} = {}) {
  const complete = completionGoal < 100 ? Math.floor(drawSize * 0.01 * completionGoal) : undefined;

  const drawProfile = { drawSize, drawType, completionGoal: complete, seedsCount: 8, matchUpFormat, eventType };
  if (drawType === 'AD_HOC') Object.assign(drawProfile, { drawMatic: true, roundsCount: 3 });

  const result = mocksEngine.generateTournamentRecord({
    drawProfiles: [drawProfile],
    completeAllMatchUps: true,
    randomWinningSide: true
  });

  const { tournamentRecord, eventIds } = result || {};
  const eventId = eventIds?.[0];

  const { eventData } = tournamentEngine.setState(tournamentRecord).getEventData({ eventId }) || {};

  return { eventData };
}
