import { css } from '@stitches/react';
import cx from 'classnames';
import React from 'react';

export const addressStyles = css({
  marginInlineStart: '$space$2',
  marginInlineEnd: '$space$2',
  fontSize: 'smaller',
  color: 'gray'
});

export const Address = ({ individualParticipant, className, composition }) => {
  const showAddress = composition?.configuration?.showAddress;
  const address = individualParticipant?.person?.addresses?.length
    ? Object.values(individualParticipant.person?.addresses?.[0] || {}).join(', ')
    : ' ';
  return showAddress ? <div className={cx(addressStyles(), className)}>{address}</div> : null;
};
