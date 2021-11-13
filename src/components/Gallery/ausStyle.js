import { css } from '@stitches/react';

export const ausStyle = ({ roundFactor, roundNumber, participantHeight }) => {
  const connectorHeight = (participantHeight + 14) * (roundFactor || Math.pow(2, roundNumber - 1));
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
      width: connectorWidth,
      insetInlineStart: -connectorWidth,
      top: `calc(50% - $matchUp$borderWidth)`
    },
    '&::after': {
      position: 'relative',
      insetInlineStart: '100%',
      width: 8
    },
    '&::after, &::before': {
      content: '',
      display: 'block',
      borderColor: '#999',
      borderWidth: '$matchUp$borderWidth'
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
            top: topOffset,
            borderInlineEnd: '$matchUp$borderWidth solid #999',
            borderTopStyle: 'solid'
          }
        },
        m2: {
          '&:after': {
            top: `calc(-100% - ${participantHeight}px)`,
            borderInlineEnd: '$matchUp$borderWidth solid #999',
            borderBottomStyle: 'solid'
          }
        },
        m0: {
          '&:after': {
            top: `calc(-100% - ${participantHeight}px)`,
            borderBottomStyle: 'solid'
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
