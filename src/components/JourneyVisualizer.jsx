import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MonitorPlay,
    RotateCcw,
    ArrowRight,
    PanelLeft,
    Search,
    ListTodo,
    LayoutGrid,
    MousePointerClick,
    ExternalLink,
    Image as ImageIcon
} from 'lucide-react';
import JourneyTile from './JourneyTile';

// Import Assets
// Use glob import to handle optional/missing images without build errors
const imageAssets = import.meta.glob('../assets/images/*.png', { eager: true });

// Helper to safely get image source
const getImageSrc = (filename) => {
    // Try to matches relative path key in the glob object
    const key = `../assets/images/${filename}`;
    // Eager import returns module with default export as the image URL
    return imageAssets[key]?.default || null;
};

const homeImg = getImageSrc('Home.png');
const miniappImg = getImageSrc('Miniapp.png');
const toolkitContextualImg = getImageSrc('ToolkitContextual.png');
const toolkitNonContextualImg = getImageSrc('ToolkitNonContectual.png');

const JourneyImage = ({ src, alt, placeholderTitle, placeholderDesc }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !src) {
        return (
            <div className="w-full h-full p-6 md:p-8 bg-gray-50/30">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full rounded-2xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50/50 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                            <ImageIcon className="text-gray-400 group-hover:text-blue-500 transition-colors duration-500" size={28} strokeWidth={1.5} />
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rouned-full rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3 border border-gray-200">
                            Concept Visualization
                        </div>

                        <h4 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">{placeholderTitle}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium px-4">
                            {placeholderDesc}
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
            onError={() => setHasError(true)}
        />
    );
};

const JourneyVisualizer = () => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [path, setPath] = useState('none'); // 'direct', 'contextual', 'manual'

    const handleNavigate = (nextStep, selectedPath = null) => {
        setDirection(nextStep > step ? 1 : -1);
        setStep(nextStep);
        if (selectedPath) setPath(selectedPath);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    const renderContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <JourneyTile title="Home Page" type="browser">
                            <JourneyImage
                                src={homeImg}
                                alt="Valpre Home Page"
                                placeholderTitle="Home Dashboard"
                                placeholderDesc="The main landing page where the user starts their journey. Contains navigation, widgets, and quick access points."
                            />
                        </JourneyTile>

                        <div className="p-8 md:p-12 flex flex-col justify-center">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                                <div className="col-span-1 md:col-span-2 flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <MousePointerClick size={16} />
                                    </div>
                                    <span className="font-semibold text-gray-900">Start by choosing a user path:</span>
                                </div>
                                {/* Option 1: Direct Access */}
                                <button
                                    onClick={() => handleNavigate(2, 'direct')}
                                    className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all text-left group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                                <PanelLeft size={24} />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 text-blue-600">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>

                                        <span className="block font-bold text-gray-900 mb-2 text-xl group-hover:text-blue-700 transition-colors">Navigation Bar Access</span>
                                        <span className="text-sm text-gray-500 leading-relaxed block">Launch from primary navigation bar via pinned icon.</span>
                                    </div>
                                </button>

                                {/* Option 2: Catalog Search */}
                                <button
                                    onClick={() => handleNavigate(2, 'contextual')}
                                    className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all text-left group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                                <Search size={24} />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 text-purple-600">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>

                                        <span className="block font-bold text-gray-900 mb-2 text-xl group-hover:text-purple-700 transition-colors">Application Panel Access</span>
                                        <span className="text-sm text-gray-500 leading-relaxed block">Launch from application panel list.</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <JourneyTile title="Target Application" type="app">
                            <JourneyImage
                                src={miniappImg}
                                alt="Final Application Interface"
                                placeholderTitle="Target Application"
                                placeholderDesc="The user has successfully landed on their specific tool or mini-app within the ecosystem."
                            />
                        </JourneyTile>

                        <div className="p-8 md:p-10 md:pb-16 flex flex-row items-center justify-between">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                                    <MousePointerClick size={12} /> Launch Complete
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Active</h3>
                                <p className="text-gray-500">
                                    {path === 'direct' && "User entered directly via the main navigation dock."}
                                    {path === 'contextual' && "User entered via the application catalog/search results."}
                                </p>
                            </div>

                            <button
                                onClick={() => handleNavigate(1, 'none')}
                                className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center gap-2"
                            >
                                <RotateCcw size={18} /> Restart
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-teal-500 mb-8 pb-2">
                        Experience Valpré Journey
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover how users seamlessly transition from the Valpré ecosystem directly into your application.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Progress Steps */}
                    <motion.div
                        layout
                        className="flex justify-center mb-8 gap-4"
                    >
                        <div className={`h-2 rounded-full transition-all duration-300 ${step >= 1 ? 'w-16 bg-blue-600' : 'w-6 bg-gray-200'}`} />
                        <div className={`h-2 rounded-full transition-all duration-300 ${step >= 2 ? 'w-16 bg-blue-600' : 'w-6 bg-gray-200'}`} />
                    </motion.div>

                    {/* Viewport */}
                    <div className="relative min-h-[900px]">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={step}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 w-full"
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyVisualizer;
