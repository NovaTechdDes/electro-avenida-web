import { Product } from "@/src/interface";
import Image from "next/image";
import { IoChatbubbleOutline } from "react-icons/io5";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { nombre, descripcion, categoria, imagen } = product;
  return (
    <div className="border border-gray-400 p-4 rounded-lg">
      <Image src={imagen} alt={nombre} width={200} height={200} />

      <div>
        <p className="text-yellow-500 font-bold">{categoria}</p>
        <h3 className="font-semibold text-xl text-black">{nombre}</h3>
        <p className="text-gray-500">{descripcion}</p>
      </div>

      <div>
        <button className="text-yellow-500 bg-white px-4 py-2 rounded-lg flex border border-yellow-500 gap-2 items-center cursor-pointer hover:text-black hover:bg-yellow-500 transition-all mt-5">
          <IoChatbubbleOutline />
          Solicitar Cotizacion
        </button>
      </div>
    </div>
  );
};
