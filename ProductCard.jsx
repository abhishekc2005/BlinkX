import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { LuTimer } from "react-icons/lu";
import QuickViewModal from './QuickViewModal';

const ProductCard = ({ product }) => {
    const { addToCart, cart, updateQuantity } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
            >
                {/* Badge & Image */}
                <div className="relative mb-3 flex-shrink-0">
                    <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.discount > 0 && (
                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded leading-none">
                                {product.discount}% OFF
                            </div>
                        )}
                    </div>
                    <div className="absolute -bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm border border-gray-50">
                        <LuTimer className="text-gray-500 text-xs" />
                        <span className="text-[10px] font-black uppercase text-gray-700 tracking-tight">{product.deliveryTime}</span>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col flex-grow mt-2">
                    <h4 className="text-sm md:text-[15px] font-bold text-gray-800 line-clamp-2 leading-tight mb-1 h-10">
                        {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mb-3">{product.weight}</p>

                    <div className="mt-auto flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col">
                            <span className="text-sm md:text-base font-black text-gray-900">₹{product.price}</span>
                            {product.discount > 0 && (
                                <span className="text-[10px] text-gray-400 line-through">₹{Math.round(product.price * 1.2)}</span>
                            )}
                        </div>

                        {quantity > 0 ? (
                            <div className="flex items-center bg-blinkit-green rounded-lg text-white font-black overflow-hidden shadow-sm h-9">
                                <button
                                    onClick={() => updateQuantity(product.id, -1)}
                                    className="px-3 hover:bg-black/10 transition-colors h-full"
                                >
                                    -
                                </button>
                                <span className="px-1 text-sm md:text-base min-w-[20px] text-center">{quantity}</span>
                                <button
                                    onClick={() => updateQuantity(product.id, 1)}
                                    className="px-3 hover:bg-black/10 transition-colors h-full"
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => addToCart(product)}
                                className="px-6 py-2 border-2 border-blinkit-green text-blinkit-green font-black rounded-lg text-[13px] hover:bg-blinkit-green/5 transition-all shadow-sm h-9 flex items-center justify-center uppercase tracking-wider"
                            >
                                ADD
                            </motion.button>
                        )}
                    </div>
                </div>
            </motion.div>

            <QuickViewModal
                product={product}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ProductCard;
