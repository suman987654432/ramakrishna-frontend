import React, { useState } from 'react';
const logo = "https://ik.imagekit.io/omj3ygfmb/hospital/ads/logo_EJRohe77Nh.png?tr=w-100";

const HeroSection = ({ data, onBookAppointment }) => {
    // Current Slide State
    const [currentSlide, setCurrentSlide] = useState(1);

    if (!data) return null;

    return (
        <section className="relative w-full px-4 md:px-12 py-2 md:py-10 flex justify-center items-center mt-2 md:mt-5 overflow-visible">
            {/* Background Container for Desktop Card Feel */}
            <div className="relative w-full max-w-[1440px] flex flex-col md:flex-row-reverse items-center md:bg-[#F7F9FA] md:rounded-[20px] md:overflow-hidden  min-h-auto md:min-h-[550px]">

                {/* Background Watermark Logo (Desktop only) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.08] pointer-events-none z-0 hidden md:block">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                </div>

                {/* IMAGE SECTION: TOP on Mobile, RIGHT on Desktop */}
                <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end items-center md:pr-4 mb-0 md:mb-0">
                    <div className="relative rounded-[10px] overflow-hidden w-full md:w-[585px] h-[350px] sm:h-[400px] md:h-[497px] ">
                        <img
                            src={data.image}
                            alt="Hero Image"
                            fetchpriority="high"
                            decoding="async"
                            loading="eager"
                            width="585"
                            height="497"
                            className="w-full h-full object-cover object-top md:object-top"
                        />

                        {/* Carousel Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 flex items-center gap-2">
                            {[0, 1, 2].map((slide) => (
                                <button
                                    key={slide}
                                    onClick={() => setCurrentSlide(slide)}
                                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentSlide === slide
                                        ? 'bg-white scale-125 ring-2 ring-white/30'
                                        : 'bg-white/40 hover:bg-white/60'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTENT SECTION: BOTTOM on Mobile, LEFT on Desktop */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 md:gap-8 text-center md:text-left p-5 md:p-8 md:pl-16 lg:pl-24 items-center md:items-start bg-[#F7F9FA] md:bg-transparent rounded-b-[10px] md:rounded-none border-x border-b md:border-none border-white/60  mt-0 md:mt-0 pt-2 md:pt-8">
                    <div className="flex flex-col gap-4">
                        <h1
                            className="text-[clamp(19px,4vw,48px)] font-canela font-normal text-[#0B5D85] leading-tight md:leading-[1.2] tracking-tight"
                            dangerouslySetInnerHTML={{ __html: data.title }}
                        />

                        <p
                            className="text-[clamp(13px,2.2vw,28px)] font-sohne font-normal text-[#19628D]/80 leading-snug max-w-[95%] md:max-w-none"
                            dangerouslySetInnerHTML={{ __html: data.subtitle }}
                        />
                    </div>

                    <div className="mt-2 text-center md:text-left">
                        <button onClick={onBookAppointment} className="bg-[#0FB1AB] text-white px-2 md:px-4 py-2.5 md:py-1 rounded-lg font-sohne font-semibold text-[13px] md:text-[20px] leading-tight md:leading-[44px] transition-all flex items-center justify-center tracking-normal uppercase hover:bg-[#0d9a95]">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
