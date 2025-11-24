import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Assuming you have this

export default function Layout() {
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