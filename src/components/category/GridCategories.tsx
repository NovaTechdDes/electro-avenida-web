import { getCategories } from "@/src/actions/category-actions";
import { CategoryCard } from "./CategoryCard";
import { iconsMaps } from "@/src/seed/icons";
import { unstable_noStore as noStore } from "next/cache";

export const GridCategories = async () => {
  noStore();

  const { categories, ok } = await getCategories();

  if (!ok) {
    return;
  }

  return (
    <div className="flex justify-center flex-col items-center dark:bg-[#171717] py-5 border-t border-gray-500 dark:border-gray-500">
      <h2 className="text-2xl font-bold text-black dark:text-white ">
        Nuestas Categorias
      </h2>
      <p className="text-slate-500">
        Explora nuesta amplia gama de productos electricos organizados por
        categoria
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center mt-5">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            nombre={category.nombre}
            descripcion={category.descripcion}
            icon={category.img as keyof typeof iconsMaps}
          />
        ))}
      </div>
    </div>
  );
};
