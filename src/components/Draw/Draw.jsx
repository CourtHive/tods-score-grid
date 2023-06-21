import StructureSelector from './StructureSelector';
import { Structure } from '../Structure/Structure';
import React, { useEffect } from 'react';
import { styled } from '@stitches/react';

export const Draw = ({ composition, eventHandlers, structures, structureId, useStructureSelector }) => {
  const [selectedStructureId, setSelectedStructureId] = React.useState(structureId);
  const [selectedMatchUpId, setSelectedMatchUpId] = React.useState();
  const onSelect = (structureId) => setSelectedStructureId(structureId);

  useEffect(() => setSelectedStructureId(structureId), [structureId]);

  if (eventHandlers)
    eventHandlers.matchUpClick = ({ event, matchUpId }) => {
      const menuPosition = { left: event?.clientX, top: event?.clientY };
      const matchUpCoords = event?.currentTarget?.getBoundingClientRect();
      if (menuPosition || matchUpCoords) {
        // console.log({ menuPosition, matchUpCoords });
      }
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

  if (window.dev) console.log({ composition });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!structures?.length || structures.length === 1 || !useStructureSelector ? null : (
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
          eventHandlers={eventHandlers}
        />
      )}
    </div>
  );
};

export default Draw;
