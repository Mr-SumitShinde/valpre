import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-16 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">

                        {/* Text Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-[1.1]">
                                Create, collaborate <br /> and ship.
                            </h2>
                            <p className="text-gray-500 text-base mb-8 leading-relaxed">
                                Effortlessly bring full-stack capabilities to your everyday products with Valpre.
                            </p>
                            <div>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200 flex items-center gap-2 group hover:-translate-y-0.5">
                                    Start Building
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Geometric Shapes Visuals */}
                        <div className="relative mt-4 md:mt-0 min-h-[200px] md:min-h-auto overflow-hidden">
                            <div className="absolute inset-0 flex items-end justify-end">

                                {/* Shape 1: Large Ellipse */}
                                <motion.div
                                    animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-[-10%] right-[30%] w-48 h-64 bg-blue-100 rounded-[50%_40%_40%_50%/60%_60%_40%_40%] rotate-3"
                                />

                                {/* Shape 2: Rounded Rectangle */}
                                <motion.div
                                    animate={{ y: [0, 10, 0], rotate: [12, 15, 12] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-[5%] right-[10%] w-40 h-40 bg-sky-200 rounded-[2rem] rotate-12 shadow-sm"
                                />

                                {/* Shape 3: Circle */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-[25%] right-[40%] w-28 h-28 bg-cyan-100 rounded-full"
                                />

                                {/* Shape 4: Small Floater */}
                                <motion.div
                                    animate={{ y: [0, -30, 0], rotate: [45, 90, 45] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-[40%] right-[5%] w-16 h-16 bg-blue-50 border border-blue-100 rounded-xl rotate-45 backdrop-blur-sm"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
