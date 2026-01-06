import { getProducts } from '@/src/actions';
import { Pagination } from '@/src/components';
import { ProductosClient } from '@/src/components/products/ProductosClient';
import Link from 'next/link';
import { IoIosAdd } from 'react-icons/io';

interface Props {
  searchParams: {
    page: string;
    limit: string;
    search: string;
  };
}

const ProductsPage = async ({ searchParams }: Props) => {
  const page = Number((await searchParams).page) || 1;
  const limit = Number((await searchParams).limit) || 24;
  const search = (await searchParams).search || '';

  const { products, totalPages } = await getProducts(page, limit, search);

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Dashboard Productos</h1>
        <Link href="/admin/products/new" className="bg-yellow-600 text-white px-5 py-2 rounded-md flex gap-2 items-center cursor-pointer hover:bg-yellow-700 transition-colors">
          <IoIosAdd size={20} /> Agregar Producto
        </Link>
      </div>

      <ProductosClient products={products} isEditable />

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductsPage;
