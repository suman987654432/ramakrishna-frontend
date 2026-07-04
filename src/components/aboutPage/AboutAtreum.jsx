import React from 'react'

const AboutAtreum = () => {
  return (
    <section className="relative z-20 w-full px-3 sm:px-4 md:px-5 -mt-8 sm:-mt-5">
      <div className="relative overflow-hidden rounded-[10px] sm:rounded-[14px] border border-[#8CE0DD] bg-[#19628D66]/70 backdrop-blur-md">
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,66,94,0.76)_0%,rgba(79,137,175,0.92)_34%,rgba(79,137,175,0.95)_100%)]"></div> */}
        {/* <div className="absolute inset-x-0 top-0 h-24 sm:h-28 md:h-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(255,255,255,0))] backdrop-blur-xl"></div> */}

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 md:py-16 lg:py-[4.5rem]">
          <h2 className="self-center ml-9 text-white font-canela font-bold italic text-[1.25rem] sm:text-[1.5rem] md:text-[2.5rem] lg:text-[2rem] leading-[1.08]">
            About Atreum Hospital
          </h2>

          <p className="text-white font-sohne text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[15px] leading-tight max-w-[50ch] text-justify">
            Atreum is built on a simple purpose: to make quality healthcare affordable and accessible for every family. We combine modern medical technology with a compassionate, patient-first approach to deliver safe, specialised, and transparent care. With experienced doctors, dedicated staff, and a commitment to excellent healthcare, Atreum has become a trusted healthcare partner for the community. Established in 2019, our journey continues with the same promise: quality care for all.
          </p>
        </div>

      </div>
      <div className="mx-auto w-full max-w-[96%] h-[14px] sm:h-3 rounded-full bg-white/95"></div>
    </section>
  )
}

export default AboutAtreum