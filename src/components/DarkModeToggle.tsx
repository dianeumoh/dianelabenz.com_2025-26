import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  // Initialize theme from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Apply the theme to the document on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    // Apply theme immediately for instant feedback
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      <span className="toggle-pill" />
      
      {/* The Sun (light mode icon) should be FIRST */}
      <span className="icon-wrapper">
        ☀️
      </span>
      
      {/* The Moon (dark mode icon) should be SECOND */}
      <span className="icon-wrapper">
        🌙
      </span>
    </button>
  );
}