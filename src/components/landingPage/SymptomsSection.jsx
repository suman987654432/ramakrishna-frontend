import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SymptomsSection = ({ data }) => {
    if (!data) return null;

    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-0 pb-10 md:pt-0 md:pb-20 font-sohne overflow-hidden">
            {/* Header Section */}
            <div className="mb-6 md:mb-10 pl-6 md:pl-10 lg:pl-20">
                <h2 
                    className="text-[24px] md:text-[36px] lg:text-[53px] font-canela font-normal text-[#0B5D85] leading-tight md:leading-[1.2] mb-2 md:mb-4 tracking-tight"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />
                <p className="text-[12px] md:text-[22px] text-[#19628D] font-semibold font-sohne tracking-[0.02em]">
                    {data.subtitle}
                </p>
            </div>

            {/* Symptoms Card Grid Container */}
            <div className="bg-[#D9D9D933] rounded-lg md:rounded-[32px] px-3 py-6 md:px-8 lg:px-20 lg:py-16 shadow-sm border border-white/40">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-12 md:gap-x-16 gap-y-10 md:gap-y-14">
                    {data.items.map((symptom, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 md:gap-3">
                            {/* Illustration Container */}
                            <div className="w-full max-w-[100px] md:max-w-[180px] lg:max-w-[254px] aspect-[1.25/1] flex items-center justify-center overflow-hidden">
                                <LazyLoadImage
                                    src={symptom.image}
                                    alt={symptom.title}
                                    effect="blur"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Label */}
                            <p className="text-[12px] md:text-[18px] lg:text-[24px] font-sohne font-semibold text-[#0B5D85] leading-tight md:leading-normal uppercase tracking-tight text-center">
                                {symptom.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SymptomsSection;