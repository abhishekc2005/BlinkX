import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser, FaChevronDown, FaMoon, FaSun } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';

const Header = ({ darkMode, setDarkMode }) => {
    const { cartCount, cartTotal, searchTerm, setSearchTerm } = useCart();
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 shadow-sm transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center gap-2 md:gap-8">
                {/* Logo */}
                <div className="flex-shrink-0 cursor-pointer">
                    <h1 className="text-3xl font-black text-yellow-400 tracking-tighter">
                        blink<span className="text-blinkit-green">it</span>
                    </h1>
                </div>

                {/* Location Selector */}
                <div
                    className="hidden md:flex flex-col cursor-pointer border-l border-gray-200 dark:border-zinc-700 pl-8 ml-2 group"
                    onClick={() => setIsLocationModalOpen(!isLocationModalOpen)}
                >
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200">Delivery in 10 minutes</span>
                    <div className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300">
                        <span className="truncate max-w-[150px]">Gurugram, Haryana</span>
                        <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform" />
                    </div>
                </div>

                {/* Search Bar */}
                <SearchBar />

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden lg:block text-lg font-medium text-gray-700 hover:text-blinkit-green transition-colors">
                        Login
                    </button>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-600 dark:text-gray-300"
                    >
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                    </button>

                    <button className="bg-blinkit-green px-4 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-md group border-2 border-blinkit-green">
                        <div className="relative">
                            <FaShoppingCart className="text-white text-xl" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col items-start translate-y-[-1px]">
                            {cartCount > 0 ? (
                                <>
                                    <span className="text-white text-[10px] font-bold leading-none">{cartCount} items</span>
                                    <span className="text-white text-xs font-black">₹{cartTotal}</span>
                                </>
                            ) : (
                                <span className="text-white font-bold">My Cart</span>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
