import { getProductsByCategory } from '@/src/actions';
import { Pagination, ProductCard } from '@/src/components';
import { BuscadorProducto } from '@/src/components/products/BuscadorProducto';

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    page: string;
    limit: string;
    search: string;
  };
}

const CategoriaSlugPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { page, limit, search } = await searchParams;

  const { ok, products, totalPages } = await getProductsByCategory(slug, Number(page), Number(limit), search);

  if (!ok) {
    return;
  }

  return (
    <div className="min-h-[90vh] pt-25 bg-[#171717]">
      <h1 className="text-5xl font-bold text-center text-white">Todos los Productos</h1>
      <p className="text-center text-yellow-500 pt-5">Explora nuesto catalogo completo de materiales electricos</p>

      <BuscadorProducto />

      <div className="mt-5 px-5 pb-10 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((producto) => (
          <ProductCard key={producto._id} product={producto} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default CategoriaSlugPage;
