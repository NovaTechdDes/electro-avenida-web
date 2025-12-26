"use client";

import { Product } from "@/src/interface";
import { useProductsStore } from "@/src/store";
import Image from "next/image";
import { IoChatbubbleOutline } from "react-icons/io5";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { nombre, descripcion, marca, categoria, imagenes } = product;
  const { search } = useProductsStore();

  if (
    !nombre.toLowerCase().includes(search.toLowerCase()) &&
    !marca.toLowerCase().includes(search.toLowerCase()) &&
    !categoria.toLowerCase().includes(search.toLowerCase())
  )
    return null;

  return (
    <div className="border border-gray-400 rounded-lg justify-center flex flex-col ">
      <div className="rounded-t-lg w-full ">
        <Image
          src={imagenes[0]}
          alt={nombre}
          width={200}
          height={200}
          className="w-full rounded-t-lg h-70 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="p-4 bg-white dark:bg-[#171717]">
        <p className="text-yellow-500 font-semibold">{categoria}</p>
        <h3 className="font-semibold text-xl text-black dark:text-white">
          {nombre}
        </h3>
        <p className="text-gray-300 dark:text-gray-300 text-sm ">
          {descripcion}
        </p>
      </div>

      <div className="p-4 flex justify-center dark:bg-[#171717]">
        <button className="text-yellow-500 w-full justify-center bg-white px-4 py-2 rounded-lg flex border border-yellow-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-yellow-500 transition-all mt-5 dark:bg-transparent dark:text-yellow-500">
          <IoChatbubbleOutline />
          Solicitar Cotizacion
        </button>
      </div>
    </div>
  );
};
