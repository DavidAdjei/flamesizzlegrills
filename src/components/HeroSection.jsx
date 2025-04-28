import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const dishes = [
  {
    image: '/images/dish1.jpg', // replace with your actual image paths
    title: 'Jollof with Charcoal Grilled Chicken',
  },
  {
    image: '/images/dish2.jpg',
    title: 'Labadi Style Loaded Yam',
  },
  {
    image: '/images/dish3.jpg',
    title: 'Potato Chips with Grilled Pork',
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={dish.image}
                alt={dish.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{dish.title}</h1>
                <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
