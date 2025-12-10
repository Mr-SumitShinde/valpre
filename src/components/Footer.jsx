import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Resources: ['Documentation', 'Guides', 'API Reference', 'Examples'],
        Community: ['GitHub', 'Discord', 'Twitter', 'Blog'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
        Product: ['Valpre-Static', 'Valpre-Textual', 'Enterprise', 'Changelog']
    };

    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-2 pr-8">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 mb-6 block">
                            Valpre
                        </span>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            The modern full-stack framework for content-driven web applications.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="col-span-1">
                            <h4 className="font-bold text-gray-900 mb-6">{category}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-400 text-sm">
                        © 2024 Valpre. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium text-gray-500">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
