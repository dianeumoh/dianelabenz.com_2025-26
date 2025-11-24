import { useState, useEffect } from 'react';


// The list of words you want to cycle through
const GREETINGS = ['Ciao!', 'Hello!', 'Mököm!','Bonjour!', 'Hola!', '안녕!','Nǐ hǎo!'];
const TYPING_SPEED = 120; // ms per character (slower is more obvious)
const PAUSE_DURATION = 2000; // 2 seconds after typing

export default function Greeting() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = GREETINGS[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Handle deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % GREETINGS.length);
        }
      } else {
        // Handle typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Word is typed, pause
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };

    // Set the typing speed
    const timeout = setTimeout(handleTyping, TYPING_SPEED);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    // This wrapper just holds the text and cursor together
    <span className="greeting-wrapper">
      <span className="greeting-text">
        {displayText || ' '}
      </span>
      <span className="cursor" />
    </span>
  );
}