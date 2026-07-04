import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import Form from './common/Form';
const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';

const DoctorImage = ({ doctor }) => {
    const isUploaded = doctor.image?.includes('hospital/doctors');
    const src = doctor.image?.startsWith('http')
        ? (doctor.image.includes('ik.imagekit.io') ? `${doctor.image}?tr=w-800,f-auto` : doctor.image)
        : doctor.image;

    return (
        <img
            src={src}
            alt={doctor.name}
            className={`w-full h-full object-contain object-bottom pointer-events-none transition-all duration-300 ${isUploaded ? 'scale-[0.65] origin-bottom translate-x-0 lg:translate-x-0' : ''}`}
            onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
            }}
        />
    );
};

const departments = [
    "Orthopaedics", "Dermatology", "Pediatrics", "Obstetrics & Gynecology", "Plastics Surgery",
    "Critical Care", "Neurology", "Nephrology", "Endocrinology", "General Surgery",
    "Oncology", "Vascular Surgery", "ENT", "Urology", "Gastroenterology", "Physiotherapy"
];

const normalizeDepartmentName = (value = '') => (
    value
        .trim()
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/gynaec/g, 'gynec')
        .replace(/paedi/g, 'pedi')
        .replace(/orthopaed/g, 'orthoped')
        .replace(/[^a-z]/g, '')
);

