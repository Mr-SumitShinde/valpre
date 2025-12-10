import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Gauge, Code2, Layers, TrendingUp, Smartphone, Globe, Monitor, Box } from 'lucide-react';

const PerformanceGrid = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto">
                <div className="bg-[#0b0c0e] rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
                    {/* Background Glow */}
                    <div className="absolute top-0 center w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 left-1/2 -translate-x-1/2" />

                    <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                        <p className="text-gray-400 font-medium mb-4">New high-performance Valpre runtimes</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                            Valpre, the industry standard for <br className="hidden md:block" /> full-stack applications
                        </h2>

                        {/* Tech Stack Icons */}
                        <div className="flex items-center justify-center gap-6 text-gray-400">
                            <Box size={24} />
                            <Code2 size={24} />
                            <Globe size={24} />
                            <Smartphone size={24} />
                            <Monitor size={24} />
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">

                        {/* 10x Faster */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl md:col-span-1 flex flex-col justify-end min-h-[220px]"
                        >
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-2">10x</div>
                            <p className="text-gray-400 text-sm">faster builds with Valpre-Static</p>
                        </motion.div>

                        {/* File Size Comparison */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl md:col-span-1 flex flex-col justify-between min-h-[220px]"
                        >
                            <div>
                                <h3 className="font-bold text-lg mb-4">Bundle Size</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Valpre</span>
                                            <span>12kb</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[15%] rounded-full" />
                                        </div>
                                        <div className="text-[10px] text-green-500/80 mt-1">90% smaller</div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Others</span>
                                            <span>128kb</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-500 w-full rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* SEO Boost */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl md:col-span-1 flex flex-col justify-center items-center text-center min-h-[220px]"
                        >
                            <div className="text-5xl font-bold text-white mb-2">40%</div>
                            <p className="text-gray-400 text-sm">better SEO score<br />on average</p>
                        </motion.div>

                        {/* Speed Meter */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl md:col-span-1 flex flex-col justify-between min-h-[220px]"
                        >
                            <div className="flex justify-between items-start">
                                <div className="text-4xl font-bold text-white">5x</div>
                                <Gauge size={20} className="text-blue-400" />
                            </div>
                            <p className="text-gray-400 text-sm mt-auto">faster page load speed</p>
                        </motion.div>

                        {/* Dev Ready Code */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-3xl md:col-span-1 md:row-span-1"
                        >
                            <h3 className="font-bold text-lg mb-1">Dev ready</h3>
                            <p className="text-gray-400 text-xs mb-4">and easy to implement</p>

                            <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-[10px] text-gray-300 leading-relaxed overflow-hidden">
                                <div className="flex gap-1.5 mb-3 border-b border-white/10 pb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                <span className="text-purple-400">import</span> {'{ Valpre }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@valpre/core'</span>;<br /><br />
                                <span className="text-blue-400">const</span> app = <span className="text-blue-400">new</span> Valpre({'{'}<br />
                                &nbsp;&nbsp;mode: <span className="text-green-400">'static'</span>,<br />
                                &nbsp;&nbsp;edge: <span className="text-orange-400">true</span><br />
                                {'}'});
                            </div>
                        </motion.div>

                        {/* Interactive/Visual */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/10 p-0 rounded-3xl md:col-span-2 relative overflow-hidden group flex items-center justify-center min-h-[220px]"
                        >
                            <div className="absolute top-4 left-6 z-10">
                                <h3 className="font-bold text-lg text-white">Interactive</h3>
                                <p className="text-gray-300 text-xs">for delightful textual apps</p>
                            </div>

                            {/* Animated Element */}
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full blur-[20px] opacity-60 absolute"
                            />
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-24 h-24 bg-[#0b0c0e] border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl"
                            >
                                <Zap className="text-blue-400" size={40} fill="currentColor" />
                            </motion.div>
                        </motion.div>

                        {/* 3x Engagement */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl md:col-span-1 flex flex-col justify-end min-h-[220px]"
                        >
                            <div className="text-4xl font-bold text-white mb-2">3x</div>
                            <p className="text-gray-400 text-sm">increase in user engagement</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceGrid;
