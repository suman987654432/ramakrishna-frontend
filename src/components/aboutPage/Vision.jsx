import React from 'react'
const vision = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/vision_j_ZmMtPcT.png";
const trust = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/trust_AwSkVmuPY.png";
const patient = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/patient__vS7jZQY3.png";
const mission = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/mission_7yJE1-wa0.png";
const exprience = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/exprience_95VdFCuY_m.png";
const empathy = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/empathy_WFH_0537V.png";
const dignity = "https://ik.imagekit.io/omj3ygfmb/hospital/images/about/dignity_HcsAN3usR.png";

const Vision = () => {
    const coreValues = [
        {
            id: 1,
            icon: trust,
            title: 'Trusted Care',
            description: 'Dependable, remarkable healthcare you can rely on.',
        },
        {
            id: 2,
            icon: patient,
            title: 'Patient First',
            description: 'Your well-being guides every decision.',
        },
        {
            id: 3,
            icon: dignity,
            title: 'Dignity & Respect',
            description: 'Every individual treated with honour.',
        },
        {
            id: 4,
            icon: empathy,
            title: 'Compassion & Empathy',
            description: 'Care rooted in understanding and kindness.',
        },
        {
            id: 5,
            icon: exprience,
            title: 'Excellence in Experience',
            description: 'Delivering exceptional patient satisfaction.',
        },
    ]

    return (
        <section className="relative z-20 w-full px-3 sm:px-4 md:px-5  ">
            <div className="relative overflow-hidden rounded-[10px] sm:rounded-[14px] border border-[#8CE0DD] bg-[#43A1AF]">

                <div className="relative px-6 sm:px-8 md:px-12 lg:px-16 py-11 sm:py-12 md:py-14 lg:py-16">
                    <h2 className="text-white font-canela font-bold italic text-[1.25rem] sm:text-[1.55rem] md:text-[1.8rem] lg:text-[2.05rem] leading-[1.15]">
                        Our Vision, Mission & Core Values
                    </h2>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14">
                        <div className="space-y-6 sm:space-y-10 max-w-[33rem]">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img src={vision} alt="Vision" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
                                    <h3 className="text-white font-canela font-bold italic text-[1.2rem] sm:text-[1.55rem] leading-none">
                                        Vision
                                    </h3>
                                </div>
                                <p className="mt-3 text-white/95 font-canelaText font-light text-[15px] sm:text-[21px] leading-[22px] sm:leading-[28px] tracking-[0em] max-w-[32ch]">
                                    To deliver world-class healthcare that is accessible, reliable, economical, and consistently responsive.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img src={mission} alt="Mission" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
                                    <h3 className="text-white font-canela font-bold italic text-[1.2rem] sm:text-[1.55rem] leading-none">
                                        Mission
                                    </h3>
                                </div>
                                <p className="mt-3 text-white/95 font-canelaText font-light text-[15px] sm:text-[21px] leading-[22px] sm:leading-[30px] tracking-[0em] max-w-[34ch]">
                                    To enable healthier lives through absolute care and meaningful patient outcomes. We aim to build a healthcare brand of the highest calibre while continuously expanding our services and accessibility.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-[34rem]">
                            <h3 className="text-white font-canela font-bold italic text-[1.3rem] sm:text-[1.7rem] leading-none">
                                Core Values
                            </h3>

                            <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
                                {coreValues.map((value) => {
                                    return (
                                        <div key={value.id} className="flex items-center gap-2 sm:gap-3">
                                            <img
                                                src={value.icon}
                                                alt={value.title}
                                                className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 object-contain"
                                            />
                                            <p className="text-white/95 font-canelaText font-light text-[15px] sm:text-[21px] leading-[20px] sm:leading-[30px] tracking-[0em]">
                                                <span className="font-semibold text-white">{value.title}:</span> {value.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

   
            </div>
            <div className="mx-auto w-full max-w-[96%] h-[14px] sm:h-3 rounded-full bg-white/95"></div>
        </section>
    )
}

export default Vision