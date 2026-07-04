import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import doctors1 from '../../images/doctors1.png';
import stats from '../../images/image.png';
import { X } from 'lucide-react';
import Form from '../departments/Form';

const departments = [
    "Orthopedics", "Dermatology", "Pediatrics", "Gynaecology", "Plastic Surgery",
    "Critical Care", "Neurology", "Nephrology", "Endocrinology", "General Surgery",
    "Oncology", "Vascular Surgery", "ENT", "Urology", "Gastroenterology"
];

const DoctorHero = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([
        {
            id: 'default-1',
            name: 'Chetan',
            department: 'Orthopaedics',
            image: 'drchetan',
            qualification: 'MBBS, MS (Ortho)',
            designation: 'Senior Consultant',
            consultationTiming: '10:00 AM - 4:00 PM'
        },
        {
            id: 'default-2',
            name: 'Kishor',
            department: 'Neurology',
            image: 'drkishor',
            qualification: 'MBBS, MD, DM',
            designation: 'Senior Consultant',
            consultationTiming: '11:00 AM - 5:00 PM'
        },
        {
            id: 'default-3',
            name: 'Vivekanand',
            department: 'Pediatrics',
            image: 'drvivek',
            qualification: 'MBBS',
            designation: 'Consultant',
            consultationTiming: '9:30 AM - 1:00 PM'
        },



        {
            id: 'default-4',
            name: 'Radha',
            department: 'Obstetrics & Gynecology',
            image: 'drradha',
            qualification: 'MBBS, MS',
            designation: 'Senior Consultant',
            consultationTiming: '10:00 AM - 3:00 PM'
        }
    ]);
    const [selectedDept, setSelectedDept] = useState("View All");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedFormDept, setSelectedFormDept] = useState('Medical');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost'
                    ? 'http://localhost:4000'
                    : 'https://ramakrishna-backend.onrender.com';

                const response = await fetch(`${API_BASE_URL}/api/doctors`);
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const targetDepts = ["Orthopaedics", "Neurology", "Pediatrics", "Obstetrics & Gynecology"];
    const displayedDoctors = targetDepts.map(dept =>
        doctors.find(d => d.department.toLowerCase() === dept.toLowerCase())
    ).filter(Boolean);

    return (
        <section id="our-doctors" className="w-full pt-0 pb-12 sm:py-16 lg:py-10 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-[1440px] mx-auto">
                {/* Header and Filter Controls */}
                <div className="flex flex-col items-center justify-center gap-8 md:gap-10 mb-10 w-full text-center">
                    <div className="w-full flex-shrink-0">
                        <h2 className="font-canela text-[2rem] sm:text-[2.3125rem] leading-tight tracking-normal text-[#19628D]">
                            <span className='font-canela font-bold italic'>Our</span>   <span>Doctors</span>
                        </h2>
                    </div>

                    {/* Department Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:max-w-[1200px] mx-auto">
                        {departments.map((dept) => (
                            <span
                                key={dept}
                                className="px-2.5 py-1 rounded-[8px] border text-[0.75rem] sm:text-[0.875rem] font-sohne font-medium bg-white text-[#19628D] border-[#FCA61B] transition-all duration-300 whitespace-nowrap cursor-default hover:border-[#19628D]"
                            >
                                {dept}
                            </span>
                        ))}
                        <button
                            onClick={() => navigate('/doctors')}
                            className="text-[13px] sm:text-[15px] font-bold font-sohne transition-all ml-0 sm:ml-2 lg:ml-4 whitespace-nowrap cursor-pointer text-[#19628D] animate-pulse hover:scale-105"
                        >
                            View All
                        </button>
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-16 sm:gap-y-20 xl:gap-y-24 max-w-[1400px] mx-auto mt-16 sm:mt-14 lg:mt-20">
                    {displayedDoctors.length > 0 ? (
                        displayedDoctors.map((doctor) => {
                            const displayName = doctor.name.replace(/^Dr\.?\s*/i, '');
                            const qualification = doctor.qualification || doctor.qualifications || 'MBBS, MD';
                            const designation = doctor.designation || 'Senior Consultant';
                            const role = doctor.role || doctor.specialties?.[0] || doctor.department;
                            const timingRaw = doctor.consultationTiming || doctor.schedule || doctor.timing || '';
                            const timing = timingRaw.replace(/\s+:\s+/g, ': ');

                            return (
                                <article
                                    key={doctor.id}
                                    className="relative w-full mx-auto sm:w-full bg-[#F3F7F8] rounded-[18px] md:rounded-[10px] p-4 sm:p-6 lg:p-4 xl:p-6 flex flex-row items-center justify-end min-h-[140px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[150px] xl:min-h-[170px] overflow-visible shadow-sm border border-gray-100/50"
                                >
                                    {/* Clinician Portrait - Full Height on Mobile */}
                                    <div className="absolute bottom-0 -left-24 sm:-left-3 md:-left-8 lg:-left-16 xl:-left-20 2xl:-left-24 w-[350px] sm:w-[250px] md:w-[380px] lg:w-[340px] xl:w-[450px] 2xl:w-[480px] h-[300px] sm:h-[520px] md:h-[450px] lg:h-[420px] xl:h-[530px] 2xl:h-[550px] z-10 flex items-end pointer-events-none">
                                        <img
                                            src={
                                                doctor.image?.startsWith('http')
                                                    ? (doctor.image.includes('ik.imagekit.io') ? `${doctor.image}?tr=w-800` : doctor.image)
                                                    : (window.location.hostname === 'localhost'
                                                        ? `http://localhost:4000/uploads/${doctor.image}`
                                                        : `https://ramakrishna-backend.onrender.com/uploads/${doctor.image}`)
                                            }
                                            alt={doctor.name}
                                            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none"
                                            onError={(e) => {
                                                if (e.target.src !== doctors1) {
                                                    e.target.src = doctors1;
                                                }
                                            }}
                                        />
                                    </div>

                                    {/* Clinical Details - Information Hierarchy */}
                                    <div className="relative w-[65%] sm:w-[60%] md:w-[65%] lg:w-[55%] xl:w-[50%] flex flex-col items-start text-left gap-1 md:gap-1 z-20 pl-10 sm:pl-2 lg:pl-1 xl:pl-2 2xl:pl-4 lg:mr-6 xl:mr-10">
                                        {/* Header Credentials */}
                                        <div className="w-full mt-6 sm:mt-4 md:mt-2 lg:mt-4">
                                            <h3 className="text-[16px] sm:text-[24px] lg:text-[22px] xl:text-[30px] font-canela font-normal text-[#0B5D85] leading-tight flex items-baseline gap-x-1 whitespace-nowrap overflow-hidden">
                                                <span className="font-medium mr-0.5 sm:mr-1">Dr</span>
                                                <span className="font-bold">{displayName}</span>
                                            </h3>
                                        </div>

                                        {/* Departmental Intel */}
                                        <div className="space-y-0.5 sm:space-y-1">
                                            <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.4vw,17px)] font-sohne text-gray-900 tracking-wider uppercase leading-tight">
                                                {role}  <br />   <span className="italic font-bold normal-case text-[9px] sm:text-[12px]">{designation}</span>
                                            </p>
                                            <div className="space-y-0.5">
                                                <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.5vw,18px)] text-gray-900 font-bold tracking-tight leading-tight mt-1 sm:mt-12 lg:mt-8 xl:mt-16 2xl:mt-28 ml-0 sm:ml-4 lg:ml-2 xl:ml-8 2xl:ml-10">
                                                    {timing}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Engagement CTA - Distinctive Bracketed Style */}
                                        <div className="relative z-50 flex items-center justify-start gap-1 md:gap-2 w-full -ml-3 md:-ml-6">
                                            <button
                                                onClick={() => {
                                                    setSelectedFormDept(doctor.department);
                                                    setIsFormOpen(true);
                                                }}
                                                className="bg-[#FCA61B] text-white px-2.5 sm:px-4 lg:px-3 py-1.5 sm:py-2 rounded-lg font-sohne font-semibold text-[9px] sm:text-[11px] md:text-[14px] lg:text-[16px] flex items-center justify-center tracking-widest uppercase shadow-md hover:bg-[#0da09a] transition-all duration-300 whitespace-nowrap ml-4 sm:ml-8 lg:ml-6 pointer-events-auto"
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="font-sohne text-[24px] text-gray-400">No doctors found in this department.</p>
                        </div>
                    )}
                </div>
            </div>
            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="relative w-full max-w-xl my-4 sm:my-8 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-3 right-0 z-[110] p-1 rounded-full text-[#19628D] hover:bg-white transition-all active:scale-95"
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
            <div className="w-full -mt-7 sm:-mt-10 md:-mt-12 lg:-mt-14 flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
                {/* Journey Badge */}
                <div className="bg-[#F8FAFB] px-3 sm:px-6 md:px-8 py-1.5 md:py-3 rounded-md md:rounded-2xl shadow-sm border border-gray-100/50 z-20 translate-y-12 sm:translate-y-16 md:translate-y-24 lg:translate-y-48 transition-transform duration-300 mx-auto">
                    <p className="text-[#0B5D85] text-[10px] sm:text-base md:text-xl lg:text-2xl font-canela tracking-tight whitespace-nowrap text-center">
                        Our <span className="font-bold font-canela">Journey So Far</span>
                    </p>
                </div>

                <div className="w-full flex justify-center mt-0 translate-x-2 sm:translate-x-4 lg:translate-x-6">
                    <img
                        src={stats}
                        alt="Hospital Statistics"
                        className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-full lg:max-w-[1050px] h-auto object-contain z-10 mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default DoctorHero;