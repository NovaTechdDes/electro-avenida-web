"use client";

import { useState } from "react";
import { Swiper as SwiperObjet } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./slideShow.css";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  descripcion: string;
  className?: string;
}

export const ProductSlideShow = ({ images, descripcion, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjet>();

  return (
    <div className={`flex flex-col ${className}`}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`${image}`}
              alt={descripcion}
              width={1024}
              height={800}
              className="rounded-lg object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`${image}`}
              alt={descripcion}
              width={300}
              height={300}
              className="rounded-lg object-fill mt-5"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
