import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to trigger this ONCE
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Stop watching
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Disconnect observer on cleanup
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}