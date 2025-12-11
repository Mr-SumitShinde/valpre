import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MousePointer2, Layout, Search, ArrowRight } from 'lucide-react';

const journeys = [
    {
        id: 'left-nav',
        title: 'Valpré Desktop Start',
        description: 'The user journey begins at the Left Navigation bar, providing quick access to all core application modules.',
        icon: <Layout className="w-6 h-6" />,
        color: 'bg-blue-500',
        placeholderText: 'Left Nav Screenshot Placement'
    },
    {
        id: 'contextual-search',
        title: 'Contextual Search Journey',
        description: 'Users can access the Search Toolkit directly within their workflow context, offering relevant results immediately.',
        icon: <Search className="w-6 h-6" />,
        color: 'bg-purple-500',
        placeholderText: 'Contextual Search Toolkit Screenshot Placement'
    },
    {
        id: 'non-contextual-search',
        title: 'Non-Contextual Search Journey',
        description: 'A global search allowing users to find resources across the entire platform without being tied to a specific context.',
        icon: <MousePointer2 className="w-6 h-6" />,
        color: 'bg-teal-500',
        placeholderText: 'Non-Contextual Search Toolkit Screenshot Placement'
    }
];

const DesktopAdoption = () => {
    const [activeJourney, setActiveJourney] = useState(journeys[0]);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 mb-6"
                    >
                        Desktop Adoption Journeys
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Explore the interactive user flows used in Valpré. Click below to see how users navigate through different desktop experiences.
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
                                    ? 'bg-white border-blue-200 shadow-lg ring-1 ring-blue-100'
                                    : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${activeJourney.id === journey.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'} transition-colors`}>
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
                                    <div className="ml-4 text-xs text-gray-400 font-medium">Valpré Desktop Application</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gray-50/30 rounded-b-2xl relative overflow-hidden">
                                    {/* Description Overlay */}
                                    <div className="mb-8 text-center max-w-lg z-10">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeJourney.title}</h2>
                                        <p className="text-gray-600">{activeJourney.description}</p>
                                    </div>

                                    {/* Image Placeholder */}
                                    <div className="w-full h-80 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white z-10 relative group hover:border-blue-400 transition-colors cursor-pointer">
                                        <div className="p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-blue-50 transition-colors">
                                            {activeJourney.icon}
                                        </div>
                                        <p className="text-gray-400 font-medium text-lg text-center px-4">
                                            {activeJourney.placeholderText}
                                            <br />
                                            <span className="text-sm mt-2 block text-gray-300">(Screenshots will be placed here)</span>
                                        </p>

                                        {/* Add Button Placeholder - simulating user interaction to add images */}
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

export default DesktopAdoption;
