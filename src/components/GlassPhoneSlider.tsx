import React, { useState } from 'react';
// 1. Import the Type for TypeScript (optional, but good practice)
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

interface GlassPhoneSliderProps {
  slides: string[];
}

export function GlassPhoneSlider({ slides }: GlassPhoneSliderProps) {
  // 2. Create state to hold the Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="glass-phone-slider-container">
      <Swiper
        // 3. Capture the swiper instance when it initializes
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
        // We removed the 'navigation' prop here because we are handling it manually below
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

      {/* --- CUSTOM NAVIGATION BUTTONS --- */}
      
      {/* 4. Previous Button with Direct Click Handler */}
      <button 
        className="custom-swiper-prev" 
        aria-label="Previous slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 22.5L2 12L12.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* 5. Next Button with Direct Click Handler */}
      <button 
        className="custom-swiper-next" 
        aria-label="Next slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 22.5L12 12L1.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </div>
  );
}