import { Children, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

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



// src/components/case-study/CaseStudyBlocks.tsx
import { useState, useRef, useEffect } from 'react';

// --- BLOCK 9: Audio Player (Interactive) ---
export function CSAudioButton({ 
  audioUrl, 
  text = "Listen" 
}: { 
  audioUrl: string; 
  text?: string; 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // New state to track "active" mode
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.preload = 'metadata'; 
    audioRef.current = audio;

    const setAudioDuration = () => {
        if(isFinite(audio.duration)) {
            setDuration(audio.duration);
        }
    };

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setHasStarted(false); // Reset to "Button" mode when done
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', setAudioDuration);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  // --- CONTROLS ---

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setHasStarted(true); // Switch to "Player" layout
    }
    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += seconds;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // --- HELPERS ---
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className="cs-audio-block">
      <div className="container cs-audio-button-center">
        
        {/* We use a div container that changes classes based on state */}
        <div className={`cs-audio-player-pill ${hasStarted ? 'active-player' : ''}`}>
          
          {/* 1. PLAY/PAUSE BUTTON */}
          <button 
            onClick={toggleAudio}
            className="cs-player-control-btn main-play-btn"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? '⏸' : <FontAwesomeIcon icon={faCirclePlay} />}
          </button>

          {/* 2. CONDITIONAL CONTENT */}
          {!hasStarted ? (
            // STATE A: Idle (Text Label)
            <span className="cs-audio-label" onClick={toggleAudio}>
              {text} • {formatTime(duration || 0)} min
            </span>
          ) : (
            // STATE B: Active (Controls & Scrubber)
            <div className="cs-player-controls">
              
              {/* Rewind 15s */}
              <button onClick={() => skipTime(-15)} className="cs-player-control-btn small">
                ↺ 15s
              </button>

              {/* Progress Bar */}
              <div className="cs-player-scrubber">
                <span className="cs-time-current">{formatTime(currentTime)}</span>
                <input 
                  type="range" 
                  min={0} 
                  max={duration} 
                  value={currentTime} 
                  onChange={handleSeek}
                  className="cs-seek-slider"
                  style={{
                    // Dynamic CSS variable for the progress fill
                    '--seek-before-width': `${(currentTime / duration) * 100}%`
                  } as React.CSSProperties}
                />
                <span className="cs-time-total">{formatTime(duration)} min</span>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// src/components/case-study/CaseStudyBlocks.tsx

// --- BLOCK 10: Browser Frame Wrapper ---
export function CSBrowserFrame({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`cs-browser-frame ${className}`}>
      
      
      {/* The Image Content */}
      <div className="cs-browser-content">
        {children}
      </div>
    </div>
  );
}