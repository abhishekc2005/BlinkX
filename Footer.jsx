import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-2xl font-black text-yellow-400 tracking-tighter mb-4">
                            blink<span className="text-blinkit-green">it</span>
                        </h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            India's last minute app. <br />
                            Get everything you need in 10 minutes.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-black text-gray-800 mb-6 uppercase text-xs tracking-widest">Company</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">About Us</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Careers</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Press</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-black text-gray-800 mb-6 uppercase text-xs tracking-widest">Support</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Help Center</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Safety Information</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Cancellation Policy</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-black text-gray-800 mb-6 uppercase text-xs tracking-widest">Cities</h5>
                        <ul className="grid grid-cols-1 gap-4">
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Gurugram</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Delhi</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Bengaluru</a></li>
                            <li><a href="#" className="text-gray-500 text-sm hover:text-blinkit-green font-medium">Mumbai</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h5 className="font-black text-gray-800 mb-6 uppercase text-xs tracking-widest">Connect with us</h5>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blinkit-green hover:text-white transition-all text-gray-600">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blinkit-green hover:text-white transition-all text-gray-600">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blinkit-green hover:text-white transition-all text-gray-600">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blinkit-green hover:text-white transition-all text-gray-600">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        © blinkit 2026. all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
