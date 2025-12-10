import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Java', color: 'bg-red-700' },
    { name: 'React', color: 'bg-blue-400' },
    { name: 'Vite', color: 'bg-purple-600' },
    { name: 'MicroFrontends', color: 'bg-teal-500' },
    { name: 'GitLab', color: 'bg-orange-600' },
    { name: 'Nginx', color: 'bg-green-700' },
    { name: 'Docker', color: 'bg-blue-500' },
];

const SocialProof = () => {
    return (
        <section className="py-12 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Works seamlessly with your innovations
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex items-center gap-16 py-4 animate-scroll whitespace-nowrap pl-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {/* Duplicate list for infinite scroll effect */}
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={`${logo.name}-${idx}`} className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                            {/* Logo Placeholder */}
                            <div className={`w-8 h-8 rounded-lg ${logo.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                                {logo.name[0]}
                            </div>
                            <span className="text-xl font-bold text-gray-700">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Fade Gradients */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default SocialProof;
