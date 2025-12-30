import { products } from "@/src/seed/products";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FiMessageCircle, FiPhone } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

interface Props {
  params: {
    id: string;
  };
}
const ProductoId = async ({ params }: Props) => {
  const { id } = await params;

  const product = products.find((product) => product.id === id);
  return (
    <section className="mt-25 text-black p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border flex justify-center items-center w-fit border-gray-400 rounded-lg">
          <Image
            src={product?.imagenes[0] || ""}
            alt={product?.nombre || ""}
            width={450}
            height={450}
            className="w-auto h-auto object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-yellow-600 font-semibold text-xl">
            {product?.categoria}
          </p>
          <h1 className="text-5xl font-semibold">{product?.nombre}</h1>
          <p className="text-gray-500">{product?.descripcion}</p>

          <div className="border p-4 border-gray-300 rounded-lg my-4">
            <p className="text-xl font-semibold my-3">Caracterisiticas</p>
            {product?.datos?.map((dato) => (
              <p key={dato} className="flex items-center mb-1 gap-2">
                <IoMdCheckmarkCircleOutline
                  className="text-yellow-600"
                  size={20}
                />
                {dato}
              </p>
            ))}
          </div>

          <button className="bg-yellow-600 text-black border w-full justify-center mb-2 mx-auto cursor-pointer border-yellow-600 p-3 rounded-lg flex items-center gap-2 hover:bg-yellow-500 transition-all">
            <FiMessageCircle />
            Solicitar Cotizacion
          </button>

          <div className="flex gap-4 justify-center">
            <button className="flex text-sm items-center w-[45%] justify-center gap-2 border border-gray-400 px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-black transition-all">
              <FiPhone />
              Llamar
            </button>
            <button className="flex text-sm items-center w-[45%] justify-center gap-2 border border-gray-400 px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-black transition-all">
              <MdMailOutline />
              Email
            </button>
          </div>

          <span className="text-sm text-gray-600">
            ¿Tienes dudas sobre este producto? Contáctanos para asesoría técnica
            personalizada y precios especiales por volumen.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductoId;
