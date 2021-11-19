import StructureSelector from './StructureSelector';
import { Structure } from '../Structure/Structure';
import React, { useEffect } from 'react';

export const Draw = ({ composition, structures, structureId }) => {
  const [selectedStructureId, setSelectedStructureId] = React.useState(structureId);
  const onSelect = (structureId) => setSelectedStructureId(structureId);

  useEffect(() => setSelectedStructureId(structureId), [structureId]);

  const structure = structures?.find((structure) => structure.structureId === selectedStructureId);
  const roundMatchUps = structure?.roundMatchUps;
  const matchUps = roundMatchUps ? Object.values(roundMatchUps)?.flat() : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StructureSelector structures={structures} structureId={selectedStructureId} onSelect={onSelect} />
      <Structure composition={composition.configuration} matchUps={matchUps} />
    </div>
  );
};
