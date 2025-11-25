import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

// Desktop navigation (without Home - logo serves as Home)
const desktopNavItems = [
  { to: '/selected-works', label: 'Selected works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

// Mobile navigation (includes Home)
const mobileNavItems = [
  { to: '/', label: 'Home' },
  { to: '/selected-works', label: 'Selected works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
    // Don't navigate if clicking the same route
    if (location.pathname === to) {
      e.preventDefault();
      return;
    }

    // Close menu on navigation
    setIsMenuOpen(false);

    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      e.preventDefault();
      // Start the View Transition for smooth animation
      document.startViewTransition(() => {
        navigate(to);
      });
    }
    // If not supported, let NavLink handle navigation normally
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    // 1. Use "site-header" for the glass effect
    <header aria-label="Main navigation" className="site-header">
      
      {/* 2. Your header-container is perfect */}
      <div className="header-container">
        
        {/* 3. Your header-logo div now holds the Logo component */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* 4. We create a real nav element */}
        <nav className="main-nav">
          {desktopNavItems.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.to}
              // This adds a class if the link is active
              className={({ isActive }) => isActive ? 'active-link' : ''}
              onClick={(e) => handleNavClick(e as MouseEvent<HTMLAnchorElement>, item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 5. Add the toggle switch */}
        <DarkModeToggle />

        {/* 6. Hamburger menu button (mobile only) */}
        <button 
          className="hamburger-menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* 7. Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <nav 
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            {mobileNavItems.map((item) => (
              <NavLink 
                key={item.label} 
                to={item.to}
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={(e) => handleNavClick(e as MouseEvent<HTMLAnchorElement>, item.to)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-menu-toggle">
              <DarkModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}