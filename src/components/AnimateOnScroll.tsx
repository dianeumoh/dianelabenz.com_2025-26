import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type Props = {
  children: ReactNode;
  className?: string; // To pass other classes
};

export default function AnimateOnScroll({ children, className = '' }: Props) {
  // 1. Get the ref and the "is-visible" boolean from our hook
  const [ref, isVisible] = useIntersectionObserver();

  return (
    // 2. Attach the ref to this div
    <div
      ref={ref}
      // 3. Add our CSS classes!
      className={`
        fade-in-section
        ${isVisible ? 'is-visible' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}