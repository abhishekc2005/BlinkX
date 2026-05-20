import React, { useState, useEffect } from 'react';
import { banners } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-6 md:py-10">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[160px] sm:h-[240px] md:h-[320px] lg:h-[400px] shadow-lg group">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={banners[current].image}
                            alt={banners[current].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
                            <h2 className="text-2xl md:text-5xl font-black mb-2 drop-shadow-lg">{banners[current].title}</h2>
                            <p className="text-sm md:text-xl font-medium text-gray-100 drop-shadow-md">{banners[current].subtitle}</p>
                            <button className="mt-4 md:mt-8 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-yellow-400 transition-all w-fit active:scale-95 shadow-xl">
                                Shop Now
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 md:p-4 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
                >
                    <FaChevronLeft className="text-lg md:text-2xl" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-2 md:p-4 rounded-full text-white hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
                >
                    <FaChevronRight className="text-lg md:text-2xl" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {banners.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
