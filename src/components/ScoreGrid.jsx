import React from 'react';
import 'bulma/css/bulma.min.css';
import { styled } from '@stitches/react';

const GridRow = styled('div', {
  display: 'flex',
  flexDirection: 'row'
});

const GridColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
});

const Box = styled('div', {
  backgroundColor: 'lightblue',
  width: 80,
  height: 40,
  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet'
        }
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray'
        }
      }
    }
  },
  defaultVariants: {
    color: 'gray'
  }
});

const ScoreGrid = () => {
  return (
    <GridRow>
      <GridColumn>
        <Box color={'violet'} />
        <Box />
        <Box color={'violet'} />
        <Box />
      </GridColumn>
      <GridColumn>
        <Box />
        <Box color={'violet'} />
      </GridColumn>
      <GridColumn>
        <Box color={'violet'} />
      </GridColumn>
    </GridRow>
  );
};

export default React.memo(ScoreGrid);
