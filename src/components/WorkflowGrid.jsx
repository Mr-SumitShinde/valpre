import React from 'react';
import { motion } from 'framer-motion';
import { Layout, FileJson, GitMerge, FileCode, Figma, ArrowRight, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

const Card = ({ children, className, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`bg-gray-50 border border-gray-100 rounded-3xl p-6 overflow-hidden relative group hover:shadow-lg transition-all duration-300 ${className}`}
    >
        <div className="relative z-10">
            {title && <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>}
            {description && <p className="text-gray-500 text-xs mb-4">{description}</p>}
            {children}
        </div>
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
);

const WorkflowGrid = () => {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        A modern full-stack workflow <br /> built for teams and enterprises
                    </h2>
                    <p className="text-base text-gray-500 mb-6">
                        Save countless design and development hours with a unified Valpre toolchain.
                        Deploy, manage, and scale with confidence.
                    </p>
                    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-xs hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        View all features
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">

                    {/* Your team's workspace (Large - Left) */}
                    <Card
                        className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-gray-50 to-white"
                        title="Your team's workspace"
                        description="Create, customize, manage, and deploy projects with peers in a secure and centralized place."
                    >
                        <div className="mt-4 bg-white border border-gray-200 rounded-xl shadow-sm p-4 overflow-hidden relative min-h-[250px]">
                            {/* Mock Dashboard UI */}
                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xs">V</div>
                                    <span className="font-semibold text-gray-700 text-xs">Valpre Dashboard</span>
                                </div>
                                <div className="flex -space-x-1.5">
                                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />)}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="w-full h-16 bg-white rounded-md mb-2 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                                                <Layout size={16} className="text-blue-500" />
                                            </div>
                                        </div>
                                        <div className="h-1.5 w-16 bg-gray-200 rounded mb-1.5"></div>
                                        <div className="h-1.5 w-8 bg-gray-100 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Optimize and download (Top Right) */}
                    <Card
                        title="Smart Bundling"
                        description="Optimize your builds automatically with our Rust-based compiler."
                    >
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm relative z-10">
                                    <FileCode className="text-blue-600" size={24} />
                                </div>
                            </div>
                            <ArrowRight className="text-gray-300" size={16} />
                            <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                                <FileJson className="text-green-600" size={24} />
                            </div>
                        </div>
                    </Card>

                    {/* Progress updates (Bottom Right) */}
                    <Card
                        title="Live Preview"
                        description="Instant feedback loops with per-branch preview URLs."
                    >
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="h-1.5 w-20 bg-gray-200 rounded mb-1"></div>
                                    <div className="text-[10px] text-green-600 font-medium">Ready to merge</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm opacity-60">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                    <RefreshCw size={12} className="text-blue-600 animate-spin" />
                                </div>
                                <div className="flex-1">
                                    <div className="h-1.5 w-20 bg-gray-200 rounded mb-1"></div>
                                    <div className="text-[10px] text-blue-600 font-medium">Building...</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Seamless developer handoff (Bottom Left - Medium) */}
                    <Card
                        className="md:col-span-2"
                        title="Type-Safe Handoff"
                        description="Preview, test, and implement components with built-in CDN, runtimes and VSCode integration."
                    >
                        <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 w-full bg-white border border-gray-200 rounded-xl p-3 font-mono text-[10px] text-gray-600 shadow-sm leading-relaxed">
                                <div className="flex gap-1 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                                <p><span className="text-purple-600">interface</span> <span className="text-yellow-600">Props</span> {'{'}</p>
                                <p className="pl-3">variant: <span className="text-green-600">'primary'</span> | <span className="text-green-600">'secondary'</span>;</p>
                                <p className="pl-3">onClick: () <span className="text-blue-600">=&gt;</span> <span className="text-purple-600">void</span>;</p>
                                <p>{'}'}</p>
                            </div>
                            <div className="hidden md:flex gap-2 text-gray-300">
                                <ArrowRight size={16} />
                            </div>
                            <div className="flex-1 w-full flex items-center justify-center p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 border-dashed">
                                <div className="px-4 py-1.5 bg-blue-600 text-white rounded-md shadow-md text-xs">
                                    Compile
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Integration (Bottom Right - Medium) */}
                    <Card
                        title="Ecosystem"
                        description="Access your private Valpre library directly within Figma, VSCode, and more."
                    >
                        <div className="mt-6 grid grid-cols-2 gap-2">
                            {['Figma', 'VSCode', 'GitHub', 'React'].map((tool) => (
                                <div key={tool} className="flex items-center gap-1.5 p-1.5 bg-white rounded-lg border border-gray-100 text-xs font-medium text-gray-600">
                                    <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                                        <Layers size={12} className="text-gray-500" />
                                    </div>
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default WorkflowGrid;
