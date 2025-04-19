import React from 'react';

export const BaseGradient = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bokeh-background"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space-black via-transparent to-deep-space-black"></div>
    </div>
  );
};
