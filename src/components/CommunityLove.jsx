import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, MessageSquare, Quote, Star, Code2, Coffee, Zap } from 'lucide-react';

const testimonials = [
    {
        type: 'tweet',
        name: 'Sarah Drasner',
        handle: '@sarah_edo',
        content: 'Valpre\'s textual engine is mind-blowing. The way it handles static generation while keeping dynamic text hydration is pure magic. 🪄',
        company: 'Netlify'
    },
    {
        type: 'visual',
        theme: 'blue',
        content: (
            <div className="flex flex-col items-center justify-center h-full text-white">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                    <Zap size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold">Lightning Fast</h3>
                <p className="opacity-80">Sub-millisecond latency</p>
            </div>
        )
    },
    {
        type: 'tweet',
        name: 'Guillermo Rauch',
        handle: '@rauchg',
        content: 'Finally, a framework that takes text seriously. Valpre is setting a new standard for content-heavy applications. #Valpre',
        company: 'Vercel'
    },
    {
        type: 'visual',
        theme: 'teal',
        content: (
            <div className="flex flex-col h-full justify-between p-2">
                <div className="flex justify-between items-start">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-white">New</span>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white mb-1">2.0</h3>
                    <p className="text-teal-100">Major Release</p>
                </div>
            </div>
        )
    },
    {
        type: 'tweet',
        name: 'Kent C. Dodds',
        handle: '@kentcdodds',
        content: 'The DX on Valpre is unmatched. Type-safety from the database to the edge without any configuration? Sign me up.',
        company: 'Remix'
    },
    {
        type: 'visual',
        theme: 'dark',
        content: (
            <div className="h-full flex flex-col justify-center font-mono text-xs text-green-400 p-2">
                <p>$ valpre deploy</p>
                <p className="text-gray-500">Building...</p>
                <p className="text-gray-500">Optimizing images...</p>
                <p className="text-white">✨ Done in 0.4s</p>
            </div>
        )
    },
    {
        type: 'tweet',
        name: 'Lee Robinson',
        handle: '@leeerob',
        content: 'Just migrated our documentation to Valpre-Static. Build times dropped by 90%. This is the future of static sites.',
        company: 'Vercel'
    }
];

const Card = ({ item }) => {
    if (item.type === 'visual') {
        const bgColors = {
            blue: 'bg-blue-600',
            teal: 'bg-teal-500',
            dark: 'bg-gray-900',
        };
        return (
            <div className={`${bgColors[item.theme]} w-[300px] h-[280px] rounded-3xl p-6 flex-shrink-0 shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
                {item.content}
            </div>
        );
    }

    return (
        <div className="w-[350px] h-[280px] bg-white rounded-3xl p-8 flex-shrink-0 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-2 transition-all duration-300 group">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-sm">
                        {item.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.handle}</p>
                    </div>
                    <Twitter className="ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">"{item.content}"</p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
                <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.company}</span>
            </div>
        </div>
    );
};

const CommunityLove = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Engineering teams love Valpre
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Join thousands of developers building the future of the web with the most advanced textual framework.
                </p>
                <div className="mt-8">
                    <button className="bg-white text-gray-900 border border-gray-200 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all shadow-sm">
                        Read success stories
                    </button>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {/* Duplicate content 4 times to ensure seamless infinite scroll on wide screens */}
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CommunityLove;
