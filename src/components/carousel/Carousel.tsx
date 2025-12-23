"use client";

import { Swiper as SwiperObjet } from "swiper";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjet>();
  return (
    <div className="hidden md:block">
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        <SwiperSlide>
          <Image src="/imagenes/1.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imagenes/2.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imagenes/3.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
