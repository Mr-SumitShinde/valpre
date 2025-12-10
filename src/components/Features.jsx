import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Type, Server, Code, Cpu, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, delay, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className={`bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${className}`}
        >
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">{description}</p>
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} className="ml-1" />
            </a>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for speed. Designed for scale.</h2>
                    <p className="text-lg text-gray-500">
                        Whether you're building a simple marketing site or a complex desktop application, Valpre has you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Valpre-Static"
                        description="Zero-runtime overhead static site generation for ultimate performance."
                        icon={Zap}
                        delay={0.1}
                    />
                    <FeatureCard
                        title="Valpre-Textual"
                        description="A new paradigm for text-heavy applications. Typographically perfect, content-first."
                        icon={Type}
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Edge Native"
                        description="Deploy instantly to the edge with zero configuration."
                        icon={Server} // Changed to Server
                        delay={0.3}
                    />

                    {/* Large Feature Span (Bento Style) */}
                    <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="flex-1 relative z-10">
                            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <Code className="text-indigo-600" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Code-First Design</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Style your application with a type-safe design system that scales.
                            </p>
                            <button className="bg-white px-6 py-2 rounded-lg font-semibold text-gray-800 shadow-sm border border-gray-200 hover:shadow-md transition-all">Read Documentation</button>
                        </div>
                        <div className="flex-1 mt-8 md:mt-0 relative w-full h-48 md:h-full">
                            {/* Abstract Visual */}
                            <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-100 opacity-90 rotate-3 scale-90 translate-x-4"></div>
                            <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-gray-100 z-10 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-2 p-4">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-pink-100 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-green-100 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-yellow-100 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FeatureCard
                        title="Incremental Deploys"
                        description="Update content in milliseconds without rebuilding the entire site."
                        icon={Cpu}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
