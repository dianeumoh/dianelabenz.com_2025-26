import { Children, type ReactNode } from 'react';

// --- A. Standard Text Section ---
// Handles the spacing and max-width automatically
export function CSSection({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <section className={`cs-section ${className}`}>
      <div className="cs-text-container">
        {children}
      </div>
    </section>
  );
}

// --- B. Full Width Image ---
// For those big, beautiful screenshots
export function CSImage({ src, alt, caption, noShadow = false }: { src: string, alt: string, caption?: string, noShadow?: boolean }) {
  return (
    <figure className="cs-image-block full-bleed-section">
       <div className="container">
         <img src={src} alt={alt} className={`cs-img-responsive ${noShadow ? 'cs-img-no-shadow' : 'shadow-lg'}`} />
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

// --- E. Image Group ---
// For multiple images in a row

// Define a simple type for the images in the group
type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
  annotations?: string[];
  noShadow?: boolean;
};

// --- BLOCK 5: Image Group (1, 2, or 3 items) ---
export function CSImageGroup({ 
  images, 
  caption,
  backgroundColor='var(--color-gradient-secondary)'
}: { 
  images: ImageItem[], 
  caption?: string,
  backgroundColor?: string

}) {
  return (
    <figure className="cs-image-group-section full-bleed-section" style={{ background: backgroundColor }}>
       <div className="cs-image-container">
         
         <div className="cs-image-grid" data-count={images.length}>
           {images.map((img, index) => (
             <div key={index} className="cs-grid-item">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={`cs-img-responsive ${img.noShadow ? 'cs-img-no-shadow' : 'shadow-lg'}`}
                />
                {/* 3. Render the specific caption if it exists */}
                {img.caption && (
                  <span className="cs-item-caption">{img.caption}</span>
                )}
                {/* 4. Render Annotations (Lighter/Smaller) */}
                {/* We map over the array to create a new line for each one */}
                {img.annotations && img.annotations.map((note, noteIndex) => (
                  <span key={noteIndex} className="cs-item-annotation">
                    {note}
                  </span>
                ))}
             </div>
           ))}
         </div>

         {/* 5. Render the Global caption if it exists */}
         {caption && <figcaption>{caption}</figcaption>}
       </div>
    </figure>
  );
}

// --- BLOCK 6: The Grid Container ---
// Automatically handles responsive columns
export function CSGrid({ children }: { children: ReactNode }) {
  const count = Children.count(children);
  return (
    <section className="cs-section-grid">
      <div className="container">
        {/* Pass the count to a data attribute */}
        <div className="cs-grid" data-count={count}>
          {children}
        </div>
      </div>
    </section>
  );
}

// --- BLOCK 7: The Info Card ---
// Supports 'standard' (clean) and 'sketchy' (paper) variants
type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode; // Can be an <img>, an SVG, or an Emoji
  variant?: 'standard' | 'sketchy';
};

export function CSCard({ title, description, icon, variant = 'standard' }: CardProps) {
  return (
    <div className={`cs-card ${variant}`}>
      {icon && <div className="cs-card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type QuoteProps = {
  children: ReactNode;
  source?: string;
  variant?: 'glass' | 'accent' | 'editorial';
};

export function CSBlockquote({ children, source, variant = 'accent' }: QuoteProps) {
  return (
    <figure className={`cs-blockquote ${variant} full-bleed-section`}>
      <div className="container cs-text-container">
        <blockquote>
          {children}
        </blockquote>
        {source && <figcaption>&mdash; {source}</figcaption>}
      </div>
    </figure>
  );
}

// --- BLOCK 9: Audio Button (Updated) ---
export function CSAudioButton({ 
  audioUrl, 
  text = "Listen to case study" // Default fallback text
}: { 
  audioUrl: string;
  text?: string; // Optional string prop
}) {
  return (
    <section className="cs-audio-block">
      <div className="container cs-audio-button-center">
        <a 
          href={audioUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cs-audio-button"
        >
          {/* You can swap this emoji for an SVG icon component if you prefer */}
          <span role="img" aria-label="Headphones" className="cs-button-icon">🎧</span>
          
          {/* This renders whatever text you pass in */}
          {text}
        </a>
      </div>
    </section>
  );
}