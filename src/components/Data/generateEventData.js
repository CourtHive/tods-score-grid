import { fixtures, utilities, mocksEngine, tournamentEngine } from 'tods-competition-factory';

export function generateEventData({
  matchUpFormat = 'SET5-S:6/TB7',
  completionGoal,
  addQualifying,
  drawSize = 4,
  eventType,
  drawType
} = {}) {
  const complete = completionGoal < 100 ? Math.floor(drawSize * 0.01 * completionGoal) : undefined;

  const drawId = 'drawId';
  const drawProfile = { drawId, drawSize, drawType, completionGoal: complete, seedsCount: 8, matchUpFormat, eventType };
  if (addQualifying)
    drawProfile.qualifyingProfiles = [{ structureProfiles: [{ drawSize: 16, qualifyingPositions: 4 }] }];
  if (drawType === 'AD_HOC') Object.assign(drawProfile, { drawMatic: true, roundsCount: 3 });

  return genData({ drawProfile });
}

function genData({ drawProfile }) {
  const drawId = 'drawId';
  const venueId = 'venueId';
  const startTime = '08:00';
  const endTime = '20:00';
  const startDate = utilities.dateTime.extractDate(new Date().toISOString());
  const drawProfiles = [drawProfile];
  const venueProfiles = [
    {
      venueId,
      venueName: 'Venue',
      venueAbbreviation: 'VNU',
      courtNames: ['One', 'Two', 'Three'],
      courtIds: ['c1', 'c2', 'c3'],
      courtsCount: 8,
      startTime,
      endTime
    }
  ];
  const schedulingProfile = [
    {
      scheduleDate: startDate,
      venues: [
        {
          venueId,
          rounds: [
            { drawId, roundNumber: 1 },
            { drawId, roundNumber: 2 }
          ]
        }
      ]
    }
  ];

  const result = mocksEngine.generateTournamentRecord({
    policyDefinitions: fixtures.policies.POLICY_SCHEDULING_NO_DAILY_LIMITS,
    scheduleCompletedMatchUps: true,
    completeAllMatchUps: true,
    autoSchedule: true,
    schedulingProfile,
    venueProfiles,
    drawProfiles,
    startDate
  });

  console.log({ result, drawProfiles });

  if (result.error) return { eventData };

  const {
    eventIds: [eventId],
    tournamentRecord
  } = result;

  tournamentEngine.setState(tournamentRecord);
  const { eventData } =
    tournamentEngine.getEventData({
      participantsProfile: { withIOC: true, withISO2: true },
      eventId
    }) || {};

  return { eventData };
}
