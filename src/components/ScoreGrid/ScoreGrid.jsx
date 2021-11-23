import { compositions } from '../Data/compositions';
import Draw from '../Draw/Draw';
import React from 'react';

export const ScoreGrid = ({ compositionName, eventData, events }) => {
  const structures = eventData?.drawsData?.[0]?.structures || [];
  const initialStructureId = structures[0]?.structureId;

  const composition = compositions?.[compositionName] || compositions['Australian'];
  const className = composition.theme;

  return (
    <Draw
      structureId={initialStructureId}
      composition={composition}
      structures={structures}
      className={className}
      events={events}
    />
  );
};
