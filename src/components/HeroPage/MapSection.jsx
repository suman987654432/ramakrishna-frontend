
import React from 'react';

const MapSection = () => {
  return (
    <section className="relative z-20 mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 mt-8 sm:mt-24 lg:mt-20 mb-8 sm:mb-16">
      <div className=" border-b border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-10 gap-4 sm:gap-6 px-2">
          <div className="md:w-1/2">
            <h2 className="text-[#19628D]">
              <span className="font-canela font-bold italic text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-tight tracking-normal">Find Us Here</span>
            </h2>
            <p className="text-black font-sohne font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] mt-2 md:mt-4">
              Visit us at our Rajarajeshwari Nagar facility for world-class healthcare services.
            </p>
          </div>

        </div>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6146027671293!2d77.51324207522298!3d12.932473887379341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f406dae7723%3A0x7decf2b8558c0937!2sATREUM%20SPECIALITY%20HOSPITAL%20RR%20Nagar%20%7C%20Orthopedician%20%7C%20Gastroenterologist%20%7C%20Urologist%20%7C%20Neurologist%20%7C%20Physician!5e0!3m2!1sen!2sin!4v1776364182379!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
