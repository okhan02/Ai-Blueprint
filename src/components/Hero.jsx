import React from 'react';
import { HeroContent } from './hero/HeroContent';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-deep-space-black">
      {/* Animated Background */}
      <div className="ai-animated-bg" />
      <div className="ai-lines" />

      <HeroContent />
    </div>
  );
};

export default Hero;
