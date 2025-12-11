import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Code2, ArrowRight, Monitor, Layers } from 'lucide-react';

const AdoptionGateway = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                    >
                        Start Your Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Valpré</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Choose the path that fits your role. Whether you're integrating the framework or mastering the desktop environment, we have a tailored guide for you.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Framework Card */}
                    <Link to="/framework-adoption" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-8 border border-gray-100 shadow-xl shadow-purple-900/5 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-900/10 transition-all duration-300"
                        >
                            <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <Layers size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                                    Framework Adoption
                                </h3>

                                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                    Integrate Valpré into your development workflow. Access setup guides, component libraries, and performance tuning best practices.
                                </p>

                                <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                                    Start Framework Guide <ArrowRight size={18} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Card */}
                    <Link to="/desktop-adoption" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="h-full bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-300"
                        >
                            <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-blue-100/20 to-teal-100/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <Monitor size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    Desktop Adoption
                                </h3>

                                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                    Master the Valpré Desktop environment. Learn navigation, contextual search, and workflow optimization techniques designed for power users.
                                </p>

                                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                                    Explore Desktop Journey <ArrowRight size={18} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AdoptionGateway;
