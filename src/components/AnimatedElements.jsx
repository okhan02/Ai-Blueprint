import React, { useEffect, useRef } from 'react';
import {
  applyFloatingAnimation,
  applyFadeInAnimation,
  applyHeadingFadeInAnimation,
  applyPulseAnimation,
  applyBlinkAnimation,
} from '../utils/animations';

const AnimatedElements = () => {
  const headingRef = useRef(null);
  const fadeInRefs = useRef([]);
  const floatRefs = useRef([]);
  const pulseRefs = useRef([]);
  const blinkRefs = useRef([]);

  useEffect(() => {
    // Apply heading fade-in animation
    if (headingRef.current) {
      applyHeadingFadeInAnimation(headingRef.current);
    }

    // Apply fade-in animations with staggered delays
    fadeInRefs.current.forEach((element, index) => {
      if (element) {
        applyFadeInAnimation([element], { delay: index * 0.2 });
      }
    });

    // Apply floating animations
    if (floatRefs.current.length > 0) {
      applyFloatingAnimation(floatRefs.current);
    }

    // Apply pulse animations
    if (pulseRefs.current.length > 0) {
      applyPulseAnimation(pulseRefs.current);
    }

    // Apply blink animations
    if (blinkRefs.current.length > 0) {
      applyBlinkAnimation(blinkRefs.current);
    }
  }, []);

  return (
    <div className="p-8">
      <h1 ref={headingRef} className="text-4xl font-bold mb-8">
        Animated Elements Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            ref={(el) => (fadeInRefs.current[item - 1] = el)}
            className="p-6 bg-blue-100 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Fade In Item {item}</h2>
            <p>This element fades in with a staggered delay.</p>
          </div>
        ))}
      </div>

      <div className="flex justify-around mb-12">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            ref={(el) => (floatRefs.current[item - 1] = el)}
            className="w-24 h-24 bg-purple-500 rounded-full"
          />
        ))}
      </div>

      <div className="flex justify-around mb-12">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            ref={(el) => (pulseRefs.current[item - 1] = el)}
            className="w-32 h-4 bg-green-500 rounded"
          />
        ))}
      </div>

      <div className="flex justify-around">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            ref={(el) => (blinkRefs.current[item - 1] = el)}
            className="text-2xl font-bold"
          >
            Blink {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedElements;
