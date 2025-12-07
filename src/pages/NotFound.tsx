import AnimateOnScroll from '../components/AnimateOnScroll';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-section" className="full-bleed-section">
      <div className="container" style={{ 
        display: 'flex', 
        backgroundColor: 'var(--color-gradient-secondary)',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '8rem 2rem',
      }}>
        
        <img src="src/images/Atlas_404.png" alt="Atlas the huksy" />
        <AnimateOnScroll>
          <h1>
            Ruh roh!
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <h2 style={{ fontSize: 'var(--font-size-display-h3)', marginBottom: '1rem' }}>
Looks like Atlas ate this page.          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p style={{ 
            color: 'var(--color-content-tertiary)',
            maxWidth: '60ch',
            marginBottom: '3rem'
          }}>
           Sorry about that! Try going back to the <a className="text-link" href="/">home page</a> or <a className="text-link" href="/contact">contact me</a> to let me know what you were looking for.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Link to="/" className="button-primary">
            Go Home
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

