import { getProducts } from '@/src/actions';
import { Pagination } from '@/src/components';
import { ProductosClient } from '@/src/components/products/ProductosClient';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos Electro Avenida',
  description: 'Todos los productos electricos de calidad para instalaciones domiciliarias, comerciales e industriales y para la decoracion de interiores.',
};

interface Props {
  searchParams: {
    page: string;
    limit: string;
    search: string;
  };
}

const Productos = async ({ searchParams }: Props) => {
  const page = Number((await searchParams).page) || 1;
  const limit = Number((await searchParams).limit) || 10;
  const search = (await searchParams).search || '';

  const { products, totalPages } = await getProducts(page, limit, search);

  return (
    <div className="min-h-[90vh] pt-25 border-b border-gray-500">
      <h1 className="text-5xl font-bold text-center text-white">Todos los Productos</h1>
      <p className="text-center text-yellow-500 pt-5">Explora nuesto catalogo completo de materiales electricos</p>

      <ProductosClient products={products} />

      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Productos;
