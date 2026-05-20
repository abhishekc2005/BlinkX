import React from 'react';
import { categories } from '../data/mockData';
import { motion } from 'framer-motion';

const Categories = () => {
    return (
        <section className="py-8 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-black text-gray-800">Shop by Category</h3>
                <button className="text-blinkit-green font-bold text-sm md:text-base hover:underline">See all</button>
            </div>

            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 no-scrollbar scroll-smooth snap-x">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        whileHover={{ y: -5 }}
                        className="flex-shrink-0 w-[100px] md:w-[150px] cursor-pointer group snap-start"
                    >
                        <div className="aspect-square bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden mb-3 border border-gray-100 group-hover:shadow-md transition-all">
                            <img
                                src={category.image}
                                alt={category.name}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-center text-xs md:text-sm font-bold text-gray-700 leading-tight group-hover:text-blinkit-green transition-colors">
                            {category.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
