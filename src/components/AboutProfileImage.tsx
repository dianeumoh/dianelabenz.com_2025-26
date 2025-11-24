import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

const profileImages = [
  { src: 'src/images/Diane_About_1.jpg', alt: 'Diane Labenz' },
  { src: 'src/images/Diane_About_2.jpeg', alt: 'Diane Labenz' },
  { src: 'src/images/Diane_About_3.jpeg', alt: 'Diane Labenz' },
];

export default function AboutProfileImage() {
  return (
    <div className="about-profile-swiper-container">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="about-profile-swiper"
      >
        {profileImages.map((image, index) => (
          <SwiperSlide key={index} className="about-profile-slide">
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}