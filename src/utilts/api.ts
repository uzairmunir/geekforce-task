import axios from 'axios';
import { ProductsResponse } from '@/types/product';

export const fetchProducts = async (page: number, limit: number, search: string = ''): Promise<ProductsResponse> => {
  const skip = (page - 1) * limit;
  const response = await axios.get<ProductsResponse>('https://dummyjson.com/products/search', {
    params: {
      q: search,
      limit,
      skip
    }
  });

  return response.data;
};
