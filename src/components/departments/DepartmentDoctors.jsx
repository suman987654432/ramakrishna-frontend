import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import doctors1 from '../../images/doctors1.png';
import Form from './Form';

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

const DepartmentDoctors = ({ doctors, departmentName = 'Specialty' }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedFormDept, setSelectedFormDept] = useState(departmentName);
    const [allDoctors, setAllDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost'
                    ? 'http://localhost:4000'
                    : 'https://ramakrishna-backend.onrender.com';

                const response = await fetch(`${API_BASE_URL}/api/doctors`);
                const data = await response.json();
                setAllDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const doctorList = Array.isArray(doctors) && doctors.length > 0
        ? doctors
        : allDoctors.filter(doc => normalizeDepartmentName(doc.department) === normalizeDepartmentName(departmentName));

    return (
        <section id="doctor-specialists" className={`w-full pt-4 pb-12 sm:pb-20 overflow-hidden relative ${doctorList.length > 0 ? 'mt-2 sm:mt-10' : 'mt-0'}`}>
            <div className="px-4 sm:px-6 w-full max-w-[1720px] mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-16 sm:gap-y-16 lg:gap-y-24 px-2 sm:px-4 lg:px-0 ${doctorList.length > 0 ? 'mt-12 sm:mt-20' : 'mt-4'}`}>
                    {doctorList.length > 0 ? (
                        doctorList.map((doctor) => {
                            const displayName = doctor.name.replace(/^Dr\.?\s*/i, '');
                            const designation = doctor.designation || 'Senior Consultant';
                            const role = doctor.role || doctor.specialties?.[0] || doctor.department;
                            const timingRaw = doctor.consultationTiming || doctor.schedule || doctor.timing || '';
                            const timing = timingRaw.replace(/\s+:\s+/g, ': ');

                            return (
                                <article
                                    key={doctor.id}
                                    className="relative w-full mx-auto sm:w-full bg-[#F3F7F8] rounded-[18px] md:rounded-[10px] p-4 sm:p-5 lg:p-[10px] xl:p-[12px] flex flex-row items-center justify-end min-h-[85px] sm:min-h-[130px] md:min-h-[150px] lg:min-h-[90px] xl:min-h-[105px] overflow-visible shadow-sm border border-gray-100/50"
                                >
                                    {/* Clinician Portrait */}
                                    <div className="absolute bottom-0 -left-24 sm:-left-3 md:-left-8 lg:-left-20 xl:-left-24 2xl:-left-28 w-[350px] sm:w-[250px] md:w-[380px] lg:w-[420px] xl:w-[500px] 2xl:w-[540px] h-[300px] sm:h-[520px] md:h-[450px] lg:h-[460px] xl:h-[550px]">
                                        <img
                                            src={
                                                doctor.image?.startsWith('http')
                                                    ? (doctor.image.includes('ik.imagekit.io') ? `${doctor.image}?tr=w-800` : doctor.image)
                                                    : (window.location.hostname === 'localhost'
                                                        ? `http://localhost:4000/uploads/${doctor.image}`
                                                        : `https://ramakrishna-backend.onrender.com/uploads/${doctor.image}`)
                                            }
                                            alt={doctor.name}
                                            className={`w-full h-full object-contain object-bottom pointer-events-none transition-all duration-300 ${doctor.image?.includes('hospital/doctors') ? 'scale-[0.65] origin-bottom' : ''
                                                }`}
                                            onError={(e) => {
                                                if (e.target.src !== doctors1) {
                                                    e.target.src = doctors1;
                                                }
                                            }}
                                        />
                                    </div>

                                    {/* Clinical Details */}
                                    <div className="relative w-[58%] sm:w-[60%] md:w-[65%] flex flex-col items-start text-left gap-1 md:gap-1 z-20 pl-4 sm:pl-12 lg:pl-14 xl:pl-14 2xl:pl-14">
                                        <div className="w-full mt-6 sm:mt-4 md:mt-2 lg:mt-4">
                                            <h3 className="text-[16px] sm:text-[24px] lg:text-[22px] xl:text-[30px] font-canela font-normal text-[#0B5D85] leading-tight flex items-baseline gap-x-1 whitespace-nowrap overflow-hidden">
                                                <span className="font-medium mr-0.5 sm:mr-1">Dr</span>
                                                <span className="font-bold">{displayName}</span>
                                            </h3>
                                        </div>

                                        <div className="space-y-0.5 sm:space-y-1">
                                            <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.4vw,17px)] font-sohne text-gray-900 tracking-wider uppercase leading-tight">
                                                {role}  <br />   <span className="font-bold normal-case text-[9px] sm:text-[12px]">{doctor.experience ? `${doctor.experience} | ` : ''}<span className="italic">{designation}</span></span>
                                            </p>
                                            <div className="space-y-0.5">
                                                <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.5vw,18px)] text-gray-900 font-bold tracking-tight leading-tight mt-1 sm:mt-12 lg:mt-16 xl:mt-28 ml-0 sm:ml-4 lg:ml-10">
                                                    {timing}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative z-50 flex items-center justify-start gap-1 md:gap-2 w-full -ml-3 md:-ml-6">
                                            <button
                                                onClick={() => {
                                                    setSelectedFormDept(doctor.department);
                                                    setIsFormOpen(true);
                                                }}
                                                className="bg-[#0FB1AB] text-white px-2.5 sm:px-4 lg:px-3 py-1.5 sm:py-2 rounded-lg font-sohne font-semibold text-[9px] sm:text-[11px] md:text-[14px] lg:text-[16px] flex items-center justify-center tracking-widest uppercase shadow-md hover:bg-[#0da09a] transition-all duration-300 whitespace-nowrap ml-4 sm:ml-8 lg:ml-14 pointer-events-auto"
                                            >
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-8 text-center">
                            <p className="text-[#0B5D85] font-canela text-[20px] sm:text-[24px]">Doctors will be updated soon.</p>
                        </div>
                    )}
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
                            <Form inModal={true} department={selectedFormDept} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DepartmentDoctors;