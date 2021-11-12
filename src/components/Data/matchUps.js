import { mocksEngine, tournamentEngine } from 'tods-competition-factory';

export function generateMatchUps({ drawSize = 4, drawType, eventType, matchUpFormat = 'SET5-S:6/TB7' } = {}) {
  const { tournamentRecord } = mocksEngine.generateTournamentRecord({
    drawProfiles: [{ drawSize, drawType, seedsCount: 8, matchUpFormat, eventType }],
    completeAllMatchUps: true,
    randomWinningSide: true
  });

  return tournamentEngine.setState(tournamentRecord).allTournamentMatchUps({ participantsProfile: { withISO: true } });
}
