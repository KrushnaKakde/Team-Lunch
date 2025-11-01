import React from 'react';

const CalendarIcon = ({ className = '', width = 16, height = 17, alt = 'calendar', ...props }) => {
  const src = new URL('./calendar.svg', import.meta.url).href;
  return <img src={src} width={width} height={height} className={className} alt={alt} {...props} />;
};

export default CalendarIcon;
