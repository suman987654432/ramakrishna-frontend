import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = ({ data }) => {
    if (!data) return null;

    return (
            <section className="w-full max-w-[1440px] mx-auto -mt-3 md:-mt-4 px-4 md:px-12 pt-0 md:pt-0 pb-4 md:pb-8 font-sohne overflow-hidden">
            <div className="flex justify-start mb-2 md:mb-6">
                <h2 
                    className="text-[clamp(24px,5vw,50px)] font-canela text-[#0B5D85] leading-tight text-left tracking-tight"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />
            </div>

            <div className="flex flex-wrap justify-start gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3 max-w-[1200px]">
                {data.items.map((benefit, index) => (
                    <div 
                        key={index} 
                        className="flex items-stretch h-8 md:h-10 group"
                    >
                        {/* Checkmark Box */}
                        <div className="flex items-center justify-center bg-white border-2 border-[#5B89A3] border-r-0 rounded-l-full px-2 md:px-3">
                            <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#5B89A3] stroke-[3px]" />
                        </div>
                        {/* Text Box */}
                        <div className="flex items-center bg-[#5B89A3] rounded-r-lg md:rounded-r-xl px-3 md:px-4 shadow-sm">
                            <span className="text-white text-[9px] md:text-[13px] font-bold tracking-wider uppercase whitespace-nowrap">
                                {benefit}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;
