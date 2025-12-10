import React from 'react';
import { ArrowRight } from 'lucide-react';

const JourneyCard = ({ title, description, icon: Icon, href, highlight = false }) => {
    return (
        <div className={`group relative p-8 rounded-2xl transition-all duration-300 border ${highlight ? 'bg-brand-navy text-white border-transparent' : 'bg-white text-brand-dark border-gray-100 hover:shadow-xl'}`}>
            <div className="mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${highlight ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-light text-brand-navy'}`}>
                    {Icon && <Icon size={28} />}
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className={`mb-8 leading-relaxed ${highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {description}
            </p>

            <a href={href} className={`inline-flex items-center font-semibold group-hover:gap-2 transition-all ${highlight ? 'text-brand-cyan hover:text-white' : 'text-brand-navy hover:text-brand-cyan'}`}>
                Learn more <ArrowRight size={18} className="ml-2" />
            </a>
        </div>
    );
};

export default JourneyCard;
