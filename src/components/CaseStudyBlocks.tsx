import type { ReactNode } from 'react';

// --- A. Standard Text Section ---
// Handles the spacing and max-width automatically
export function CSSection({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <section className={`cs-section ${className}`}>
      <div className="container cs-text-container">
        {children}
      </div>
    </section>
  );
}

// --- B. Full Width Image ---
// For those big, beautiful screenshots
export function CSImage({ src, alt, caption }: { src: string, alt: string, caption?: string }) {
  return (
    <figure className="cs-image-block full-bleed-section">
       <div className="container">
         <img src={src} alt={alt} className="cs-img-responsive shadow-lg" />
         {caption && <figcaption>{caption}</figcaption>}
       </div>
    </figure>
  );
}

// --- C. The Purple Callout / Impact Box ---
// That rounded purple box in your mock
export function CSCallout({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="cs-callout">
      <h3>{title}</h3>
      <div className="cs-callout-body">
        {children}
      </div>
    </div>
  );
}

// --- D. Two Column Grid ---
// For "The Problem" vs "The Goal" side-by-side
export function CSTwoColumn({ left, right }: { left: ReactNode, right: ReactNode }) {
  return (
    <div className="cs-two-col container">
      <div className="col">{left}</div>
      <div className="col">{right}</div>
    </div>
  );
}