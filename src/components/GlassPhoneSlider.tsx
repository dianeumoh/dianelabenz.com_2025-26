import { useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

interface GlassPhoneSliderProps {
  slides: string[];
}

export function GlassPhoneSlider({ slides }: GlassPhoneSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  
  // 1. New State for the Hint
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // 2. Hide the hint automatically after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 4500); // 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // 3. Helper to hide immediately on interaction
  const dismissHint = () => setShowSwipeHint(false);

  return (
    <div 
      className="glass-phone-slider-container"
      // Dismiss hint if user taps/swipes anywhere in the container
      onTouchStart={dismissHint}
      onClick={dismissHint}
    >
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="phone-swiper"
      >
        {slides.map((slideUrl, index) => (
          <SwiperSlide key={index}>
            <div className="phone-slide-frame">
               <img src={slideUrl} alt={`App Screen ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- DESKTOP NAVIGATION ARROWS (Hidden on Mobile) --- */}
      <button 
        className="custom-swiper-prev" 
        aria-label="Previous slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 22.5L2 12L12.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button 
        className="custom-swiper-next" 
        aria-label="Next slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 22.5L12 12L1.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* --- MOBILE SWIPE HINT (New) --- */}
      {/* Shows only if state is true AND we are on mobile (via CSS media query) */}
      <div className={`swipe-hint-overlay ${showSwipeHint ? 'visible' : ''}`}>
        <div className="swipe-hand">
            {/* Simple Hand Icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
                <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a.9.9 0 0 1 0-1.27l2.49-2.49a.9.9 0 0 1 1.27 0l2.83 2.83"/>
            </svg>
        </div>
      </div>

    </div>
  );
}