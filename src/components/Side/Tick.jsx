import React from 'react';

/*
 check path source:
 https://github.com/PolymerElements/iron-icons/blob/master/iron-icons.js
*/
export const Tick = ({ dim = '20px', ...props }) => (
  <svg
    height={dim}
    style={{ fill: 'currentColor' }}
    viewBox="0 0 18 24"
    width={dim}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);
