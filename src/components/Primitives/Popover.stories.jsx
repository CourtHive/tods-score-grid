import PopoverDemo from './Popover';
import React from 'react';

export default {
  title: 'Radix',
  component: PopoverDemo,
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const Popover = () => {
  return <PopoverDemo />;
};
