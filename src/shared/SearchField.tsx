'use client';
import { Search } from 'lucide-react';
import React, { ChangeEvent, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const SearchField: React.FC<Props> = ({ value, setValue }) => {
  const [input, setInput] = useState(value);

  const debouncedSetValue = useMemo(
    () => debounce((val: string) => setValue(val), 300),
    [setValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debouncedSetValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 h-[38px] px-4 rounded-md">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search products here...."
        className="bg-transparent border-0 w-full flex-1 outline-none focus:border-0 focus:outline-none"
      />
      <Search size={20} />
    </div>
  );
};

export default SearchField;
