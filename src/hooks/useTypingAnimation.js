import { useEffect } from 'react';

export const useTypingAnimation = ({
  titles,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseBeforeDelete = 2000,
  pauseBeforeType = 500,
}) => {
  useEffect(() => {
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const titleElement = document.getElementById('typing-title');
    if (!titleElement) return;

    const type = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        currentCharIndex--;
        titleElement.textContent = currentTitle.substring(0, currentCharIndex);
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
          setTimeout(type, pauseBeforeType);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        currentCharIndex++;
        titleElement.textContent = currentTitle.substring(0, currentCharIndex);
        if (currentCharIndex === currentTitle.length) {
          isDeleting = true;
          setTimeout(type, pauseBeforeDelete);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    };

    setTimeout(type, pauseBeforeType);
  }, [titles, typingSpeed, deletingSpeed, pauseBeforeDelete, pauseBeforeType]);
};
