import React from 'react';
import image from "../../images/harish.avif";

const AboutDoctor = () => {
    return (
        <section className="relative z-20 w-full px-3 sm:px-4 md:px-5 pb-3 sm:pb-4">
            <div className="relative overflow-hidden rounded-[10px] sm:rounded-[14px] border border-[#8CE0DD] bg-[#84ABC1] pb-12 sm:pb-16 lg:pb-14">
                <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0 w-full h-full px-6 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-14 lg:pt-20 pb-0">
                    {/* Left Content Column */}
                    <div className="flex-1 flex flex-col justify-start pb-8 sm:pb-12 lg:pb-16">
                        <h2 className="font-canela text-white text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] leading-[1.05] mb-5 lg:mb-7">
                            Welcome to <span className="italic font-bold">Atreum hospital,</span>
                        </h2>

                        <div className="space-y-2.5 font-sohne text-white/95 text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] leading-[1.28] max-w-[650px]">
                            <p>
                                Healthcare is deeply personal. It is about trust placed in
                                moments that matter most. At Atreum, we honour that trust
                                by putting people at the centre of every decision we make.
                            </p>
                            <p>
                                Our care is guided by clinical excellence, ethical responsibility,
                                and genuine compassion. From the first consultation to
                                recovery and beyond, we focus on clarity, consistency, and
                                outcomes that truly improve quality of life.
                            </p>
                            <p>
                                Atreum is built on a simple promise. To care responsibly, to act
                                with integrity, and to restore confidence and wellbeing at every
                                step of the journey.
                            </p>
                        </div>

                        <div className="mt-6 lg:mt-5 space-y-0">
                            <p className="font-sohne text-[0.95rem] md:text-[1rem] text-white/80  leading-tight">Warm regards,</p>
                            <p className="font-sohne font-bold text-[1.2rem] md:text-[1.3rem] text-white leading-tight">Dr. Harish Kumar</p>
                            <p className="font-sohne text-[0.85rem] md:text-[0.95rem] font-semibold text-white/90 leading-tight">Founder & Chairman</p>
                            <p className="font-sohne text-[0.85rem] md:text-[0.95rem] text-white/80 leading-tight">Atreum Hospitals</p>
                        </div>
                    </div>

                    {/* Right Image Column - Shifted further left as requested */}
                    <img
                        src={image}
                        alt="Dr. Harish Kumar"
                        className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[380px] xl:w-[440px] h-auto object-contain mx-auto lg:mx-0 lg:translate-x-0 xl:translate-x-0 translate-y-[1px] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-100 lg:scale-[1.05] origin-bottom"
                    />
                </div>

                {/* 2px Horizontal line strictly touching the doctor's base - moved up by changing bottom value */}
                <div className="absolute bottom-[52px] sm:bottom-16 lg:bottom-16 left-0 w-full px-6 sm:px-8 md:px-10 lg:px-16">
                    <div className="w-full h-[2px] bg-[#FFFFFF] rounded-full"></div>
                </div>
            </div>
        </section>
    );

};




export default AboutDoctor;


