import { css } from '@stitches/react';

export const scoreWrapperStyle = (participantHeight) => {
  return css({
    display: 'flex',
    alignItems: 'center',
    height: participantHeight,
    justifyContent: 'flex-end',
    borderBottom: '1px solid transparent',
    backgroundColor: '$matchUp',
    variants: {
      sideNumber: {
        1: {
          borderBottom: '1px solid $internalDividers'
        }
      },
      fontSize: {
        small: {
          fontSize: 'smaller',
          paddingRight: '1em',
          color: 'blue'
        }
      }
    }
  });
};
