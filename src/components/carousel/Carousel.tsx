"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const Carousel = () => {
  return (
    <div className="mt-[55px] bg-[#171717] min-h-[700px] pb-10 w-full flex justify-center">
      <div className="flex  items-center w-[50%] pb-5 pt-20 flex-col">
        <h1 className="text-5xl p-5 text-center font-bold">
          Materiales Electricos de{" "}
          <span className="text-yellow-500">Calidad Superior</span>
        </h1>

        <p className="text-lg p-5 text-center text-gray-200">
          Tu aliado confiable en soluciones electricas. Amplio catalogo de
          productos para profesionales y proyectos residenciales.
        </p>

        <div className="flex gap-5">
          <button className="flex items-center gap-2 bg-yellow-500 text-black rounded-lg p-2 font-semibold hover:bg-yellow-600 cursor-pointer">
            Ver Catalogo
            <BsArrowRight />
          </button>
          <button className="bg-transparent border rounded-lg border-white text-white p-2 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all">
            <Link href="#contacto">Contactar Ahora</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /*

  
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideShow.css";

  import { Swiper as SwiperObjet } from "swiper";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
  import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjet>();
  
        <Swiper
        className="mySwiper"
        spaceBetween={10}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {["1.jpg", "2.jpg", "3.jpg"].map((img) => (
          <SwiperSlide key={img} className="relative">
            <Image
              height={500}
              width={500}
              src={`/imagenes/${img}`}
              alt=""
              className="object-cover w-full h-150"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

  */
}
