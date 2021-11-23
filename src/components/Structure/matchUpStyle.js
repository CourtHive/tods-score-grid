import { css } from '@stitches/react';

export const matchUpStyle = ({ composition, roundFactor, roundNumber, participantHeight }) => {
  const configuration = composition?.configuration || {};
  const centerInfoHeight = configuration?.centerInfo || 0;
  const connectorWidth = configuration?.connectorWidth || 16;
  const connectorHeight =
    (participantHeight + connectorWidth + centerInfoHeight - 2) * (roundFactor || Math.pow(2, roundNumber - 1));
  const topOffset = -1 * (participantHeight + centerInfoHeight) - 2 - 1;
  const bottomOffset = centerInfoHeight ? participantHeight + centerInfoHeight : participantHeight - 2;

  const height = 2 * (participantHeight + centerInfoHeight) + 2;

  return css({
    position: 'relative',
    display: 'grid',
    width: '100%',
    height,
    border: 'solid $border',
    backgroundColor: '$matchUpBackgroundColor',
    borderInlineStart: 'solid $borderInlineStart',
    borderWidth: '$borderWidths$matchUp',
    boxShadow: '$matchUp$boxShadow',
    WebkitTransition: 'all 0.30s linear',
    transition: 'all 0.30s linear',
    marginBottom: '$space$1',
    '&:hover': {
      border: 'solid $borderHover',
      borderInlineStart: 'solid $borderHover',
      borderWidth: '$borderWidths$matchUp'
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
      width: `calc(${connectorWidth} / 2}`
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
