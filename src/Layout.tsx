import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Assuming you have this

export default function Layout() {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    // Check if gtag is available (Google Analytics loaded)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-MLS09BERC9', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <>
      <Header />
      
      {/* This is where your page content (Home, About, etc.) renders */}
      <main>
        <Outlet />
      </main>
      
      <Footer />
      
      {/* This resets the scroll position to the top on navigation */}
      <ScrollRestoration />
    </>
  );
}