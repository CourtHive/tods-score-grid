import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../Primitives/Menu';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import React from 'react';

const Box = styled('div', {});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: mauve.mauve11,
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 }
});

const StructureButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: 5,
  minWidth: 50,
  height: 35,
  paddingLeft: 10,
  paddingRight: 10,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` }
});

export const StructureSelector = ({ structures = [], structureId, onSelect }) => {
  const handleSelect = (e, structureId) => {
    if (typeof onSelect === 'function') onSelect(structureId);
  };

  const StructureItem = ({ structureName, structureId, keyCombo }) => (
    <DropdownMenuItem onSelect={(e) => handleSelect(e, structureId)}>
      {structureName}
      {!keyCombo ? null : <RightSlot>{keyCombo}</RightSlot>}
    </DropdownMenuItem>
  );

  const label = structures?.find((structure) => structure.structureId === structureId)?.structureName || 'Select...';

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <StructureButton aria-label="Customise options">{label} </StructureButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={-10}>
          {structures?.map((structure) => (
            <StructureItem
              structureName={structure.structureName}
              structureId={structure.structureId}
              key={structure.structureId}
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default StructureSelector;
