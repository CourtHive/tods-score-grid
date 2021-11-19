import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import React from 'react';

const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: 5,
  height: 35,
  minWidth: 55,
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: '1.2em',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` }
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: mauve.mauve10 }
    },
    bold: {
      true: { fontWeight: 500 }
    }
  }
});

const PopoverDemo = () => {
  const handleOnClick = () => {
    console.log('clicked');
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">Main</IconButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <Flex css={{ flexDirection: 'column', alignContent: 'center', gap: 10 }}>
          <Text css={{ marginBottom: 10, fontSize: '1.5rem' }} onClick={handleOnClick}>
            Consolation
          </Text>
          <Text css={{ marginBottom: 10, fontSize: '1.5rem' }} onClick={handleOnClick}>
            3-4 Playoff
          </Text>
        </Flex>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDemo;
