import { css } from '@stitches/react';

export const ausStyle = ({ roundNumber, participantHeight }) => {
  const connectorHeight = (participantHeight + 14) * Math.pow(2, roundNumber - 1);
  const topOffset = -1 * (participantHeight + 1);
  const connectorWidth = 17;

  return css({
    position: 'relative',
    display: 'grid',
    width: '100%',
    height: participantHeight * 2 + 2,
    gridRow: 'span 2',
    border: 'solid $matchUp$borderColor',
    borderWidth: '$matchUp$borderWidth',
    WebkitTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    marginBottom: 20,
    '&:hover': {
      border: '$matchUp$borderWidth solid #0091d2'
    },
    '@media (min-width: 400px)': {
      fontSize: 16
    },
    '&::before': {
      borderRadius: 2,
      position: 'absolute',
      borderBlockStart: '$matchUp$borderWidth solid #999',
      height: 1,
      top: `calc(50% - $matchUp$borderWidth)`
    },
    '&::after': {
      position: 'relative',
      width: 8,
      insetInlineStart: '100%'
    },
    '&::after, &::before': {
      content: '',
      borderColor: '#999',
      display: 'block',
      borderWidth: '$matchUp$borderWidth'
    },
    '&:nth-child(odd):after': {
      borderInlineEnd: '$matchUp$borderWidth solid #999',
      borderTopStyle: 'solid'
    },
    '&:nth-child(2n):after': {
      borderInlineEnd: '$matchUp$borderWidth solid #999',
      borderBottomStyle: 'solid'
    },
    variants: {
      bracketStyle: {
        firstRound: {
          '&:nth-child(2n):after': {
            top: `calc(-100% - ${participantHeight}px)`
          },
          '&:nth-child(odd):after': {
            top: topOffset
          },
          '&:after': {
            width: connectorWidth,
            height: connectorHeight
          }
        },
        connectors: {
          '&:before': {
            width: connectorWidth,
            insetInlineStart: -connectorWidth
          },
          '&:nth-child(2n):after': {
            top: `calc(-100% - ${participantHeight}px)`
          },
          '&:nth-child(odd):after': {
            top: topOffset
          },
          '&:after': {
            width: connectorWidth,
            height: connectorHeight
          }
        },
        finalRound: {
          '&:before': {
            width: connectorWidth,
            insetInlineStart: -connectorWidth
          },
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
