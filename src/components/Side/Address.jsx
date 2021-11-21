import { css } from '@stitches/react';
import cx from 'classnames';
import React from 'react';

export const addressStyles = css({
  color: 'gray',
  fontSize: 'smaller'
});

export const Address = ({ individualParticipant, className, composition }) => {
  const showAddress = composition?.configuration?.showAddress;
  const address = individualParticipant?.person?.addresses?.length
    ? Object.values(individualParticipant.person?.addresses?.[0] || {}).join(', ')
    : ' ';
  return showAddress ? <div className={cx(addressStyles(), className)}>{address}</div> : null;
};
