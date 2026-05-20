import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { useCart } from '../context/CartContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
    const { addToCart, cart, updateQuantity } = useCart();

    if (!isOpen) return null;

    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative z-10 shadow-2xl flex flex-col md:flex-row"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-20"
                    >
                        <IoClose className="text-xl" />
                    </button>

                    <div className="md:w-1/2 p-6 md:p-10 bg-gray-50 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto max-h-[400px] object-contain rounded-2xl drop-shadow-xl"
                        />
                    </div>

                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col">
                        <div className="mb-6">
                            <span className="text-blinkit-green font-black text-xs uppercase tracking-widest">{product.category}</span>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mt-2">{product.name}</h3>
                            <p className="text-gray-500 font-bold mt-1">{product.weight}</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl mb-8 flex items-center gap-3">
                            <div className="bg-blinkit-green text-white p-2 rounded-lg">
                                <LuTimer className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase text-gray-400">Estimated Delivery</p>
                                <p className="text-sm font-black text-blinkit-green">In {product.deliveryTime}</p>
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-6">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
                                {product.discount > 0 && (
                                    <span className="text-lg text-gray-400 line-through font-bold">₹{Math.round(product.price * 1.2)}</span>
                                )}
                            </div>

                            <div className="flex gap-4">
                                {quantity > 0 ? (
                                    <div className="flex-grow flex items-center justify-center bg-blinkit-green rounded-2xl text-white font-black overflow-hidden shadow-lg h-14 text-xl">
                                        <button
                                            onClick={() => updateQuantity(product.id, -1)}
                                            className="flex-grow hover:bg-black/10 transition-colors h-full"
                                        >
                                            -
                                        </button>
                                        <span className="px-8">{quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(product.id, 1)}
                                            className="flex-grow hover:bg-black/10 transition-colors h-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex-grow bg-blinkit-green text-white font-black rounded-2xl text-lg hover:bg-opacity-90 transition-all shadow-lg h-14 uppercase tracking-widest"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                                <button className="px-6 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm">
                                    <FaRegHeart className="text-xl text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

// Simple icons not imported above
import { LuTimer } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

export default QuickViewModal;
