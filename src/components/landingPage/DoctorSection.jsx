import React, { useMemo, useState, useEffect } from 'react';

const drchetan = "https://ik.imagekit.io/omj3ygfmb/hospital/ads/drchetan_5hs3hhUO5.webp";
const drgopal = "https://ik.imagekit.io/omj3ygfmb/hospital/ads/drgopal_PCP9EyYQd.webp";
const stats = "https://ik.imagekit.io/omj3ygfmb/hospital/images/stats_g3KtbwfeZ.avif";
const drkishor = "https://ik.imagekit.io/omj3ygfmb/hospital/images/drkishor_z7Pexp9sy.webp";

const imageMap = {
  "drchetan": drchetan,
  "drgopal": drgopal,
  "drkishor": drkishor,
};

const DoctorSection = ({ data, onBookAppointment }) => {
  const [doctors, setDoctors] = useState([]);
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

  // Filter doctors based on department from data
  const filteredDoctors = useMemo(() => {
    if (!doctors.length) return [];

    const targetDept = (data?.department || "orthopaedics").toLowerCase().trim();
    const targetDepts = targetDept.split(',').map(d => d.trim()).filter(d => d);

    const escapeRegExp = (string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const isWordMatch = (text, search) => {
      if (!text || !search) return false;
      if (text === search) return true;
      try {
        const regex = new RegExp(`\\b${escapeRegExp(search)}\\b`, 'i');
        return regex.test(text);
      } catch (e) {
        return text.includes(search);
      }
    };

    return doctors.filter(doc => {
      const docDept = (doc.department || "").toLowerCase().trim();
      const docSpecialties = Array.isArray(doc.specialties)
        ? doc.specialties.map(s => s.toLowerCase().trim())
        : (doc.specialties || "").toLowerCase().split(',').map(s => s.trim());

      // Match if department is in the list
      const deptMatch = targetDepts.some(t => isWordMatch(docDept, t) || isWordMatch(t, docDept));

      // Match if any specialty matches
      const specialtyMatch = targetDepts.some(t => docSpecialties.some(s => isWordMatch(s, t) || isWordMatch(t, s)));

      return deptMatch || specialtyMatch;
    });
  }, [data, doctors]);


  if (!data) return null;

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 py-10 md:py-14 font-sohne -mt-16">
      {/* Header Section */}
      <div className="flex justify-center mt-4 mb-8 md:mb-12">
        <h2
          className="text-[clamp(22px,4.5vw,53px)] font-canela text-[#0B5D85] leading-tight md:leading-[1.2] flex flex-row items-center md:items-end gap-1 sm:gap-4 text-center md:text-right tracking-tight"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      </div>

      {/* Grid of Doctor Cards */}
      <div className={`grid grid-cols-1 gap-x-4 lg:gap-x-5 gap-y-20 lg:gap-y-30 mt-12 sm:mt-24 px-2 sm:px-4 lg:px-0 ${filteredDoctors.length === 1 ? '' : 'lg:grid-cols-2'}`}>
        {filteredDoctors.map((doctor) => {
          const isSingle = filteredDoctors.length === 1;
          const displayName = doctor.name.replace(/^Dr\.?\s*/i, '');
          const designation = doctor.designation || 'Senior Consultant';
          const role = doctor.specialties?.[0] || doctor.department;
          const timing = doctor.schedule || '';

          return (
            <article
              key={doctor._id}
              className={`relative mx-auto mt-12 sm:mt-16 md:mt-20 bg-[#F3F7F8] rounded-[18px] md:rounded-[10px] p-4 sm:p-6 lg:p-4 xl:p-6 flex flex-row  overflow-visible shadow-sm border border-gray-100/50 min-h-[140px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[150px] xl:min-h-[170px] ${isSingle ? 'w-full lg:w-[90%] xl:w-[85%] justify-end' : 'w-full sm:w-full justify-end'
                }`}
            >
              <div className={`absolute bottom-0 z-10 flex items-end pointer-events-none ${isSingle
                ? '-left-32 sm:-left-8 md:-left-4 lg:left-4 xl:left-8 w-[350px] sm:w-[250px] md:w-[380px] lg:w-[420px] xl:w-[500px] h-[300px] sm:h-[520px] md:h-[450px] lg:h-[480px] xl:h-[580px]'
                : '-left-24 sm:-left-3 md:-left-8 lg:-left-16 xl:-left-20 2xl:-left-24 w-[350px] sm:w-[250px] md:w-[380px] lg:w-[340px] xl:w-[450px] 2xl:w-[480px] h-[300px] sm:h-[520px] md:h-[450px] lg:h-[420px] xl:h-[530px] 2xl:h-[550px]'
                }`}>
                <img
                  src={
                    doctor.image?.startsWith('http')
                      ? (doctor.image.includes('ik.imagekit.io') ? `${doctor.image}?tr=w-500,f-auto` : doctor.image)
                      : (imageMap[doctor.image] || (
                        window.location.hostname === 'localhost'
                          ? `http://localhost:4000/uploads/${doctor.image}`
                          : `https://ramakrishna-backend.onrender.com/uploads/${doctor.image}`
                      ))
                  }
                  alt={doctor.name}
                  className={`w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none transition-all duration-300 ${doctor.image?.includes('hospital/doctors') ? 'scale-[0.65] origin-bottom' : ''
                    }`}
                  onError={(e) => { e.target.src = drchetan }}
                />
              </div>

              <div className={`relative flex flex-col z-20 gap-1 md:gap-1 ${isSingle
                ? 'w-[50%] sm:w-[55%] md:w-[60%] lg:w-[50%] items-start text-left pl-0 md:pr-4 lg:pr-10 ml-auto'
                : 'w-[65%] sm:w-[60%] md:w-[65%] items-start text-left pl-14 sm:pl-12 lg:pl-14 xl:pl-20 2xl:pl-32'
                }`}>
                <div className="w-full mt-6 sm:mt-4 md:mt-2 lg:mt-4 flex justify-start">
                  <h3 className="text-[16px] sm:text-[24px] lg:text-[22px] xl:text-[30px] font-canela font-normal text-[#0B5D85] leading-tight flex items-baseline gap-x-1 whitespace-nowrap overflow-hidden">
                    <span className="font-medium mr-0.5 sm:mr-1">Dr</span>
                    <span className="font-bold">{displayName}</span>
                  </h3>
                </div>

                <div className="space-y-0.5 sm:space-y-1 w-full">
                  <p className="text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.4vw,17px)] font-sohne text-gray-900 tracking-normal uppercase leading-tight text-left">
                    {role} <br /> <span className="font-bold normal-case text-[11px] sm:text-[14px]">{doctor.experience ? `${doctor.experience} | ` : ''}<span className="italic">{designation}</span></span>
                  </p>
                  <div className="space-y-0.5 w-full flex justify-start">
                    <p className={`text-[10px] sm:text-[13px] lg:text-[clamp(12px,1.5vw,18px)] text-gray-900 font-bold tracking-tight leading-tight mt-1 sm:mt-12 lg:mt-8 xl:mt-16 2xl:mt-28 ${isSingle ? 'ml-0' : 'ml-0 sm:ml-4 lg:ml-5 xl:ml-8 2xl:ml-10'
                      }`}>
                      {timing}
                    </p>
                  </div>
                </div>

                <div className={`relative z-50 flex items-center w-full ${isSingle ? 'justify-start mt-2' : 'justify-start gap-1 md:gap-2 -ml-3 md:-ml-6 lg:-ml-4 xl:-ml-6'
                  }`}>
                  <button
                    onClick={onBookAppointment}
                    className={`bg-[#0FB1AB] text-white rounded-lg font-sohne font-semibold flex items-center justify-center tracking-widest uppercase shadow-md hover:bg-[#0da09a] transition-all duration-300 whitespace-nowrap pointer-events-auto ${isSingle
                      ? 'px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-[11px] sm:text-[14px] lg:text-[16px] ml-0'
                      : 'px-2.5 sm:px-4 lg:px-3 py-1.5 sm:py-2 text-[9px] sm:text-[11px] md:text-[14px] lg:text-[16px] ml-4 sm:ml-8 lg:ml-8 xl:ml-14'
                      }`}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="w-full -mt-8 sm:-mt-10 md:-mt-14 flex flex-col items-center overflow-hidden px-4 md:px-0">
        <div className="bg-[#F8FAFB] px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-md md:rounded-2xl shadow-sm border border-gray-100/50 z-20 translate-y-16 sm:translate-y-20 md:translate-y-28 lg:translate-y-44 transition-transform duration-300">
          <p className="text-[#0B5D85] text-xs sm:text-base md:text-xl lg:text-2xl font-canela tracking-tight whitespace-nowrap">
            Our <span className="font-bold font-canela">Journey So Far</span>
          </p>
        </div>

        <img
          src={stats}
          alt="Hospital Statistics"
          className="w-[85%] sm:w-[75%] md:w-[80%] lg:w-full lg:max-w-[980px] h-auto object-contain z-10 translate-x-1 sm:translate-x-2 md:translate-x-3 lg:translate-x-5"
        />
      </div>
    </section>
  );
};

export default DoctorSection;