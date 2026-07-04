import React from 'react';

const DepartmentCare = ({ data }) => {
    const { title, description, items, icon } = data;

    const handleCardClick = () => {
        const element = document.getElementById('form-section');
        if (element) {
            const offset = 100;
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                window.scrollTo(0, startPosition + distance * ease);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            requestAnimationFrame(animation);
        }
    };

    return (
        <div id="care-section" className="relative -mt-5 z-20 w-full px-2 sm:px-4">
            <div className="bg-[#D9D9D933] backdrop-blur-md border border-white/30 rounded-[12px] sm:rounded-[16px] md:rounded-[22px] px-3 pt-4 pb-6 sm:px-8 md:px-12 md:pt-6 md:pb-12 flex flex-col gap-6 w-full max-w-[1800px] mx-auto shadow-sm">
                {/* Header Section: Icon + Title and Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-16">
                    {/* Left side: Icon + Title */}
                    <div className="flex items-center gap-3 sm:gap-8 w-full lg:w-1/2">
                        {icon && (
                            <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[160px] md:w-[160px] md:h-[190px] flex-shrink-0">
                                <img src={icon.includes('ik.imagekit.io') ? `${icon}?tr=w-400` : icon} alt="Icon" className="w-full h-full object-contain" />
                            </div>
                        )}
                        <h2 className="text-[#19628D] font-canela font-normal text-[15px] sm:text-[26px] md:text-[28px] lg:text-[28px] xl:text-[32px] leading-tight">
                            {title.replace(/Care/i, '').replace(/at Atreum/i, '').trim()}
                            <br className="hidden lg:block" />
                            <span className="font-bold italic">Care</span> at <span className="font-bold italic">Atreum</span>
                        </h2>
                    </div>

                    {/* Right side: Description */}
                    <div className="w-full lg:w-[40%]">
                        <p className="text-[#000000] font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-tight max-w-[500px] text-justify">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Dynamic Tags / Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-5 mt-4">
                    {items && items.map((tag, index) => (
                        <button
                            key={index}
                            onClick={handleCardClick}
                            className="w-full lg:w-auto bg-[#19628DBD] text-white font-sohne font-bold text-[11px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[20px] px-3 sm:px-6 py-2.5 sm:py-3.5 min-h-[44px] lg:h-[56px] rounded-[10px] sm:rounded-[14px] hover:bg-[#19628D] transition-all duration-300 uppercase tracking-tight shadow-md flex items-center justify-center text-center whitespace-normal leading-tight border border-white/10"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Additional Sections (e.g., for Gastro) */}
                {data.sections && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-2">
                        {data.sections.map((section, idx) => (
                            <div key={idx} className="space-y-2">
                                <h4 className="text-[#19628D] font-sohne font-bold text-[22px] leading-[26px] tracking-normal uppercase">
                                    {section.title}
                                </h4>
                                <ul className="space-y-0.5">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="text-[#000000] font-sohne font-normal text-[18px] leading-[22px] tracking-normal">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {/* Horizontal Line */}
            {/* <div className="w-full max-w-[1800px] mx-auto px-4 mt-5 mb-10 md:mb-3">
                <div className="h-[1px] bg-black w-full"></div>
            </div> */}
        </div>
    );
};

export default DepartmentCare;
