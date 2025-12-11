import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layers, Zap, Search, ArrowRight } from 'lucide-react';

const journeys = [
    {
        id: 'framework-setup',
        title: 'Framework Setup',
        description: 'Initial configuration and setup of the Valpré Framework within your development environment.',
        icon: <Layers className="w-6 h-6" />,
        color: 'bg-indigo-500',
        placeholderText: 'Framework Setup Screenshot Placement'
    },
    {
        id: 'component-implementation',
        title: 'Component Implementation',
        description: 'Guide on how to implement and customize core components using the Valpré Framework.',
        icon: <Code className="w-6 h-6" />,
        color: 'bg-pink-500',
        placeholderText: 'Component Implementation Screenshot Placement'
    },
    {
        id: 'performance-tuning',
        title: 'Role Entitlements',
        description: 'Best practices for optimizing your application performance using Valpré tools.',
        icon: <Zap className="w-6 h-6" />,
        color: 'bg-amber-500',
        placeholderText: 'Role Entitlements Metrics Screenshot Placement'
    }
];

const FrameworkAdoption = () => {
    const [activeJourney, setActiveJourney] = useState(journeys[0]);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-purple-600 mb-6"
                    >
                        Framework Adoption
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Master the Valpré Framework. Explore the developer journeys and integration patterns.
                    </motion.p>
                </header>

                <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                    {/* Controls / Steps */}
                    <div className="lg:col-span-4 space-y-4">
                        {journeys.map((journey) => (
                            <motion.button
                                key={journey.id}
                                onClick={() => setActiveJourney(journey)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${activeJourney.id === journey.id
                                    ? 'bg-white border-indigo-200 shadow-lg ring-1 ring-indigo-100'
                                    : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${activeJourney.id === journey.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'} transition-colors`}>
                                        {journey.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold text-lg ${activeJourney.id === journey.id ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {journey.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">Click to view flow</p>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Interactive Display Area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeJourney.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 h-full min-h-[500px] flex flex-col"
                            >
                                {/* Browser Window Mockup Header */}
                                <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 rounded-t-2xl flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="ml-4 text-xs text-gray-400 font-medium">Valpré Framework Documentation</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gray-50/30 rounded-b-2xl relative overflow-hidden">
                                    {/* Description Overlay */}
                                    <div className="mb-8 text-center max-w-lg z-10">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeJourney.title}</h2>
                                        <p className="text-gray-600">{activeJourney.description}</p>
                                    </div>

                                    {/* Image Placeholder */}
                                    <div className="w-full h-80 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white z-10 relative group hover:border-indigo-400 transition-colors cursor-pointer">
                                        <div className="p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-indigo-50 transition-colors">
                                            {activeJourney.icon}
                                        </div>
                                        <p className="text-gray-400 font-medium text-lg text-center px-4">
                                            {activeJourney.placeholderText}
                                            <br />
                                            <span className="text-sm mt-2 block text-gray-300">(Screenshots will be placed here)</span>
                                        </p>

                                        {/* Add Button Placeholder */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-sm text-gray-700">Add Image</span>
                                        </div>
                                    </div>

                                    {/* Background Decoration */}
                                    <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${activeJourney.color} opacity-5 blur-3xl rounded-full`}></div>
                                    <div className={`absolute -left-20 -top-20 w-64 h-64 ${activeJourney.color} opacity-5 blur-3xl rounded-full`}></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameworkAdoption;
