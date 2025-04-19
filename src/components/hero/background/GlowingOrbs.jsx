import React from 'react';

export const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0">
      {/* Left side geometric pattern glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      {/* Right side circuit brain glow */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full filter blur-[100px] animate-pulse-slow delay-1000"></div>
    </div>
  );
};
