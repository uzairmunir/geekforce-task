'use client'

import { useAppSelector } from '@/hooks/ReduxHooks';
import SearchField from '@/shared/SearchField'
import { Heart } from 'lucide-react'

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const Navbar: React.FC<Props> = ({ search, setSearch }) => {
  const favorites = useAppSelector((state) => state.favorites.items);
  return (
    <div className='h-[100px] w-full border-b border-gray-300'>
      <div className='container mx-auto px-4 xl:px-0 h-full flex flex-col md:flex-row items-center justify-center gap-2 md:justify-between'>
        <h1 className='text-[24px] font-bold'>Geeks Force EShop</h1>
        <div className='flex items-center gap-4'>
          <SearchField value={search} setValue={setSearch} />
          <div className="relative inline-block">
            <Heart size={24} />
            {favorites?.length ? (
              <span className="absolute -top-2 -right-3 inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {favorites.length}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
