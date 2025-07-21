"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";

export default function HeroSlider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      type: "video",
      src: "/vhome.mp4",
    },
    {
      type: "image",
      src: "/home1.jpg",
    },
    {
      type: "image",
      src: "/spetralu.png",
    },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    const handleSlideChange = () => {
      const currentIndex = swiper.activeIndex;
      const currentSlide = slides[currentIndex];

      if (currentSlide.type === "video") {
        swiper.autoplay.stop(); // stop auto-play

        const video = document.querySelector(
          `video[data-index="${currentIndex}"]`
        );
        if (video) {
          video.currentTime = 0;
          video.play();
          video.onended = () => {
            swiper.slideNext();
            swiper.autoplay.start(); // resume autoplay
          };
        }
      }
    };

    swiper.on("slideChange", handleSlideChange);

    // Start autoplay again on first load if image
    handleSlideChange();

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                  data-index={index}
                  src={slide.src}
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-6">
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
