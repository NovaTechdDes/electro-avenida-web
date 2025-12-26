import { ProductCard } from "@/src/components";
import { BuscadorProducto } from "@/src/components/products/BuscadorProducto";
import { products } from "@/src/seed/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos Electro Avenida",
  description:
    "Todos los productos electricos de calidad para instalaciones domiciliarias, comerciales e industriales y para la decoracion de interiores.",
};

const productos = products;

const Productos = () => {
  return (
    <div className="min-h-[90vh] pt-25 bg-[#171717]">
      <h1 className="text-5xl font-bold text-center text-white">
        Todos los Productos
      </h1>
      <p className="text-center text-yellow-500 pt-5">
        Explora nuesto catalogo completo de materiales electricos
      </p>

      <BuscadorProducto />

      <div className="mt-5 px-5 pb-10 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productos.map((producto) => (
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
