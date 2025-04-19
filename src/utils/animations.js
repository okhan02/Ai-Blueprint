/**
 * Animation utility functions for applying CSS custom property animations
 */

/**
 * Apply animation to an element with the specified class and animation name
 * @param {HTMLElement} element - The element to animate
 * @param {string} className - The class to apply (e.g., 'float-particle')
 * @param {string} animationName - The animation name (e.g., 'floatParticles')
 * @param {number} duration - Animation duration in seconds
 * @param {string} timingFunction - CSS timing function (e.g., 'ease-in-out')
 * @param {number} delay - Delay in seconds before animation starts
 * @param {number} iterationCount - Number of times to repeat (use Infinity for infinite)
 */
export function applyAnimation(
  element,
  className,
  animationName,
  duration = 3,
  timingFunction = 'ease-in-out',
  delay = 0,
  iterationCount = 1
) {
  if (!element) return;

  // Add the class that uses the CSS variables
  element.classList.add(className);

  // Apply the animation
  element.style.animation = `${animationName} ${duration}s ${timingFunction} ${delay}s ${iterationCount}`;
}

/**
 * Apply floating animation to elements
 * @param {HTMLElement[]} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export function applyFloatingAnimation(elements, options = {}) {
  const {
    duration = 6,
    timingFunction = 'ease-in-out',
    delay = 0,
    iterationCount = Infinity,
  } = options;

  elements.forEach((element) => {
    applyAnimation(
      element,
      'float-particle',
      'floatParticles',
      duration,
      timingFunction,
      delay,
      iterationCount
    );
  });
}

/**
 * Apply fade-in animation to elements
 * @param {HTMLElement[]} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export function applyFadeInAnimation(elements, options = {}) {
  const {
    duration = 0.5,
    timingFunction = 'ease-out',
    delay = 0,
    iterationCount = 1,
  } = options;

  elements.forEach((element) => {
    applyAnimation(
      element,
      'fade-in-element',
      'fade-in',
      duration,
      timingFunction,
      delay,
      iterationCount
    );
  });
}

/**
 * Apply heading fade-in zoom animation
 * @param {HTMLElement} element - Element to animate
 * @param {Object} options - Animation options
 */
export function applyHeadingFadeInAnimation(element, options = {}) {
  const {
    duration = 1.5,
    timingFunction = 'ease-out',
    delay = 0,
    iterationCount = 1,
  } = options;

  applyAnimation(
    element,
    'heading-fade-in',
    'heading-fade-in-zoom',
    duration,
    timingFunction,
    delay,
    iterationCount
  );
}

/**
 * Apply pulse animation to elements
 * @param {HTMLElement[]} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export function applyPulseAnimation(elements, options = {}) {
  const {
    duration = 2,
    timingFunction = 'ease-in-out',
    delay = 0,
    iterationCount = Infinity,
  } = options;

  elements.forEach((element) => {
    applyAnimation(
      element,
      'pulse-line',
      'pulseLines',
      duration,
      timingFunction,
      delay,
      iterationCount
    );
  });
}

/**
 * Apply blink animation to elements
 * @param {HTMLElement[]} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export function applyBlinkAnimation(elements, options = {}) {
  const {
    duration = 1,
    timingFunction = 'step-end',
    delay = 0,
    iterationCount = Infinity,
  } = options;

  elements.forEach((element) => {
    applyAnimation(
      element,
      'blink-element',
      'blink',
      duration,
      timingFunction,
      delay,
      iterationCount
    );
  });
}
