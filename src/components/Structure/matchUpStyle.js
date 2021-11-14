import { css } from '@stitches/react';

export const matchUpStyle = ({ roundFactor, roundNumber, participantHeight }) => {
  const connectorHeight = (participantHeight + 14) * (roundFactor || Math.pow(2, roundNumber - 1));
  const topOffset = -1 * (participantHeight + 1);
  const connectorWidth = 17;

  return css({
    position: 'relative',
    display: 'grid',
    width: '100%',
    height: participantHeight * 2 + 2,
    gridRow: 'span 2',
    border: 'solid $border',
    borderWidth: '$borderWidths$matchUp',
    boxShadow: '$matchUp$boxShadow',
    WebkitTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    marginBottom: 20,
    '&:hover': {
      border: '$borderWidths$matchUp solid #0091d2'
    },
    '@media (min-width: 400px)': {
      fontSize: 16
    },
    '&::before': {
      borderRadius: 2,
      position: 'absolute',
      borderBlockStart: '$borderWidths$matchUp solid #999',
      height: 1,
      width: connectorWidth,
      insetInlineStart: -connectorWidth,
      top: `calc(50% - $borderWidths$matchUp)`
    },
    '&::after': {
      position: 'relative',
      insetInlineStart: '100%',
      width: 8
    },
    '&::after, &::before': {
      content: '',
      display: 'block',
      borderWidth: '$borderWidths$matchUp',
      borderColor: '$connector'
    },
    '&:after': {
      width: connectorWidth,
      height: connectorHeight
    },
    variants: {
      firstRound: {
        true: {
          '&:before': {
            width: 0,
            height: 0,
            borderWidth: 0
          }
        }
      },
      link: {
        m1: {
          '&:after': {
            borderWidth: '$borderWidths$matchUp',
            borderInlineEnd: '$borderWidths$matchUp solid',
            borderColor: '$connector',
            borderTopStyle: 'solid',
            top: topOffset
          }
        },
        m2: {
          '&:after': {
            top: `calc(-100% - ${participantHeight}px)`,
            borderInlineEnd: '$borderWidths$matchUp solid',
            borderWidth: '$borderWidths$matchUp',
            borderColor: '$connector',
            borderBottomStyle: 'solid'
          }
        },
        m0: {
          '&:after': {
            top: `calc(-100% - ${participantHeight}px)`,
            borderWidth: '$borderWidths$matchUp',
            borderBottomStyle: 'solid',
            borderColor: '$connector'
          }
        },
        mr: {
          '&:after': {
            width: 0,
            height: 0,
            borderWidth: 0
          },
          '&:before': {
            width: 0,
            height: 0,
            borderWidth: 0
          }
        }
      },
      finalRound: {
        true: {
          '&:after': {
            width: 0,
            height: 0,
            borderWidth: 0
          }
        }
      }
    }
  });
};
