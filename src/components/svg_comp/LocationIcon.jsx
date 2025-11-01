import React from 'react';

const LocationIcon = ({ className = '', width = 20, height = 20, alt = 'location', ...props }) => {
  const src = new URL('./locatiinicon.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default LocationIcon;
