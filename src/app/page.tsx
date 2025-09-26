'use client'
import Navbar from '@/components/Navbar'
import ProductList from '@/components/ProductList';
import TopBar from '@/components/TopBar'
import { useFetchProducts } from '@/hooks/useFetchProducts';

const HomePage = () => {
  const {
    products,
    isLoading,
    isError,
    error,
    search,
    setSearch,
    loadMore,
    hasMore,
  } = useFetchProducts({ initialPage: 1, limit: 10 });

  return (
    <div>
      <TopBar />
      <Navbar search={search} setSearch={setSearch} />
      <ProductList isLoading={isLoading} products={products} loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}

export default HomePage