import { mocksEngine, tournamentEngine } from 'tods-competition-factory';

export function generateMatchUps({ drawSize = 4, drawType, eventType, matchUpFormat = 'SET5-S:6/TB7' } = {}) {
  const drawProfile = { drawSize, drawType, seedsCount: 8, matchUpFormat, eventType };
  if (drawType === 'AD_HOC') Object.assign(drawProfile, { drawMatic: true, roundsCount: 3 });

  const { tournamentRecord } = mocksEngine.generateTournamentRecord({
    drawProfiles: [drawProfile],
    completeAllMatchUps: true,
    randomWinningSide: true
  });

  return tournamentEngine.setState(tournamentRecord).allTournamentMatchUps({ participantsProfile: { withISO: true } });
}
