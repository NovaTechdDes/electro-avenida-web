import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const list = [
  "Mas de 15 años de experiencia en el mercado",
  "Productos d emarcas reconocidas y certificadas",
  "Asesoria tecnica especializada sin costo",
  "Entrega rapida en toda la region",
  "Precios competiitivos para mayoristas",
  "Garantia en todos nuestos productos",
];

export const About = () => {
  return (
    <section
      id="nosotros"
      className="bg-[#171717] py-10 items-center px-10 flex flex-col md:flex-row"
    >
      {/*Texto*/}
      <div>
        <h2 className="text-2xl font-bold">
          ¿Por Que Elegir{" "}
          <span className="text-yellow-500">Electro Avenida</span>?
        </h2>
        <p className="w-[700px] mt-5">
          Somos tu socio confiable en materiales electricos. Ofrecemos
          soluciones integrales para electrisistas profesionas, contratistas y
          proyectos residentes
        </p>

        <ul className="mt-5 space-y-3">
          {list.map((item, index) => (
            <li key={index} className="flex text-sm gap-2">
              <IoMdCheckmarkCircleOutline
                size={20}
                className="text-yellow-500"
              />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/*Imagen*/}
      <div className="flex justify-center">
        <Image
          src="/imagenes/nosotros.jpg"
          alt="EA"
          width={500}
          height={500}
          className="w-[800px] h-[600px] rounded-lg"
        />
      </div>
    </section>
  );
};
