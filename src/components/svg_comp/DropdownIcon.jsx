import React from 'react';

const DropdownIcon = ({ className = '', width = 16, height = 16, alt = 'dropdown', ...props }) => {
  const src = new URL('./dropdown.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default DropdownIcon;
