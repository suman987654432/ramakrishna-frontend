import React from 'react';
import { Link } from 'react-router-dom';

const insurancePartners = [
    { name: "Star Health", url: "https://logo.clearbit.com/starhealth.in" },
    { name: "HDFC ERGO", url: "https://logo.clearbit.com/hdfcergo.com" },
    { name: "ICICI Lombard", url: "https://logo.clearbit.com/icicilombard.com" },
    { name: "Bajaj Allianz", url: "https://logo.clearbit.com/bajajallianz.com" },
    { name: "Niva Bupa", url: "https://logo.clearbit.com/nivabupa.com" },
    { name: "Aditya Birla", url: "https://logo.clearbit.com/adityabirlacapital.com" },
    { name: "Tata AIG", url: "https://logo.clearbit.com/tataaig.com" },
    { name: "Care Health", url: "https://logo.clearbit.com/careinsurance.com" },
    { name: "SBI General", url: "https://logo.clearbit.com/sbigeneral.in" },
    { name: "Reliance", url: "https://logo.clearbit.com/reliancegeneral.co.in" },
];

const InsuranceMarquee = () => {
    return (
        <div className="w-full bg-[#F8F9FA] py-8">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-250px * 10)); }
                }
                .marquee-container {
                    display: flex;
                    width: calc(250px * 20);
                    animation: scroll 40s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#19628D] mb-8">Our Insurance</h2>
                <div className="relative overflow-hidden bg-white py-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="marquee-container">
                        {insurancePartners.map((partner, index) => (
                            <Link to="/insurance" key={index} className="flex flex-col items-center justify-center w-[250px] px-6">
                                <div className="h-20 md:h-24 w-full flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <img
                                        src={partner.url}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://placehold.co/200x100/F9FAFB/19628D?text=${partner.name.replace(' ', '+')}`;
                                        }}
                                    />
                                </div>
                                <p className="mt-3 text-xs md:text-sm font-semibold text-gray-600 text-center">{partner.name}</p>
                            </Link>
                        ))}
                        {insurancePartners.map((partner, index) => (
                            <Link to="/insurance" key={`dup-${index}`} className="flex flex-col items-center justify-center w-[250px] px-6">
                                <div className="h-20 md:h-24 w-full flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <img
                                        src={partner.url}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://placehold.co/200x100/F9FAFB/19628D?text=${partner.name.replace(' ', '+')}`;
                                        }}
                                    />
                                </div>
                                <p className="mt-3 text-xs md:text-sm font-semibold text-gray-600 text-center">{partner.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsuranceMarquee;