const DoctorsPages = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedDept, setSelectedDept] = useState(location.state?.selectedDepartment || null);
    const [doctors, setDoctors] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedFormDept, setSelectedFormDept] = useState('Medical');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchDoctors = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
                const res = await fetch(`${API_BASE_URL}/api/doctors`, { cache: 'no-store' });
                const data = await res.json();
                setDoctors(data);
            } catch (error) {
                console.error('Failed to fetch doctors:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    useEffect(() => {
        if (location.state?.selectedDepartment) {
            setSelectedDept(location.state.selectedDepartment);
        }
    }, [location.state]);

    const filteredDoctors = !selectedDept
        ? doctors
        : selectedDept === 'Others'
            ? doctors.filter((doctor) => {
                const normalizedDept = normalizeDepartmentName(doctor.department);
                return !departments.some(d => normalizeDepartmentName(d) === normalizedDept);
            })
            : doctors.filter((doctor) =>
                normalizeDepartmentName(doctor.department) === normalizeDepartmentName(selectedDept)
            );

    const handleDeptSelect = (dept) => {
        setSelectedDept(selectedDept === dept ? null : dept);
    };

    return (
        <>
            <section className="relative border border-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl pt-7 sm:pt-9 pb-8 sm:pb-10 md:pb-12 mx-1.5 sm:mx-4 md:mx-6 lg:mx-4 mt-12 sm:mt-16 lg:mt-28 xl:mt-32 overflow-hidden">
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

                    <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-2 mb-4 sm:mb-6 lg:mb-8">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                                className={`px-3 py-1.5 rounded-[8px] border text-[0.8rem] sm:text-[0.9rem] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${selectedDept === dept
                                    ? 'bg-[#19628D] text-white border-[#19628D]'
                                    : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                        <button
                            onClick={() => handleDeptSelect('Others')}
                            className={`px-2.5 sm:px-3 py-1 rounded-[8px] border text-[12px] sm:text-[14px] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${selectedDept === 'Others'
                                ? 'bg-[#19628D] text-white border-[#19628D]'
                                : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                                }`}
                        >
                            Others
                        </button>
                        <button
                            onClick={() => setSelectedDept(null)}
                            className={`px-3 py-1.5 rounded-[8px] border text-[0.8rem] sm:text-[0.9rem] font-sohne font-medium transition-all duration-300 whitespace-nowrap ${!selectedDept
                                ? 'bg-[#19628D] text-white border-[#19628D]'
                                : 'bg-white text-[#19628D] border-[#19628D] hover:bg-[#19628D] hover:text-white'
                                }`}
                        >
                            All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 lg:gap-y-30 mt-12 sm:mt-24 px-2 sm:px-4 lg:px-0">
                    {loading ? (
                        <div className="col-span-full py-20 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#19628D] mx-auto mb-4"></div>
                            <p className="font-sohne text-[18px] text-gray-500">Loading Doctors...</p>
                        </div>
                    ) : filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor) => {
                            const displayName = doctor.name.replace(/^Dr\.?\s*/i, '');
                            const designation = doctor.designation || 'Senior Consultant';
                            const role = doctor.role || doctor.specialties?.[0] || doctor.department;
                            const timingRaw = doctor.consultationTiming || doctor.schedule || doctor.timing || '';
                            const timing = timingRaw ? timingRaw.replace(/\s+:\s+/g, ': ') : '';

                            return (
                                <article
                                    key={doctor._id || doctor.id}
                                    className="relative w-full mx-auto sm:w-full bg-[#F3F7F8] rounded-[18px] md:rounded-[10px] p-4 sm:p-6 lg:p-4 xl:p-6 flex flex-row items-center justify-end min-h-[140px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[150px] xl:min-h-[170px] overflow-visible shadow-sm border border-gray-100/50"
                                >
                                    {/* Clinician Portrait */}
                                    <div className="absolute bottom-0 -left-24 sm:-left-3 md:-left-8 lg:-left-16 xl:-left-20 2xl:-left-24 w-[350px] sm:w-[250px] md:w-[380px] lg:w-[340px] xl:w-[450px] 2xl:w-[480px] h-[300px] sm:h-[520px] md:h-[450px] lg:h-[420px] xl:h-[530px] 2xl:h-[550px] z-10 flex items-end pointer-events-none">
                                        <DoctorImage doctor={doctor} />
                                    </div>

                                    {/* Clinical Details - Information Hierarchy */}
                                    <div className="relative w-[65%] sm:w-[60%] md:w-[65%] flex flex-col items-start text-left gap-1 md:gap-1 z-20 pl-14 sm:pl-12 lg:pl-14 xl:pl-20 2xl:pl-32">

                                        {/* Mobile Profile Navigation Arrow (Hidden on Desktop) */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/doctor-profile/${doctor._id || doctor.id}`);
                                            }}
                                            className="absolute top-[-10px] right-[10px] w-8 h-8 flex sm:hidden bg-white border-[1.5px] border-[#19628D] text-[#19628D] rounded-full items-center justify-center shadow-md z-50 pointer-events-auto group"
                                            aria-label="View Profile"
                                            title="View Profile"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </button>

                                        {/* Header Credentials */}
                                        <div className="w-full mt-6 sm:mt-4 md:mt-2 lg:mt-4">
                                            <h3 className="text-[16px] sm:text-[24px] lg:text-[24px] xl:text-[30px] font-canela font-normal text-[#0B5D85] leading-tight flex items-baseline gap-x-1 whitespace-nowrap ">
                                                <span className="font-medium mr-0.5 sm:mr-1">Dr</span>
                                                <span className="font-bold">{displayName}</span>
                                            </h3>
                                        </div>

                                        {/* Departmental Intel */}
                                        <div className="space-y-0.5 sm:space-y-1">
                                            <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.4vw,17px)] font-sohne text-gray-900 tracking-normal uppercase leading-tight">
                                                {role} <br /> <span className="font-bold normal-case text-[11px] sm:text-[14px]">{doctor.experience ? `${doctor.experience} | ` : ''}<span className="italic">{designation}</span></span>
                                            </p>
                                            <div className="space-y-0.5">
                                                {timing && (
                                                    <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.5vw,18px)] text-gray-900 font-bold tracking-tight leading-tight mt-1 sm:mt-12 lg:mt-8 xl:mt-16 2xl:mt-28 ml-0 sm:ml-4 lg:ml-5 xl:ml-8 2xl:ml-10">
                                                        <span>{doctor.days || "Mon - Sat"}</span>
                                                        <span className="ml-3 sm:ml-4">{timing}</span>
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Engagement CTA - Distinctive Bracketed Style */}
                                        <div className="relative z-50 flex items-center justify-start w-full">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedFormDept(doctor.department);
                                                    setIsFormOpen(true);
                                                }}
                                                className="bg-[#0FB1AB] text-white py-1.5 sm:py-2 rounded-lg font-sohne font-semibold text-[9px] sm:text-[11px] md:text-[14px] lg:text-[12px] xl:text-[16px] flex items-center justify-center tracking-widest uppercase shadow-md hover:bg-[#0da09a] transition-all duration-300 whitespace-nowrap ml-0 sm:ml-4 lg:ml-5 xl:ml-8 2xl:ml-10 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[160px] xl:w-[240px] 2xl:w-[260px] pointer-events-auto"
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>

                                    {/* Desktop Profile Navigation Arrow (Hidden on Mobile) */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/doctor-profile/${doctor._id || doctor.id}`);
                                        }}
                                        className="hidden sm:flex absolute sm:bottom-[16px] sm:right-[16px] lg:bottom-[20px] lg:right-[20px] xl:bottom-[24px] xl:right-[24px] w-8 h-8 xl:w-10 xl:h-10 bg-white border-[1.5px] border-[#19628D] text-[#19628D] rounded-full items-center justify-center shadow-md z-50 pointer-events-auto hover:bg-[#19628D] hover:text-white transition-all duration-300 group"
                                        aria-label="View Profile"
                                        title="View Profile"
                                    >
                                        <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </article>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-[#0B5D85] font-canela text-[24px]">No doctors found for this department.</p>
                        </div>
                    )}
                </div>
            </section>

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
                            <Form inModal={true} department={selectedFormDept} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};



export default DoctorsPages;