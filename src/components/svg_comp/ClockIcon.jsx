import React from 'react';

const ClockIcon = ({ className = '', width = 16, height = 16, alt = 'clock', ...props }) => {
  const src = new URL('./cloke.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default ClockIcon;
