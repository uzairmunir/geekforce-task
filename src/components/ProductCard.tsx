import React from 'react';
import { Product } from '@/types/product';
import { Heart } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/ReduxHooks';
import { addToFavorite, removeFromFavorite } from '@/redux/slices/favoritesProductSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFav = favorites.some((p) => p.id === product.id);


  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFromFavorite(product.id));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  return (
    <div className="h-[290px] flex flex-col relative group">
      <div className="relative w-full md:max-w-[270px] h-[230px] overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full"
        />
        <div className='absolute top-[5px] right-[5px] bg-white p-[6px] rounded-full cursor-pointer'
          onClick={toggleFavorite}
        >
          <Heart size={20} className={`${isFav ? 'fill-red-500 border-0 text-red-500' : ''}`} />
        </div>
        <button
          className="absolute w-full h-[41px] bottom-[-42px] left-1/2 -translate-x-1/2  bg-black text-white px-4 py-2 rounded  transition-all duration-300 group-hover:bottom-0"
        >
          Add to Cart
        </button>
      </div>
      <h3 className="text-black text-[16px] font-medium">{product.title}</h3>
      <span className="mt-1 font-bold text-red-500">${product.price}</span>
    </div>
  );
};

export default ProductCard;
