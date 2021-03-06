import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className=" flex items-center justify-between p-4 mt-3">
      <input
        placeholder="Search"
        className="w-full placeholder-blue-300 outline-none"
      />

      <BsSearch className="text-blue-300" />
    </div>
  );
};

export default Search;
