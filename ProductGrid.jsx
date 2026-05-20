import React, { useState, useEffect } from 'react';
import { products } from '../data/mockData';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import SkeletonLoader from './SkeletonLoader';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGrid = () => {
    const [loading, setLoading] = useState(true);
    const { searchTerm } = useCart();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        // Simulate API call
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm]);

    if (loading) {
        return (
            <section className="py-10">
                <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-8">Picking fresh items for you...</h3>
                <SkeletonLoader />
            </section>
        );
    }

    return (
        <section className="py-10 min-h-[600px]">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-black text-gray-800">
                    {searchTerm ? `Search results for "${searchTerm}"` : "Daily Essentials"}
                </h3>
                <p className="text-sm text-gray-500 font-bold">{filteredProducts.length} items</p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-48 h-48 mb-6 opacity-40">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--search-error-event-pack-user-interface-illustrations-5210416.png" alt="No results" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-800 mb-2">No items found</h4>
                    <p className="text-gray-500 font-medium">Try searching for something else like "milk" or "bread"</p>
                </div>
            )}
        </section>
    );
};

export default ProductGrid;
