import StructureSelector from './StructureSelector';
import { Structure } from '../Structure/Structure';
import React, { useEffect } from 'react';
import { styled } from '@stitches/react';

export const Draw = ({
  useStructureSelector,
  eventHandlers,
  disableFlags,
  composition,
  structureId,
  structures,
  teamLogo
}) => {
  const [selectedStructureId, setSelectedStructureId] = React.useState(structureId);
  const onSelect = (structureId) => setSelectedStructureId(structureId);

  useEffect(() => setSelectedStructureId(structureId), [structureId]);

  if (teamLogo) composition.teamLogo = teamLogo;
  if (disableFlags && composition?.configuration) composition.configuration.flags = false;

  if (eventHandlers && !eventHandlers.matchUpClick) {
    /*
    eventHandlers.matchUpClick = ({ event, matchUpId }) => {
      const menuPosition = { left: event?.clientX, top: event?.clientY };
      const matchUpCoords = event?.currentTarget?.getBoundingClientRect();
      if (menuPosition || matchUpCoords) {
        // console.log({ menuPosition, matchUpCoords });
      }
      setSelectedMatchUpId(matchUpId);
    };
    */
  }

  const selectedMatchUpId = undefined;

  const structure = structures?.find((structure) => structure.structureId === selectedStructureId);
  const roundMatchUps = structure?.roundMatchUps;
  const matchUps = roundMatchUps ? Object.values(roundMatchUps)?.flat() : [];

  const Notice = styled('div', {
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'center',
    display: 'flex',
    width: 'auto',
    height: 60
  });

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
          eventHandlers={eventHandlers}
          composition={composition}
          matchUps={matchUps}
        />
      )}
    </div>
  );
};

export default Draw;
