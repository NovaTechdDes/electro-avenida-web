'use client';

import { BuscadorProducto } from './BuscadorProducto';
import { Product } from '@/src/interface';
import { ProductCard } from '../product/ProductCard';

interface Props {
  products: Product[];
}

export const ProductosClient = ({ products = [] }: Props) => {
  return (
    <>
      <BuscadorProducto />

      <div className="mt-5 px-5 pb-10 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
