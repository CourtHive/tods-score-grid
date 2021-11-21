import { css } from '@stitches/react';
import React from 'react';

export function CenterInfo({ height, sideNumber, entryStatus }) {
  const infoStyle = css({
    borderBottom: 'solid 1px lightgray',
    backgroundColor: '$matchUp',
    width: '100%',
    height,
    variants: {
      variant: {
        1: {
          borderBottom: 'solid 1px black'
        },
        2: {
          borderBottom: 'solid 1px lightgray'
        }
      }
    }
  });

  const entryStyle = css({
    fontFamily: 'Lato,Arial,Helvetica,sans-serif',
    WebkitFontSmooting: 'antialiased',
    boxSizing: 'inherit',
    display: 'flex',
    marginInlineStart: 'calc(20%)',
    WebkitBoxPack: 'center',
    WebkitBoxOrient: 'horizontal',
    WebKitBoxDirection: 'normal',
    flexDirection: 'row'
  });

  const statusStyle = css({
    boxSizing: 'inherit',
    fontFamily: 'Lato',
    alignContent: 'center',
    fontSize: 9,
    fontWeight: 900
  });

  return (
    <div className={infoStyle({ variant: sideNumber })}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <div className={entryStyle()}>
          <span className={statusStyle()}>Entry status:&nbsp;</span>
          <span className={statusStyle()}>{entryStatus}</span>
        </div>
      </div>
    </div>
  );
}
