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
    ExternalLink
} from 'lucide-react';
import JourneyTile from './JourneyTile';

// Import Assets
import homeImg from '../assets/Home.png';
import miniappImg from '../assets/Miniapp.png';
import toolkitContextualImg from '../assets/ToolkitContextual.png';
import toolkitNonContextualImg from '../assets/ToolkitNonContectual.png';

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
                    <div className="flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <JourneyTile title="Home Page" type="browser">
                            <img
                                src={homeImg}
                                alt="Valpre Home Page"
                                className="w-full h-full object-contain"
                            />
                        </JourneyTile>

                        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Entry Point</h3>
                            <p className="text-gray-500 mb-8">How does the user want to navigate to their application?</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Option 1: Direct (Left Nav) */}
                                <button
                                    onClick={() => handleNavigate(3, 'direct')}
                                    className="p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                                >
                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <PanelLeft size={20} />
                                    </div>
                                    <span className="block font-bold text-gray-900 mb-1">Left Nav</span>
                                    <span className="text-xs text-gray-500">Clicked app icon directly in left navigation.</span>
                                </button>

                                {/* Option 2: Search (Contextual) */}
                                <button
                                    onClick={() => handleNavigate(2, 'contextual')}
                                    className="p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                                >
                                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Search size={20} />
                                    </div>
                                    <span className="block font-bold text-gray-900 mb-1">Client Search</span>
                                    <span className="text-xs text-gray-500">Searched for client & clicked on client name </span>
                                </button>

                                {/* Option 3: Manual Task */}
                                <button
                                    onClick={() => handleNavigate(2, 'manual')}
                                    className="p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 transition-all text-left group"
                                >
                                    <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <ListTodo size={20} />
                                    </div>
                                    <span className="block font-bold text-gray-900 mb-1">Manage Task Manually</span>
                                    <span className="text-xs text-gray-500">Clicked on Button Manage Task Manully</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <JourneyTile
                            title={path === 'contextual' ? 'Contextual Search Results' : 'Task Manager Dashboard'}
                            type="browser"
                        >
                            <img
                                src={path === 'contextual' ? toolkitContextualImg : toolkitNonContextualImg}
                                alt={path === 'contextual' ? "Contextual Data View" : "Task List View"}
                                className="w-full h-full object-contain"
                            />
                        </JourneyTile>

                        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your App</h3>
                            <p className="text-gray-500 mb-8 max-w-lg">
                                {path === 'contextual'
                                    ? "The user has found the context (John Smith). Now they choose the application to launch for this customer."
                                    : "The user has selected a task. Now they choose which application to use for this task."}
                            </p>

                            <button
                                onClick={() => handleNavigate(3)}
                                className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
                            >
                                <LayoutGrid size={20} />
                                Choose Application from Menu
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <JourneyTile title="Target Application" type="app">
                            <img
                                src={miniappImg}
                                alt="Final Application Interface"
                                className="w-full h-full object-contain"
                            />
                        </JourneyTile>

                        <div className="p-8 md:p-10 flex-1 flex flex-row items-center justify-between">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                                    <MousePointerClick size={12} /> Journey Complete
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Loaded</h3>
                                <p className="text-gray-500">
                                    {path === 'direct' && "User successfully jumped straight to the app via the Left Sidebar shortcut."}
                                    {path === 'contextual' && "User loaded the app with 'John Smith' context pre-loaded via Search."}
                                    {path === 'manual' && "User loaded the app to handle the specific Task selected manually."}
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
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100"
                    >
                        <MonitorPlay size={16} /> Workflow Visualization
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-600 to-teal-500 mb-8 pb-2">
                        Experience Valpré Journey
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explore the different ways users can land on their specific application within the Valpré Framework.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Progress Steps */}
                    <motion.div
                        layout
                        className="flex justify-center mb-8 gap-4"
                    >
                        <div className={`h-2 rounded-full transition-all duration-300 ${step >= 1 ? 'w-12 bg-blue-600' : 'w-4 bg-gray-200'}`} />
                        <div className={`h-2 rounded-full transition-all duration-300 ${step >= 2 ? 'w-12 bg-blue-600' : 'w-4 bg-gray-200'}`} />
                        <div className={`h-2 rounded-full transition-all duration-300 ${step >= 3 ? 'w-12 bg-blue-600' : 'w-4 bg-gray-200'}`} />
                    </motion.div>

                    {/* Viewport */}
                    <div className="relative min-h-[700px]">
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
