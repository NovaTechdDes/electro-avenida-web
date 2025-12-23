import { products } from "@/src/seed/products";
import { ProductCard } from "../product/ProductCard";

const productos = products;

export const GridProductsFeatured = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-50 pb-15">
      <h2 className="text-2xl font-bold text-black">Productos Destacados</h2>
      <p className="text-gray-500">
        Descubre nuestra seleccion de productos electricos de las mejores marcas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {productos.map((producto) => (
          <ProductCard key={producto.id} product={producto} />
        ))}
      </div>
    </div>
  );
};
