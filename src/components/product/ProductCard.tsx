"use client";

import { Product } from "@/src/interface";
import { useProductsStore } from "@/src/store";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { marca, descripcion, rubro } = product;
  const { search } = useProductsStore();

  if (
    !descripcion.toLowerCase().includes(search.toLowerCase()) &&
    !marca.toLowerCase().includes(search.toLowerCase())
  )
    return null;

  return (
    <div className="border border-gray-400 rounded-lg justify-center flex flex-col cursor-pointer ">
      <div className="rounded-t-lg w-full ">
        {/*<Image
          src={imagenes[0]}
          alt={nombre}
          width={200}
          height={200}
          className="w-full rounded-t-lg h-70 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />*/}
      </div>

      <Link
        href={`/producto/${product._id}`}
        className="bg-white dark:bg-[#171717] hover:bg-gray-900 transition-all"
      >
        <div className="p-4 ">
          <p className="text-yellow-500 font-semibold">{rubro}</p>
          <h3 className="font-semibold text-xl text-black dark:text-white">
            {descripcion}
          </h3>
          <p className="text-gray-300 dark:text-gray-300 text-sm ">{marca}</p>
        </div>

        <div className="p-4 flex justify-center">
          <button className="text-yellow-500 w-full justify-center bg-white px-4 py-2 rounded-lg flex border border-yellow-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-yellow-500 transition-all mt-5 dark:bg-transparent dark:text-yellow-500">
            <IoChatbubbleOutline />
            Solicitar Cotizacion
          </button>
        </div>
      </Link>
    </div>
  );
};
