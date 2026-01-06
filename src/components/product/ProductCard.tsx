'use client';

import { Product } from '@/src/interface';
import Image from 'next/image';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { MdOutlineDeleteOutline } from 'react-icons/md';

interface Props {
  product: Product;
  isEditable?: boolean;
}

export const ProductCard = ({ product, isEditable = false }: Props) => {
  const { marca, descripcion, rubro, imagenes, _id } = product;

  return (
    <div className="border border-gray-400 rounded-lg justify-center flex flex-col cursor-pointer ">
      <div className="rounded-t-lg w-full ">
        {imagenes?.length > 0 && imagenes?.[0] !== '' && (
          <Image src={imagenes?.[0] ?? ''} alt={descripcion} width={200} height={200} className="w-full rounded-t-lg h-70 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
        )}
      </div>

      <Link href={`/producto/${product._id}`} className="bg-white dark:bg-[#171717] hover:bg-gray-900 transition-all">
        <div className="p-4 flex flex-col">
          <p className="text-yellow-500 font-semibold my-2">{_id}</p>
          <h3 className="font-semibold text-xl text-black dark:text-white">{descripcion}</h3>
          <span className="text-gray-300 self-end border w-fit border-yellow-500 rounded-lg px-2 py-1 dark:text-gray-300 text-sm my-1">{marca}</span>
        </div>

        <div className="p-4 flex justify-center">
          {!isEditable ? (
            <button className="text-yellow-500 w-full justify-center bg-white px-4 py-2 rounded-lg flex border border-yellow-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-yellow-500 transition-all mt-5 dark:bg-transparent dark:text-yellow-500">
              <IoChatbubbleOutline />
              Solicitar Cotizacion
            </button>
          ) : (
            <div className="flex gap-5 w-full">
              <button className="text-yellow-500 w-full justify-center bg-white px-4 py-2 rounded-lg flex border border-yellow-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-yellow-500 transition-all mt-5 dark:bg-transparent dark:text-yellow-500">
                <FiEdit />
                Editar
              </button>
              <button className="text-red-500 w-full justify-center bg-white px-4 py-2 rounded-lg flex border border-red-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-red-500 transition-all mt-5 dark:bg-transparent dark:text-red-500">
                <MdOutlineDeleteOutline />
                Eliminar
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
