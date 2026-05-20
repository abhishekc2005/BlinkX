import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useCart } from '../context/CartContext';

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useCart();

    return (
        <div className="flex-grow max-w-2xl relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-blinkit-green transition-colors">
                <CiSearch strokeWidth={1} />
            </div>
            <input
                type="text"
                placeholder='Search "milk"'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 bg-gray-50 rounded-lg pl-12 pr-4 border border-gray-100 focus:outline-none focus:bg-white focus:border-blinkit-green transition-all"
            />
        </div>
    );
};

export default SearchBar;
