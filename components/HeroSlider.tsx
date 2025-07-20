"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      type: "image",
      src: "/slides/slide1.jpg",
    },
    {
      type: "video",
      src: "/slides/slide2.mp4",
    },
    {
      type: "image",
      src: "/slides/slide3.jpg",
    },
  ];

  return (
    <section className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-light">
                    Illuminate with Spetraluce
                  </h1>
                  <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
                    Precision lighting, innovative design, Italian excellence.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
