import React from 'react';

const JourneyTile = ({ title, type = 'browser', children }) => {
    return (
        <div className="w-full bg-gray-50 rounded-t-3xl border-b border-gray-200 flex flex-col relative overflow-hidden h-[500px] lg:h-[600px] shadow-sm">
            {/* Window Header */}
            <div className={`h-10 px-4 flex items-center justify-between border-b ${type === 'app' ? 'bg-gray-900 text-white' : 'bg-white text-gray-500'}`}>
                <div className="flex items-center gap-2">
                    {type === 'browser' ? (
                        <>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <div className="bg-gray-100 rounded-full px-3 py-1 text-[10px] ml-3 text-gray-400 w-48">
                                valpre.internal/home
                            </div>
                        </>
                    ) : (
                        <span className="text-xs font-bold tracking-wide">{title}</span>
                    )}
                </div>
                {type === 'browser' && <div className="text-xs font-medium">Valpré Portal</div>}
            </div>

            {/* Screenshot Content Area */}
            <div className="flex-1 relative bg-slate-50/50 group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default JourneyTile;
