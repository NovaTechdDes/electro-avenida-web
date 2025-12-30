"use client";

import Image from "next/image";
import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";

import "./slideShow.css";
import { IoMdArrowForward } from "react-icons/io";

const slides = [
  {
    image: "/imagenes/swiper1.jpg",
    title: "Materiales Eléctricos",
    span: "de Calidad Superior ",
    subtitle:
      "Tu aliado confiable en soluciones eléctricas. Amplio catálogo de productos para profesionales",
    url: "/productos",
    texto: "Ver Productos",
  },
  {
    image: "/imagenes/swiper2.jpg",
    title: "Iluminación LED ",
    span: "Eficiente y Duradera",
    subtitle: "Eficiencia y diseño moderno",
    url: "/categoria/Iluminacion",
    texto: "Ver Iluminacion",
  },
  {
    image: "/imagenes/swiper3.jpg",
    title: "Cables y Conductores Para ",
    span: "toda la instalacion",
    subtitle: "Cableado de calidad para tus proyectos con Sello IRAM",
    url: "/categoria/Cables",
    texto: "Ver Cables",
  },
];

export const Carousel = () => {
  return (
    <section className="mt-[55px] h-[700px] pb-10 w-full">
      <Swiper
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="w-full h-full relative">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1024}
                height={800}
                className="rounded-lg object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-black/50">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                  <h2 className="text-6xl text-white w-[50%] font-bold">
                    {slide.title}
                    <span className="text-yellow-500">{slide.span}</span>
                  </h2>
                  <p className="text-2xl mt-2 text-gray-300 font-semibold">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-5 top-55">
                  <Link
                    href={slide.url}
                    className="bg-yellow-500 rounded-lg p-2 text-black flex items-center gap-2 cursor-pointer hover:bg-yellow-600 transition-all"
                  >
                    {slide.texto ?? "Mas Info"}
                    <IoMdArrowForward />
                  </Link>
                  <Link
                    className="text-white border rounded-lg p-2 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all"
                    href="#contacto"
                  >
                    Contactar Ahora
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
