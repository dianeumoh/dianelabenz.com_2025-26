import { Link, useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';

export default function Logo() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't navigate if already on home
    if (location.pathname === '/') {
      e.preventDefault();
      return;
    }

    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      e.preventDefault();
      // Start the View Transition for smooth animation
      document.startViewTransition(() => {
        navigate('/');
      });
    }
    // If not supported, let Link handle navigation normally
  };

  return (
    <Link to="/" className="header-logo-link" onClick={handleClick}>
      <img src="src/images/Logo.svg" alt="Diane Labenz Logo" className="logo-image" />
    </Link>
  );
}
