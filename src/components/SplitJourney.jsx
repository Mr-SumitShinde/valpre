import React, { useState } from 'react';
import { Layout, Monitor, ArrowRight, ChevronRight } from 'lucide-react';

const SplitJourney = () => {
    const [activeSide, setActiveSide] = useState(null); // 'left', 'right', or null

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-brand-dark">

            {/* Left Side: Strategic Framework */}
            <div
                className={`relative flex-1 transition-all duration-700 ease-in-out cursor-pointer group
          ${activeSide === 'right' ? 'flex-[0.5] md:flex-[0.3] opacity-60' : 'flex-1'}
          ${activeSide === 'left' ? 'flex-[1.5] md:flex-[2]' : ''}
          border-b md:border-b-0 md:border-r border-white/10
        `}
                onMouseEnter={() => setActiveSide('left')}
                onMouseLeave={() => setActiveSide(null)}
            >
                {/* Background / Texture */}
                <div className="absolute inset-0 bg-brand-navy transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent"></div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16">
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-brand-cyan shadow-lg">
                        <Layout size={32} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Strategic <br /> Framework
                    </h2>

                    <div className={`overflow-hidden transition-all duration-500 ${activeSide === 'left' ? 'max-h-96 opacity-100' : 'max-h-24 opacity-80'}`}>
                        <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
                            Master the methodology. A structured approach to wallpapering excellence, offering scalable patterns, resource frameworks, and strategic oversight.
                        </p>

                        <ul className={`space-y-4 mb-8 ${activeSide === 'left' ? 'block' : 'hidden md:block'}`}>
                            <li className="flex items-center text-gray-300"><ChevronRight size={16} className="text-brand-cyan mr-2" /> Enterprise-grade Methodologies</li>
                            <li className="flex items-center text-gray-300"><ChevronRight size={16} className="text-brand-cyan mr-2" /> Scalable Architecture Resources</li>
                            <li className="flex items-center text-gray-300"><ChevronRight size={16} className="text-brand-cyan mr-2" /> Strategic Implementation Plans</li>
                        </ul>

                        <button className="flex items-center gap-2 text-white font-semibold border-b-2 border-brand-cyan pb-1 hover:text-brand-cyan transition-colors">
                            Explore Strategy <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side: Valpre Desktop */}
            <div
                className={`relative flex-1 transition-all duration-700 ease-in-out cursor-pointer group
          ${activeSide === 'left' ? 'flex-[0.5] md:flex-[0.3] opacity-60' : 'flex-1'}
          ${activeSide === 'right' ? 'flex-[1.5] md:flex-[2]' : ''}
        `}
                onMouseEnter={() => setActiveSide('right')}
                onMouseLeave={() => setActiveSide(null)}
            >
                {/* Background / Texture */}
                <div className="absolute inset-0 bg-brand-dark transition-transform duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-brand-cyan/10 to-transparent"></div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 items-start md:items-end text-left md:text-right">
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-brand-cyan/20 backdrop-blur-md flex items-center justify-center text-brand-cyan shadow-glow">
                        <Monitor size={32} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Valpre <br /> Desktop
                    </h2>

                    <div className={`overflow-hidden transition-all duration-500 flex flex-col items-start md:items-end ${activeSide === 'right' ? 'max-h-96 opacity-100' : 'max-h-24 opacity-80'}`}>
                        <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
                            The digital command center. Visualize, edit, and deploy your strategies with our powerful desktop environment designed for professionals.
                        </p>

                        <ul className={`space-y-4 mb-8 ${activeSide === 'right' ? 'block' : 'hidden md:block'}`}>
                            <li className="flex items-center justify-end text-gray-300">Real-time Visualization <ChevronRight size={16} className="text-brand-cyan ml-2" /></li>
                            <li className="flex items-center justify-end text-gray-300">Advanced Editing Suite <ChevronRight size={16} className="text-brand-cyan ml-2" /></li>
                            <li className="flex items-center justify-end text-gray-300">Seamless Cloud Sync <ChevronRight size={16} className="text-brand-cyan ml-2" /></li>
                        </ul>

                        <button className="flex items-center gap-2 text-white font-semibold border-b-2 border-brand-cyan pb-1 hover:text-brand-cyan transition-colors">
                            Launch Desktop <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SplitJourney;
