import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 border border-blue-50">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                        V
                    </span>
                </div>

                {/* Spinning Ring */}
                <motion.div
                    className="absolute -inset-4 border-2 border-transparent border-t-blue-500 border-r-teal-400 rounded-3xl opacity-50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Reverse Spinning Ring */}
                <motion.div
                    className="absolute -inset-4 border-2 border-transparent border-b-purple-500 border-l-indigo-400 rounded-3xl opacity-50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Loading Experience</span>
                <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
