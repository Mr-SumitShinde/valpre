import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    // Dropdown state
    const [adoptionDropdownOpen, setAdoptionDropdownOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/80 backdrop-blur-md border-gray-100 py-3 shadow-sm" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                        Valpré
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
                        Features
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
                        Showcase
                    </a>

                    {/* Adoption with Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setAdoptionDropdownOpen(true)}
                        onMouseLeave={() => setAdoptionDropdownOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm group-hover:text-blue-600">
                            Adoption
                            <ChevronDown size={14} className={`transition-transform duration-200 ${adoptionDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {adoptionDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
                                >
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2 flex flex-col">
                                        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium">
                                            Valpre Framework adoption
                                        </a>
                                        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium">
                                            Valpre Desktop adoption
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm">
                        Documentation
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-b border-gray-100"
                >
                    <div className="px-6 py-4 flex flex-col gap-4">
                        <a href="#" className="text-gray-600 font-medium text-lg py-2">Features</a>
                        <a href="#" className="text-gray-600 font-medium text-lg py-2">Showcase</a>

                        <div className="py-2">
                            <div className="font-medium text-lg text-gray-900 mb-2">Adoption</div>
                            <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100">
                                <a href="#" className="text-gray-600 font-medium text-base">Valpre Framework adoption</a>
                                <a href="#" className="text-gray-600 font-medium text-base">Valpre Desktop adoption</a>
                            </div>
                        </div>

                        <a href="#" className="text-gray-600 font-medium text-lg py-2">Documentation</a>

                        <div className="flex flex-col gap-3 mt-4">
                            <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl">Get Started</button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
