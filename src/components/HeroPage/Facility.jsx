
import React from 'react';
const emer = "https://ik.imagekit.io/omj3ygfmb/hospital/images/emer_uQ6OPJHkz.png";
const mri = "https://ik.imagekit.io/omj3ygfmb/hospital/images/mri_kWKdhIpAX.png";
const radio = "https://ik.imagekit.io/omj3ygfmb/hospital/images/radio__ePvJJeD7.png";
const pharma = "https://ik.imagekit.io/omj3ygfmb/hospital/images/pharma_RLYpQdA1d.png";

const careData = [
    {
        id: 1,
        title: "EMERGENCY CARE UNIT (24/7)",
        image: emer,
        width: "md:col-span-2",
    },
    {
        id: 2,
        title: "CT SCANNING",
        image: mri,
        width: "md:col-span-1",
    },
    {
        id: 3,
        title: "RADIOLOGY LAB",
        image: radio,
        width: "md:col-span-1",
    },
    {
        id: 4,
        title: "OUR PHARMACY",
        image: pharma,
        width: "md:col-span-2",
    }
];

const Facility = () => {
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

                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            requestAnimationFrame(animation);
        }
    };

    return (
        <div id="care-section" className="relative z-20 mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 mt-8 sm:mt-24 lg:mt-20">
            <div className="backdrop-blur-md border-b border-white/30 rounded-xl sm:rounded-2xl pt-1 pb-4 sm:pb-6 w-full max-w-[1440px] mx-auto" style={{ backgroundColor: '#D9D9D933' }}>
                <div className="px-3 sm:px-4 lg:px-6 w-full max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-center mt-4 sm:mt-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 sm:gap-6">
                        <div className="md:w-2/5 md:ml-4 lg:ml-8 xl:ml-12 max-w-[600px] text-center md:text-left">
                            <h2 className="text-[#19628D]">
                                <span className="font-canela font-bold italic text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-tight tracking-normal">Our Facility</span>
                            </h2>
                        </div>
                        <div className="md:w-2/5 md:ml-2 lg:ml-4 max-w-[600px] text-center md:text-left">
                            <p className="text-black font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight tracking-normal">
                                At Atreum, your recovery comes first. Skilled professionals, advanced equipment, and modern facilities come together to ensure safe, comfortable, and effective care for all your needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                        {careData.slice(0, 2).map((item) => (
                            <div
                                key={item.id}
                                onClick={handleCardClick}
                                className={`relative overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[280px] md:h-[350px] lg:h-[400px] xl:h-[450px] cursor-pointer shadow-xl ${item.width}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover ${item.title === "MRI SCANNING" || item.title === "RADIOLOGY LAB" ? '' : ''}`}
                                    />
                                    {/* Dark Overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>

                                {/* Title Section */}
                                <div className="absolute bottom-0 left-0 w-full bg-[#FCA61B]/50  p-3 sm:p-4 md:p-5 lg:p-6">
                                    <h3 className="font-sohne font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px] leading-tight text-white uppercase tracking-normal">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1800px] mx-auto  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {careData.slice(2, 4).map((item) => (
                        <div
                            key={item.id}
                            onClick={handleCardClick}
                            className={`relative overflow-hidden rounded-xl sm:rounded-2xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] cursor-pointer shadow-xl ${item.width}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover ${item.title === "MRI SCANNING" || item.title === "RADIOLOGY LAB" ? '' : ''}`}
                                />
                                {/* Dark Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>

                            {/* Title Section */}
                            <div className="absolute bottom-0 left-0 w-full bg-[#FCA61B]/50 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6">
                                <h3 className="font-sohne font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[26px] leading-tight text-white uppercase tracking-normal">
                                    {item.title}
                                    {/* {item.title} */}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facility;