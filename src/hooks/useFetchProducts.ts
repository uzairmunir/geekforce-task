'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/utilts/api';
import { Product, ProductsResponse } from '@/types/product';

interface UseProductsOptions {
  initialSearch?: string;
  initialPage?: number;
  limit?: number;
}

export const useFetchProducts = ({ initialSearch = '', initialPage = 1, limit = 10 }: UseProductsOptions = {}) => {
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { data, isLoading, isError, error } = useQuery<ProductsResponse>({
    queryKey: ['products', search, page, limit],
    queryFn: () => fetchProducts(page, limit, search)
  });

  useEffect(() => {
    if (data?.products) {
      if (page === 1) {
        setAllProducts(data.products);
      } else {
        setAllProducts(prev => [...prev, ...data.products]);
      }
    }
  }, [data, page, search]);

  const loadMore = () => {
    if (data && allProducts.length < data.total) {
      setPage(prev => prev + 1);
    }
  };

  return {
    products: allProducts,
    isLoading,
    isError,
    error,
    search,
    setSearch,
    loadMore,
    hasMore: data ? allProducts.length < data.total : false
  };
};
