'use client';
import React from 'react';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { Product } from '@/types/product';
import EmptyState from './EmptyProductState';

interface Props {
  isLoading: boolean;
  products: Product[];
  loadMore: () => void;
  hasMore: boolean
}

const ProductList: React.FC<Props> = ({ isLoading, products, loadMore, hasMore }) => {

  if (!products?.length && !isLoading) {
    return <EmptyState />
  }
  return (
    <div className="py-8 md:py-16 px-4 xl:px-0 container mx-auto">
      <div className='flex items-center gap-4 justify-center'>
        <div className='w-[20px] h-[40px] rounded-md bg-red-500'></div>
        <h3 className='text-[16px] font-semibold text-red-500'>Our Products</h3>
      </div>
      <h1 className='text-center text-black font-semibold text-[24px] md:text-[30px] lg:text-[36px] my-4 lg:my-6'>Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, idx) => <ProductSkeleton key={idx} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      {hasMore && !isLoading && (
        <div className='flex items-center justify-center' onClick={loadMore}>
          <button className='h-[40px] md:h-[56px] w-[188px] rounded bg-red-500 text-white mt-6'>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
