import React, { useState, useEffect } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { X } from 'lucide-react';
import Form from '../departments/Form';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [heroData, setHeroData] = useState({
    title: 'Your Journey towards <span class="font-bold italic">better </span><br class="hidden sm:block" /><span class="font-bold italic"> health</span> starts with <span class="font-bold italic">Atreum</span>',
    image: "https://ik.imagekit.io/omj3ygfmb/hospital/images/hero_bMUqcN9Vk.avif"
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
        const res = await fetch(`${API_BASE_URL}/api/home-page`);
        const data = await res.json();
        if (data && data.hero) {
          setHeroData(data.hero);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <div className="relative w-full font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full h-auto sm:h-screen sm:overflow-hidden">
        <div className="relative w-full">
          <img
            src={heroData.image}
            alt="Hospital Hero"
            className="w-full h-auto sm:h-screen sm:object-cover sm:object-top"
          />
          {/* Overlay - Ensuring it covers the image naturally */}
          <div className="absolute inset-0 bg-[#FCA61B]/40"></div>

          {/* Text Overlay - Adjusted to match auto-height */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-3 sm:gap-10 sm:translate-y-0">
            <h1
              className="text-white font-canela font-normal text-[1.4rem] sm:text-[2.625rem] md:text-[3.375rem] leading-[1.15] md:leading-[1.1] tracking-tight text-center max-w-[90%] md:max-w-none animate-fade-in"
              dangerouslySetInnerHTML={{ __html: heroData.title }}
            ></h1>

            <div className="animate-fade-in delay-100 bg-[#FCA61B] rounded-full">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2  hover:bg-white/20 text-white font-sohne font-semibold text-[11px] sm:text-[1.125rem] rounded-full border border-white/40 active:scale-95 transition-all duration-300 flex items-center justify-center backdrop-blur-md tracking-[0.2em] uppercase cursor-pointer"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Explore - Minimal Mobile Style */}
        <div
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <BsChevronDown className="text-white text-[1.2rem] sm:text-[1.5rem] animate-bounce" />
          <span className="text-white font-sohne font-semibold text-[0.7rem] sm:text-[1.125rem] leading-none tracking-normal">Scroll to Explore</span>
        </div>
      </div>

      {/* Appointment Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl my-4 sm:my-8 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-0 z-[110] p-1.5  rounded-full text-[#19628D] hover:bg-white transition-all active:scale-95"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2} />
            </button>
            <div className="max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-white scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <Form inModal={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;