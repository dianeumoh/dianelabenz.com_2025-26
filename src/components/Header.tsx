import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  // { to: '/', label: 'Home' }, // Home is usually just the logo
  { to: '/selected-works', label: 'Selected works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
    // Don't navigate if clicking the same route
    if (location.pathname === to) {
      e.preventDefault();
      return;
    }

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
          {navItems.map((item) => (
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

      </div>
    </header>
  );
}