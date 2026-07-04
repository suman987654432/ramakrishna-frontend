import React, { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppointmentFormCard from './AppointmentFormCard';
import { X } from 'lucide-react';
import Form from './departments/Form';

const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://atreum.onrender.com';

const DoctorProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://atreum.onrender.com';
                const res = await fetch(`${API_BASE_URL}/api/doctors`);
                const data = await res.json();
                const foundDoctor = id ? data.find(d => String(d.id) === String(id) || d._id === id) : null;
                setDoctor(foundDoctor);
            } catch (error) {
                console.error('Failed to fetch doctor:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchDoctor();
    }, [id]);

    const fallbackDoctor = {
        name: "Sujay B R",
        qualification: "MBBS, MS",
        department: "GENERAL SURGERY",
        designation: "Consultant",
        experience: "17+ Years",
        schedule: "7:00 PM - 8:30 PM",
        image: "drsujay"
    };

    const currentDoctor = doctor || fallbackDoctor;
    const currentDoctorId = currentDoctor.id || 22;
    const subRoles = currentDoctor.subRoles || [
        "Laparoscopic Surgery",
        "General Surgery",
        "Proctology"
    ];

    const formattedSubRoles = subRoles.flatMap(role => {
        if (role.includes(',')) {
            return role.split(',').map(part => part.trim().replace(/^&\s*/, ''));
        }
        return [role];
    });

    const expertiseItems = currentDoctor.areasOfExpertise || [
        "Minimally invasive procedures using small incisions",
        "Gynecological Laparoscopy (E.g., Ovarian Cysts, Endometriosis)",
        "Gallbladder removal (Cholecystectomy)",
        "Appendix removal (Appendectomy)",
        "Hernia Repairs",
        "Open Surgical procedures for a wide range of conditions",
        "Thyroid & Breast surgery",
        "Trauma & Emergency surgery",
        "Gastrointestinal Surgeries (E.g., Intestines, Stomach, Liver)",
        "Piles (Hemorrhoids)",
        "Anorectal Disorders Diagnosis and Treatment",
        "Fissures & Fistulas",
        "Pilonidal Sinus Treatment"
    ];

    const halfExpertise = Math.ceil(expertiseItems.length / 2);
    const leftColumnExpertise = expertiseItems.slice(0, halfExpertise);
    const rightColumnExpertise = expertiseItems.slice(halfExpertise);

    const profileName = currentDoctor.name;
    const doctorName = profileName.replace(/^Dr\.?\s*/i, '');

    const qual = currentDoctor.qualification || '';
    const dept = currentDoctor.department || currentDoctor.specialties?.[0] || '';
    const title = `${qual} ${qual && dept ? '-' : ''} ${dept}`.toUpperCase();

    const role = currentDoctor.designation || "Consultant";
    const experienceText = currentDoctor.experience || "10+ Years";
    const qualificationText = currentDoctor.qualification || "MBBS";
    const timingRaw = currentDoctor.consultationTiming || currentDoctor.schedule || currentDoctor.timing || "7:00 PM - 8:30 PM";
    const timeText = timingRaw.replace(/\s+:\s+/g, ': ');

    const calculatedImgSrc = currentDoctor.image?.startsWith('http')
        ? (currentDoctor.image.includes('ik.imagekit.io') ? `${currentDoctor.image}?tr=w-800,f-auto` : currentDoctor.image)
        : (currentDoctor.image || "https://ik.imagekit.io/omj3ygfmb/hospital/images/general/drsujay_nnnwWSzNw.webp");

    const isUploaded = currentDoctor.image?.includes('hospital/doctors');



    const departments = [
        "Orthopaedics", "Dermatology", "Pediatrics", "Obstetrics & Gynecology", "Plastics Surgery",
        "Critical Care", "Neurology", "Nephrology", "Endocrinology", "General Surgery",
        "Oncology", "Vascular Surgery", "ENT", "Urology", "Gastroenterology", "Physiotherapy"
    ];
    const [selectedDept, setSelectedDept] = useState(currentDoctor.department || null);

    const handleDeptSelect = (dept) => {
        setSelectedDept(dept);
        navigate('/doctors', { state: { selectedDepartment: dept } });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (currentDoctor.department) {
            setSelectedDept(currentDoctor.department);
        }
    }, [id, currentDoctor.department]);

    if (loading) {
        return (
            <div className="w-full min-h-[50vh] flex flex-col items-center justify-center pt-32">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#19628D]"></div>
                <p className="mt-4 text-[#19628D] font-sohne text-[18px]">Loading Doctor Profile...</p>
            </div>
        );
    }

    return (
        <>
            <section className="relative border border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-7 sm:pt-9 pb-4 md:pb-12 mx-1.5 sm:mx-4 md:mx-6 lg:mx-4 mt-12 sm:mt-16 lg:mt-28 xl:mt-32 overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-14 sm:h-20 md:h-24 bg-gradient-to-b from-[#D9D9D955] to-transparent backdrop-blur-md "></div>
                <div className="relative z-10 px-2.5 sm:px-4 lg:px-5 w-full max-w-[1800px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-5 lg:gap-8 mb-5 sm:mb-8 lg:mb-10">
                        <div className="w-full lg:w-1/3 text-left">
                            <h2 className="font-canela text-[#19628D] text-[1.75rem] sm:text-[2.1rem] lg:text-[2.25rem] leading-[1.1]">
                                <span className="font-bold italic">Our Doctors</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-2/3 text-left">
                            <p className="text-black font-sohne font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-tight max-w-[44rem] lg:ml-auto">
                                At Atreum, we combine expert doctors with advanced medical facilities to deliver care that prioritises your safety, comfort, and recovery.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-2 mb-2 sm:mb-6 lg:mb-8">
                        {departments.map((dept) => (
                            <div
                                key={dept}
                                className={`px-3 py-1.5 rounded-[8px] border text-[0.8rem] sm:text-[0.9rem] font-sohne font-medium transition-all duration-300 whitespace-nowrap cursor-default ${selectedDept === dept
                                    ? 'bg-[#19628D] text-white border-[#19628D]'
                                    : 'bg-white text-[#19628D] border-[#19628D]'
                                    }`}
                            >
                                {dept}
                            </div>
                        ))}
                        <div
                            className={`px-2.5 sm:px-3 py-1 rounded-[8px] border text-[12px] sm:text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap cursor-default ${selectedDept === 'Others'
                                ? 'bg-[#19628D] text-white border-[#19628D]'
                                : 'bg-white text-[#19628D] border-[#19628D]'
                                }`}
                        >
                            Others
                        </div>
                        <div
                            className={`px-3 py-1.5 rounded-[8px] border text-[0.8rem] sm:text-[0.9rem] font-sohne font-medium transition-all duration-300 whitespace-nowrap cursor-default ${!selectedDept
                                ? 'bg-[#19628D] text-white border-[#19628D]'
                                : 'bg-white text-[#19628D] border-[#19628D]'
                                }`}
                        >
                            All
                        </div>
                    </div>
                </div>


            </section>

            {/* Static Profile Section */}
            <div className="w-full bg-white -mt-24 sm:-mt-28 lg:-mt-16 font-sohne overflow-hidden relative z-20">
                <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:justify-center px-4 sm:px-8 md:px-6 lg:px-4 xl:px-10 gap-0 lg:gap-12 xl:gap-20 pb-10">

                    {/* Left + Middle columns wrapper */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-auto min-w-0 lg:-ml-6 xl:-ml-10">

                        {/* Column 1 (Left): Image, Bottom Bar, Specialty Details */}
                        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto flex-shrink-0">
                            {/* Image Section */}
                            <div className="flex -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-44 relative z-10 justify-center lg:justify-start w-full md:w-auto lg:-ml-6 xl:-ml-10">
                                <img
                                    src={calculatedImgSrc}
                                    alt={`Dr. ${doctorName}`}
                                    className={`w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[500px] object-contain object-bottom pointer-events-none transition-transform duration-300 ${isUploaded ? 'scale-[0.65] origin-bottom translate-x-0 lg:-translate-x-6' : ''}`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>


                            {/* Bottom Bar Section (Timings & Booking Button) */}
                            <div className={`relative w-full flex items-center justify-center lg:justify-start z-30 pb-4 md:pb-6 -mt-3 md:mt-0 ${isUploaded ? 'lg:ml-4 xl:ml-10' : 'lg:ml-12 xl:ml-20'}`}>
                                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mx-auto lg:mx-0">
                                    {/* Connecting line between time box and booking button */}
                                    <div className="absolute left-10 right-10 h-[1px] bg-gray-800 z-0 top-1/2 -translate-y-1/2 hidden sm:block"></div>

                                    <div className="relative z-10 bg-white border border-[#0FB1AB] rounded-md px-4 sm:px-8 lg:px-10 py-2 flex items-center gap-3 text-black whitespace-nowrap">
                                        <span className="font-bold text-[13px] sm:text-[14px] lg:text-[15px]">{currentDoctor.days || "Mon - Sat"}</span>
                                        <span className="font-bold text-[13px] sm:text-[14px] lg:text-[15px]">{timeText}</span>
                                    </div>

                                    <button
                                        onClick={() => setIsFormOpen(true)}
                                        className="relative z-10 bg-[#0FB1AB] text-white px-8 lg:px-10 py-2 rounded-md font-bold text-[12px] sm:text-[13px] lg:text-[14px] tracking-wider uppercase shadow-sm hover:bg-[#0da09a] transition-colors whitespace-nowrap"
                                    >
                                        BOOK AN APPOINTMENT
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Doctor Details Block */}
                            <div className="flex md:hidden flex-col items-center text-center justify-start pt-2 pb-4 z-20 w-full">
                                <h1 className="text-[22px] sm:text-[28px] text-[#19628D] font-canela leading-[1.1] max-w-[300px] sm:max-w-[450px] mx-auto">
                                    <span className="font-normal mr-2">Dr.</span>
                                    <span className="font-bold">{doctorName}</span>
                                </h1>

                                <p className="text-gray-800 text-[16px] sm:text-[18px] uppercase mt-1 mb-1.5 tracking-wide max-w-[300px] sm:max-w-[450px] leading-snug mx-auto">
                                    {title}
                                </p>

                                <div className="w-full max-w-[300px] h-[1px] bg-gray-400 mb-2 mx-auto"></div>

                                <h2 className="font-black text-[18px] sm:text-[22px] text-black">
                                    {role}
                                </h2>

                                <div className="flex flex-col items-center gap-y-1 text-[15px] sm:text-[17px] text-black max-w-[500px] leading-snug mb-2 mt-1.5 text-center w-full">
                                    {formattedSubRoles.map((item, index) => (
                                        <span key={index} className="font-semibold text-gray-800">
                                            {item}{index < formattedSubRoles.length - 1 ? ',' : ''}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Specialty/Experience/Qualification Section */}
                            <div className="w-full mt-2 md:mt-4 lg:ml-8 xl:ml-16">
                                <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center lg:items-stretch mx-auto lg:mx-0 w-fit gap-y-3 md:gap-y-0">
                                    <div className="w-full md:w-auto pr-0 md:pr-8 lg:pr-12 xl:pr-20 text-center lg:text-left flex flex-col justify-center">
                                        <h4 className="text-[#19628D] font-canela text-[16px] sm:text-[18px] lg:text-[20px] mb-1">Speciality</h4>
                                        <p className="font-bold text-black text-[13px] sm:text-[14px] lg:text-[15px]">{currentDoctor.speciality || currentDoctor.department || currentDoctor.specialties?.[0] || 'Medical'}</p>
                                    </div>

                                    <div className="hidden md:block w-[1px] h-[45px] bg-gray-400 self-center"></div>
                                    <div className="block md:hidden w-[80%] mx-auto h-[1px] bg-gray-400"></div>

                                    <div className="w-full md:w-auto px-0 md:px-8 lg:px-12 xl:px-20 text-center lg:text-left flex flex-col justify-center">
                                        <h4 className="text-[#19628D] font-canela text-[16px] sm:text-[18px] lg:text-[20px] mb-1">Experience</h4>
                                        <p className="font-bold text-black text-[13px] sm:text-[14px] lg:text-[15px]">{experienceText}</p>
                                    </div>

                                    <div className="hidden md:block w-[1px] h-[45px] bg-gray-400 self-center"></div>
                                    <div className="block md:hidden w-[80%] mx-auto h-[1px] bg-gray-400"></div>

                                    <div className="w-full md:w-auto pl-0 md:pl-8 lg:pl-12 xl:pl-20 text-center lg:text-left flex flex-col justify-center">
                                        <h4 className="text-[#19628D] font-canela text-[16px] sm:text-[18px] lg:text-[20px] mb-1">Qualification</h4>
                                        <p className="font-bold text-black text-[13px] sm:text-[14px] lg:text-[15px] leading-snug">
                                            {qualificationText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 (Middle): Doctor Details — desktop only */}
                        <div className="hidden md:flex flex-col items-center lg:items-start text-center lg:text-left justify-start pt-6 md:pt-10 lg:pt-16 xl:pt-24 z-20 w-full lg:w-auto pb-4 md:pb-12 lg:-ml-52 xl:-ml-64 lg:pr-6 xl:pr-10 min-w-0 overflow-hidden">
                            <div className="flex flex-col items-center lg:items-start max-w-full">
                                <h1 className="text-[28px] md:text-[32px] lg:text-[28px] xl:text-[36px] text-[#19628D] font-canela leading-[1.1] leading-tight whitespace-nowrap">
                                    <span className="font-normal mr-2">Dr.</span>
                                    <span className="font-bold">{doctorName}</span>
                                </h1>

                                <p className="text-gray-800 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] uppercase mt-1 mb-2 md:mb-3 tracking-wide leading-snug max-w-[320px] lg:max-w-[400px] xl:max-w-[480px]">
                                    {title}
                                </p>

                                <div className="w-full max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] h-[1px] bg-gray-400 mb-2 md:mb-4"></div>

                                <h2 className="font-black text-[18px] md:text-[22px] lg:text-[22px] xl:text-[24px] text-black">
                                    {role}
                                </h2>

                                <div className="flex flex-col items-center lg:items-start gap-y-1 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-black max-w-[320px] lg:max-w-[400px] xl:max-w-[480px] leading-snug mb-2 md:mb-4 mt-1.5 md:mt-2 w-full">
                                    {formattedSubRoles.map((item, index) => (
                                        <span key={index} className="font-semibold text-gray-800">
                                            {item}{index < formattedSubRoles.length - 1 ? ',' : ''}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 (Right): Areas of Expertise */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-start pt-2 md:pt-4 lg:pt-16 xl:pt-24 z-20 w-full lg:w-[340px] xl:w-[420px] flex-shrink-0 pb-6 md:pb-12">
                        {expertiseItems && expertiseItems.length > 0 && (
                            <div className="w-full bg-[#006492] border border-[#19628D]/50 rounded-2xl p-4 md:p-5 xl:p-6 text-center md:text-left z-20 mx-auto md:mx-0">
                                <h4 className="text-[16px] lg:text-[17px] xl:text-[18px] font-black uppercase tracking-wider text-white mb-3 md:mb-4">Areas of Expertise</h4>
                                <div className="flex flex-col gap-2 xl:gap-2.5 w-full">
                                    {expertiseItems.map((item, index) => (
                                        <div key={index} className="bg-white text-[#19628D] border border-[#19628D]/15 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl text-[13px] xl:text-[15px] font-semibold shadow-sm text-left leading-relaxed">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-400 mt-6 mb-16"></div>

                {/* Booking Form Section */}
                <div className="w-full max-w-[800px] mx-auto px-4 sm:px-8 mb-20">
                    <AppointmentFormCard
                        doctorOptions={[{ name: `Dr. ${doctorName}` }]}
                        departmentName={currentDoctor.department || 'General Surgery'}
                    />
                </div>
            </div>

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
                            <Form inModal={true} department={currentDoctor.department || 'General Surgery'} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DoctorProfilePage