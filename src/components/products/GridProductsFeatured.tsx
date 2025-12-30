import { ProductCard } from "../product/ProductCard";
import { getProducts } from "@/src/actions";

export const GridProductsFeatured = async () => {
  const { products } = await getProducts();

  return (
    <div className="flex justify-center items-center flex-col pt-20 border-t border-gray-500 dark:border-gray-500 pb-15 dark:bg-[#171717]">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        Productos Destacados
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Descubre nuestra seleccion de productos electricos de las mejores marcas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {products.map((producto) => (
          <ProductCard key={producto._id} product={producto} />
        ))}
      </div>
    </div>
  );
};
