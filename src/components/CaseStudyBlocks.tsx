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

// --- E. Image Group ---
// For multiple images in a row

// Define a simple type for the images in the group
type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

// --- BLOCK 5: Image Group (1, 2, or 3 items) ---
export function CSImageGroup({ 
  images, 
  caption 
}: { 
  images: ImageItem[], 
  caption?: string 
}) {
  return (
    <figure className="cs-image-group-section full-bleed-section">
       <div className="cs-image-container">
         
         <div className="cs-image-grid" data-count={images.length}>
           {images.map((img, index) => (
             <div key={index} className="cs-grid-item">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="cs-img-responsive shadow-lg" 
                />
                {/* 3. Render the specific caption if it exists */}
                {img.caption && (
                  <span className="cs-item-caption">{img.caption}</span>
                )}
             </div>
           ))}
         </div>

         {/* 4. Render the Global caption if it exists */}
         {caption && <figcaption>{caption}</figcaption>}
       </div>
    </figure>
  );
}

// --- BLOCK 6: The Grid Container ---
// Automatically handles responsive columns
export function CSGrid({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <div className="cs-grid">
        {children}
      </div>
    </div>
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