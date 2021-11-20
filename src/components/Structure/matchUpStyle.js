import { css } from '@stitches/react';

export const matchUpStyle = ({ composition, roundFactor, roundNumber, participantHeight }) => {
  const connectorHeight =
    (participantHeight + 14 + (composition?.centerInfo ? 30 : 0)) * (roundFactor || Math.pow(2, roundNumber - 1));
  const topOffset = -1 * (participantHeight + 1 + (composition?.centerInfo ? 30 : 0)) - 2;
  const bottomOffset = composition?.centerInfo ? participantHeight + 30 : participantHeight - 2;
  const connectorWidth = 16;

  const height = participantHeight * 2 + 2 + (composition?.centerInfo ? 2 * 30 : 0);

  return css({
    position: 'relative',
    display: 'grid',
    width: '100%',
    height,
    gridRow: 'span 2',
    border: 'solid $border',
    borderInlineStart: 'solid $borderInlineStart',
    borderWidth: '$borderWidths$matchUp',
    boxShadow: '$matchUp$boxShadow',
    WebkitTransition: 'all 0.30s linear',
    transition: 'all 0.30s linear',
    marginBottom: 20,
    '&:hover': {
      border: 'solid $borderHover',
      borderInlineStart: 'solid $borderHover',
      borderWidth: '$borderWidths$matchUp'
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
      top: `calc(50% - $borderWidths$matchUp * $borderWidths$factor)`
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
            top: `calc(${topOffset}px + $borderWidths$matchUp * $borderWidths$factor)`
          }
        },
        m2: {
          '&:after': {
            top: `calc(-100% - ${bottomOffset}px - $borderWidths$matchUp * $borderWidths$factor)`,
            borderInlineEnd: '$borderWidths$matchUp solid',
            borderWidth: '$borderWidths$matchUp',
            borderColor: '$connector',
            borderBottomStyle: 'solid'
          }
        },
        m0: {
          '&:after': {
            top: `calc(-100% - ${bottomOffset}px - $borderWidths$matchUp * $borderWidths$factor)`,
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
