import { getCategories } from "@/src/actions";
import { CategoryCard } from "@/src/components";

const CategoryPage = async () => {
  const { ok, categories } = await getCategories();

  if (!ok) {
    return;
  }

  return (
    <div className="min-h-[90vh] pt-25 border-b border-gray-500">
      <h1 className="text-5xl font-bold text-center text-white">
        Todoas Nuestras Categorias
      </h1>
      <p className="text-center text-yellow-500 pt-5">
        Explora las distintas categorias de nuestros productos con la que
        trabajamos
      </p>

      <div className="flex justify-center mt-5 px-5">
        <input
          type="text"
          className="w-full border border-gray-500 p-2 dark:text-white rounded-lg mx-5"
          placeholder="Buscar categoria"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center mt-5">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            nombre={category.nombre}
            descripcion={category.descripcion}
            icon={category.img}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
