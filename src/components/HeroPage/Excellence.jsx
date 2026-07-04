import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { departmentsData } from "../../data/departmentsData";


const Excellence = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const [excellenceData, setExcellenceData] = useState({ title: "Atreum Center of Excellence", description: "At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery." });
    const [dynamicCareData, setDynamicCareData] = useState([]);

    React.useEffect(() => {
        const fetchHomePageData = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
                const res = await fetch(`${API_BASE_URL}/api/home-page`);
                const data = await res.json();
                if (data) {
                    if (data.excellence) setExcellenceData(data.excellence);
                    if (data.careData && data.careData.length > 0) setDynamicCareData(data.careData);
                }
            } catch (error) {
                console.error("Error fetching home page data:", error);
            }
        };
        fetchHomePageData();
    }, []);

    const activeCareData = dynamicCareData;

    return (
        <div className="relative -mt-4 z-20 bg-white/20 backdrop-blur-md border-b border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-8 sm:pt-10 pb-8 sm:pb-10 md:pb-12 mx-4 sm:mx-6 lg:mx-8">
            <div className="px-3 sm:px-4 lg:px-5 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8 sm:mb-12 md:mb-16 gap-2 md:gap-8 lg:gap-10 px-0">
                    <div className="w-full md:w-2/5 max-w-[600px] text-center md:text-left md:pl-3 lg:pl-5">
                        <h2 className="text-[#19628D]">
                            <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight tracking-normal">{excellenceData.title} </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-3/5 max-w-[680px] text-center md:text-left mt-0 md:mt-0">
                        <p className="text-black font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight tracking-normal text-justify">
                            {excellenceData.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                    {activeCareData.map((item, index) => {
                        const deptData = departmentsData[item.slug];
                        const fullDesc = deptData?.care?.description || item.description;
                        const truncatedDesc = fullDesc.length > 140 ? `${fullDesc.substring(0, 140)}...` : fullDesc;

                        // Function to bold the department name within the description
                        const renderDescription = (text, name) => {
                            if (!text) return text;
                            const parts = text.split(new RegExp(`(${name})`, 'gi'));
                            return parts.map((part, i) =>
                                part.toLowerCase() === name.toLowerCase()
                                    ? <span key={i} className="font-bold text-black">{part}</span>
                                    : part
                            );
                        };

                        return (
                            <div
                                key={item._id || index}
                                onClick={() => navigate(`/department/${item.slug}`)}
                                className={`${!showAll && index >= 4 ? 'hidden md:flex' : 'flex'} bg-[#F9F9F9] rounded-2xl px-3 py-2 sm:px-4 sm:py-4 md:px-5 md:py-5 flex-row items-center gap-2 sm:gap-4 w-full min-h-[9rem] sm:min-h-[11.5rem] lg:min-h-[12.5rem] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all duration-300`}
                            >
                                <div className="flex flex-col flex-1 min-w-0">
                                    <h3 className="font-canela font-bold text-[19px] sm:text-[21px] md:text-[23px] lg:text-[26px] leading-[115%] tracking-normal text-[#19628D] mb-1 sm:mb-2 md:mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="font-sohne font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] text-[#000000] text-justify">
                                        {renderDescription(truncatedDesc, item.title)}
                                    </p>
                                </div>
                                <div className="w-24 h-28 sm:w-24 sm:h-32 md:w-24 md:h-36 lg:w-28 lg:h-40 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain opacity-100"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {!showAll && (
                    <div className="flex justify-center mt-4 md:hidden">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 bg-[#19628D] text-white rounded-full font-sohne font-semibold text-[12px] uppercase tracking-wider hover:bg-[#145075] transition-all duration-300 shadow-sm"
                        >
                            View All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Excellence;