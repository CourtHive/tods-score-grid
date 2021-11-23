import StructureSelector from './StructureSelector';
import { Structure } from '../Structure/Structure';
import React, { useEffect } from 'react';
import { styled } from '@stitches/react';

export const Draw = ({ composition, events, structures, structureId }) => {
  const [selectedStructureId, setSelectedStructureId] = React.useState(structureId);
  const [selectedMatchUpId, setSelectedMatchUpId] = React.useState();
  const onSelect = (structureId) => setSelectedStructureId(structureId);

  useEffect(() => setSelectedStructureId(structureId), [structureId]);

  if (events)
    events.matchUpClick = (matchUpId) => {
      setSelectedMatchUpId(selectedMatchUpId === matchUpId ? undefined : matchUpId);
    };

  const structure = structures?.find((structure) => structure.structureId === selectedStructureId);
  const roundMatchUps = structure?.roundMatchUps;
  const matchUps = roundMatchUps ? Object.values(roundMatchUps)?.flat() : [];

  const Notice = styled('div', {
    display: 'flex',
    width: 'auto',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!structures?.length || structures.length === 1 ? null : (
        <StructureSelector structures={structures} structureId={selectedStructureId} onSelect={onSelect} />
      )}
      <div style={{ height: '30px' }}> </div>
      {!structures?.length ? (
        <Notice>Nothing to show with current configuration</Notice>
      ) : (
        <Structure
          selectedMatchUpId={selectedMatchUpId}
          composition={composition}
          matchUps={matchUps}
          events={events}
        />
      )}
    </div>
  );
};

export default Draw;
