
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import doctors1 from "../../images/doctors1.png";
// import stats from "../../images/stats.avif"
// const doctors = [
//     {
//         id: 1,
//         name: "Dr. Anil Kumar H",
//         qualification: "(MBBS, MD) Senior Consultant",
//         specialty: "General Physician",
//         timing: "Mon - Fri \u00A0 9:00AM to 5:00PM"
//     },
//     {
//         id: 2,
//         name: "Dr. Sarah Johnson",
//         qualification: "(MS, Ortho) Senior Surgeon",
//         specialty: "Orthopedic Surgeon",
//         timing: "Mon - Sat \u00A0 10:00AM to 6:00PM"
//     },
//     {
//         id: 3,
//         name: "Dr. Michael Chen",
//         qualification: "(MD, Rheumatology) Specialist",
//         specialty: "Joint Replacement Specialist",
//         timing: "Tue - Sun \u00A0 8:00AM to 4:00PM"
//     }
// ];

// const Special = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
//     };

//     const currentDoctor = doctors[currentIndex];

//     return (
//         <div id="doctor-specialists" className="w-full py-6 overflow-hidden relative z-30">
//             <div className="px-4 w-full max-w-[1800px] mx-auto">

//                 <div className="bg-[#D9D9D933] rounded-[40px] px-6 py-4 md:px-12 md:py-6 lg:py-0 relative z-20">

//                     <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

//                         {/* Left Content Section */}
//                         <div className="w-full lg:w-[45%] space-y-12 pl-0 lg:pl-4 py-2 lg:py-4 flex flex-col items-center lg:items-start text-center lg:text-left">

//                             <div className="w-full flex flex-col items-center lg:items-start gap-1 mb-4 lg:ml-12">
//                                 {/* Name and Qualification */}
//                                 <div className="space-y-1 mt-4">
//                                     <h3 className="font-canela font-normal text-[31px] leading-[100%] tracking-normal text-[#19628D] mb-0.5">
//                                         {currentDoctor.name.split(' ')[0]} <span className="font-canela font-bold text-[31px] leading-[100%] tracking-normal">{currentDoctor.name.split(' ').slice(1).join(' ')}</span> </h3>

//                                     <p className="text-[#19628D] font-canela italic text-[20px]">
//                                         {currentDoctor.qualification.includes(')') ? (
//                                             <>
//                                                 <span className="font-medium text-[20px] not-italic leading-[100%] tracking-normal">
//                                                     {currentDoctor.qualification.split(')')[0]})
//                                                 </span>
//                                                 {currentDoctor.qualification.split(')')[1]}
//                                             </>
//                                         ) : (
//                                             currentDoctor.qualification
//                                         )}
//                                     </p>
//                                 </div>

//                                 {/* Divider with Navigation */}
//                                 <div className="flex items-center gap-1 w-full max-w-[400px] lg:-ml-12">
//                                     <button
//                                         onClick={handlePrev}
//                                         className="text-[#19628D] hover:text-[#0e4857] transition-colors p-1"
//                                     >
//                                         <ChevronLeft size={28} strokeWidth={2} />
//                                     </button>
//                                     <div className="h-[1px] bg-[#6B8E9B] flex-1"></div>
//                                     <button
//                                         onClick={handleNext}
//                                         className="text-[#19628D] hover:text-[#0e4857] transition-colors p-1"
//                                     >
//                                         <ChevronRight size={28} strokeWidth={2} />
//                                     </button>
//                                 </div>

//                                 {/* Details */}
//                                 <div className="space-y-0.5 -mt-2">
//                                     <p className="text-black font-sohne font-normal text-[20px] leading-[100%] tracking-normal">
//                                         {currentDoctor.specialty}
//                                     </p>
//                                     <p className="text-black font-sohne font-bold text-[18px]">
//                                         {currentDoctor.timing}
//                                     </p>
//                                 </div>

//                                 {/* Button */}
//                                 <div>
//                                     <a href="tel:9606970542" className="bg-[#1EBAB3] hover:bg-[#189d97] !text-white font-sohne font-bold text-[15px] py-2 px-6 rounded-md shadow-sm uppercase tracking-wide transition-all inline-block text-center">
//                                         Book an Appointment
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className="w-full">
//                                 <h2 className="text-[#19628D] mb-4">
//                                     <span className="font-canela font-light text-[31px] leading-[100%] tracking-normal">Orthopaedic </span>
//                                     <span className="font-canela font-black text-[31px] leading-[100%] tracking-normal italic">Specialists</span>
//                                 </h2>
//                                 <p className="text-gray-700 font-sohne font-normal text-[16px] leading-[20px] tracking-normal max-w-md mx-auto lg:mx-0">
//                                     The Orthopaedic Specialists at Atreum Hospitals represent a multi-disciplinary team
//                                     of experienced consultants, each focused on a specific area of musculoskeletal care.
//                                     Working within a unified clinical framework, they combine specialised expertise with
//                                     collaborative decision-making to deliver precise, patient-centred treatment.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Right Image Section */}
//                         <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
//                             <img
//                                 src={doctors1}
//                                 alt="Doctor's Desk"
//                                 className="w-full h-auto object-contain  lg:scale-125 lg:origin-right lg:translate-x-16 lg:-mt-40"
//                             />
//                         </div>

//                     </div>
//                 </div>











//                 {/* --- Journey Section (Integrated) --- */}



//                 <section className="w-full max-w-4xl mx-auto py-20 px-4 relative">
//                     {/* Title */}
//                     <div className="flex justify-center mb-4">
//                         <div className="bg-[#D9D9D933] px-8 py-3 rounded-md  ">
//                             <h2
//                                 className="text-foreground  text-[28px] leading-[100%] text-[#19628D] tracking-[0%]"
//                                 style={{ fontFamily: "Canela Deck Trial" }}
//                             >
//                                 Our <span className="font-bold text-[#19628D]">Journey So Far</span>
//                             </h2>
//                         </div>
//                     </div>

//                     {/* Stats Image */}
//                     <div className="w-full mx-auto flex justify-center -mt-[150px]">
//                         <img
//                             src={stats}
//                             alt="Our Journey Statistics"
//                             className="w-full h-auto object-contain"
//                         />
//                     </div>
//                 </section>



//             </div>
//         </div>
//     );
// };

// export default Special;