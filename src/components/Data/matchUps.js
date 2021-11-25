import { mocksEngine, tournamentEngine } from 'tods-competition-factory';

export function generateMatchUps({
  matchUpFormat = 'SET5-S:6/TB7',
  qualifyingProfiles,
  completionGoal,
  drawSize = 4,
  eventType,
  outcomes,
  drawType
} = {}) {
  const complete = completionGoal < 100 ? Math.floor(drawSize * 0.01 * completionGoal) : undefined;

  const drawProfile = {
    completionGoal: complete,
    qualifyingProfiles,
    seedsCount: 8,
    matchUpFormat,
    eventType,
    drawSize,
    drawType,
    outcomes
  };
  if (drawType === 'AD_HOC') Object.assign(drawProfile, { drawMatic: true, roundsCount: 3 });

  const { tournamentRecord } = mocksEngine.generateTournamentRecord({
    drawProfiles: [drawProfile],
    completeAllMatchUps: true,
    randomWinningSide: true
  });

  const { matchUps } = tournamentEngine
    .setState(tournamentRecord)
    .allTournamentMatchUps({ participantsProfile: { withISO: true } });

  return { matchUps };
}
