import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import QuoteCard from './QuoteCard';
import type { QuoteCardProps } from './QuoteCard';

const quotesData: QuoteCardProps[] = [
  {
    quote:
      'Diane is an outstanding designer. I had the pleasure of working with her on incredibly complex products in Google Cloud and through her exceptional design leadership and craft, I watched her align stakeholders and leaders across the organization, completely revamp the product roadmap and strategy through her leadership in design workshops and processes, and make the complex look easy with her intuitive design flows and exceptional design craft.',
    author: 'Kristen Kogachi',
    role: 'UX Design Manager, Google Cloud',
    avatarUrl: 'src/images/Kristen.png',
  },
  {
    quote:
      "Diane is one of the most passionate designers I've ever met. She's an excellent problem solver and a huge customer advocate. She's never afraid to ask the tough questions and think outside the box.",
    author: 'Derek Chen',
    role: 'Design Leader, Hewlett Packard Enterprise',
    avatarUrl: 'src/images/Derek.png',
  },
  {
    quote:
      'Diane has uplifted every aspect of the DSPM experience.',
    author: 'Deepavali Bhagwat',
    role: 'Senior Engineering Manager, Google Cloud',
    avatarUrl: 'src/images/Deepavali.png',
  },
 
  {
    quote:
      'Diane leads with mindfulness and empathy at the core...thorough is an understatement of her work.',
    author: 'Annie Steenson',
    role: 'Senior AI/ML Engineering Program Manager, Apple',
    avatarUrl: 'src/images/Annie.png',
  },
];

// 5. Build the component (NOW SIMPLIFIED)
export default function QuoteCarousel() {
  // We ONLY return the Swiper element.
  // The section/header will be handled by home.tsx
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={2}
      breakpoints={{
        // When window width is >= 500px, show 2 slides
        500: {
          slidesPerView: 2,
        },
        // When window width is < 500px, show 1 slide
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {quotesData.map((quote, index) => (
        <SwiperSlide key={index}>
          <QuoteCard {...quote} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}