import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2, Palette, MousePointer2, Code2, Copy, Check } from 'lucide-react';

const ValueCard = ({ icon: Icon, color, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all w-full"
        >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                <Icon size={20} className="text-gray-900" strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
                <p className="text-sm text-gray-500 leading-tight mt-1">{description}</p>
            </div>
        </motion.div>
    );
};

const CodeSnippet = () => {
    const [copied, setCopied] = useState(false);
    const command = "npx create-valpre-app my-project";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-8 relative max-w-md mx-auto lg:mx-0">
            <div className="flex items-center justify-between gap-4 bg-[#0F172A] text-gray-300 px-6 py-4 rounded-xl font-mono text-sm border border-gray-800 shadow-xl">
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                    <span className="text-blue-500 font-bold select-none">{'>_'}</span>
                    <span className="whitespace-nowrap">
                        <span className="text-sky-400">npx</span> create-valpre-app <span className="text-violet-400">my-project</span>
                    </span>
                </div>
                <button
                    onClick={handleCopy}
                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white shrink-0"
                    title="Copy command"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 max-w-2xl text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Business Ready v2.0
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Scale with Confidence. <br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-400">Build with Valpre.</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            The enterprise-grade full-stack framework built for mission-critical applications. Trusted by Product Owners, loved by Developers.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                                Start Building
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <Play size={14} className="fill-blue-600 text-blue-600 ml-0.5" />
                                </div>
                                Enterprise Demo
                            </button>
                        </div>

                        {/* Copyable Command Component */}
                        <CodeSnippet />

                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-1 w-full max-w-xl lg:max-w-full relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                            {/* Floating Elements Animation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10 w-48 h-48 bg-blue-500 rounded-3xl shadow-lg rotate-12 flex items-center justify-center"
                            >
                                <div className="w-32 h-32 border-4 border-white/30 rounded-full" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                                className="absolute z-0 top-20 left-20 w-32 h-32 bg-teal-400 rounded-full shadow-lg blur-sm opacity-80"
                            />

                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute bottom-12 right-12 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100/50 backdrop-blur-sm z-20"
                            >
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="font-semibold text-gray-700">Production Ready</span>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>

                {/* Integrated Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ValueCard
                        icon={Maximize2}
                        color="bg-amber-400"
                        title="Tiny"
                        description="Micro-kernel architecture"
                        delay={0.4}
                    />
                    <ValueCard
                        icon={Palette}
                        color="bg-pink-400"
                        title="Theming"
                        description="CSS-in-JS design engine"
                        delay={0.5}
                    />
                    <ValueCard
                        icon={MousePointer2}
                        color="bg-teal-400"
                        title="Interactive"
                        description="Partial hydration built-in"
                        delay={0.6}
                    />
                    <ValueCard
                        icon={Code2}
                        color="bg-blue-500"
                        title="Dev ready"
                        description="Native TypeScript types"
                        delay={0.7}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
