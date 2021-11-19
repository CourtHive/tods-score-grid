import StructureSelector from './StructureSelector';
import { Structure } from '../Structure/Structure';
import React from 'react';

export const Draw = ({ composition, eventData }) => {
  console.log({ eventData });
  const structures = eventData?.drawsData?.[0]?.structures;
  const initialStructureId = structures[0].structureId;

  const [selectedStructureId, setSelectedStructureId] = React.useState(initialStructureId);
  const onSelect = (structureId) => setSelectedStructureId(structureId);

  return (
    <>
      <StructureSelector structures={structures} structureId={selectedStructureId} onSelect={onSelect} />
      <Structure composition={composition.configuration} />
    </>
  );
};
