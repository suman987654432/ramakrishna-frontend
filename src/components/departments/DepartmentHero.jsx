import React, { useState } from 'react';
const herogyna = "https://ik.imagekit.io/omj3ygfmb/hospital/images/herogyna_A-z7e2L0K.png";
const heroortho = "https://ik.imagekit.io/omj3ygfmb/hospital/images/hero_VthCZ1fDg.avif";
const urologyhero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/Urology_1_V3y-pX7o2.png";
const neurohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/neurohero_1pYI2O_fC.png";
const gastrohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/gastrohero_B8K2lWwZ0.png";
const dermahero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/dermahero_q9y_O1Gg4.png";
const endohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/endohero_Bv3D8E2xR.png";
const pediahero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/pediahero_Hq6e02D4E.png";
const nephrohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/nephrohero_1Vv3H9uL8.png";
const plasticshero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/plasticshero1_PyjbxdmzC.png";
const generalhero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/generalhero_1qoIm3vHf.png";
const oncohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/oncohero_wiCgaMK0s4.png";
const vascularhero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/vascularhero_yPxMoKEw1.png";
const enthero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/enthero_avyk9_1wB.png";

const heroMap = {
    'hero.avif': heroortho,
    'herogyna.png': herogyna,
    'Urology 1.png': urologyhero,
    'neurohero.png': neurohero,
    'gastrohero.png': gastrohero,
    'dermahero.png': dermahero,
    'endohero.png': endohero,
    'pediahero.png': pediahero,
    'nephrohero.png': nephrohero,
    'plasticshero1.png': plasticshero,
    'generalhero.png': generalhero,
    'oncohero.png': oncohero,
    'vascularhero.png': vascularhero,
    'enthero.png': enthero
};

const DepartmentHero = ({ data, doctors = [], departmentName = 'Medical' }) => {
    const { image, title, title1, title2, title3, title4, formTitle, formSubtitle, centerContent } = data;

    const doctorOptions = Array.from(
        new Map((Array.isArray(doctors) ? doctors : []).map((doctor) => [doctor.name, doctor])).values()
    );

    const [formData, setFormData] = useState({
        selectedDoctor: '',
        name: '',
        phone: '',
        email: '',
        concern: ''
    });

    const [errors, setErrors] = useState({
        selectedDoctor: '',
        name: '',
        phone: '',
        email: '',
        concern: ''
    });

    const [touched, setTouched] = useState({
        selectedDoctor: false,
        name: false,
        phone: false,
        email: false,
        concern: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const validateName = (name) => {
        if (!name.trim()) return 'Name is required';
        if (name.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) return 'Phone number is required';
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) return 'Enter a valid 10-digit phone number';
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Enter a valid email address';
        return '';
    };

    const validateDoctor = (selectedDoctor) => {
        if (doctorOptions.length === 0) return '';
        if (!selectedDoctor.trim()) return 'Please select a doctor';
        return '';
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            let error = '';
            if (name === 'selectedDoctor') error = validateDoctor(value);
            if (name === 'name') error = validateName(value);
            if (name === 'phone') error = validatePhone(value);
            if (name === 'email') error = validateEmail(value);
            // if (name === 'concern') error = validateConcern(value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        let error = '';
        if (name === 'selectedDoctor') error = validateDoctor(value);
        if (name === 'name') error = validateName(value);
        if (name === 'phone') error = validatePhone(value);
        if (name === 'email') error = validateEmail(value);
        // if (name === 'concern') error = validateConcern(value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ selectedDoctor: true, name: true, phone: true, email: true, concern: true });
        const selectedDoctorError = validateDoctor(formData.selectedDoctor);
        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        // const concernError = validateConcern(formData.concern);
        setErrors({
            selectedDoctor: selectedDoctorError,
            name: nameError,
            phone: phoneError,
            email: emailError,
            concern: ''
        });

        if (!selectedDoctorError && !nameError && !phoneError && !emailError) {
            setStatus({ type: 'loading', message: 'Sending your inquiry...' });

            try {
                const payload = {
                    selectedDoctor: formData.selectedDoctor,
                    fullName: formData.name,
                    age: 'N/A',
                    gender: 'N/A',
                    mobileNumber: formData.phone,
                    email: formData.email,
                    concern: formData.concern,
                    affectedArea: [],
                    department: departmentName
                };

                const response = await fetch('https://atreum.onrender.com/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (response.ok) {
                    // Trigger lead tracking events
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: "lead_submit"
                    });


                    setStatus({ type: 'success', message: 'Thank you! Our Team will get back to you shortly.' });
                    setFormData({ selectedDoctor: '', name: '', phone: '', email: '', concern: '' });
                    setIsSubmitted(true);
                } else {
                    setStatus({ type: 'error', message: data.error || data.details || 'Failed to send inquiry. Please try again.' });
                }
            } catch (error) {
                console.error('Submission Error:', error);
                setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
            }
        }
    };

    const renderForm = () => (
        <div className="bg-[#2C747C80] border-[1px] border-[#FFFFFF61] m-px p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 rounded-xl shadow-2xl bg-blur-lg backdrop-blur-md">
            <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[22px] xl:text-[28px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[28px] xl:leading-[34px] tracking-normal text-center">
                <span className="font-bold italic">{formTitle}</span> {formSubtitle.split(' ')[0]}
            </h3>
            <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[22px] xl:text-[28px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[28px] xl:leading-[34px] tracking-normal text-center mb-3 sm:mb-4 md:mb-5 lg:mb-3 xl:mb-5">
                {formSubtitle.split(' ').slice(1).join(' ')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5" noValidate>


                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.name && touched.name ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.name}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.phone && touched.phone && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.phone}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.email && touched.email ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.email && touched.email && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.email}</p>
                    )}
                </div>
                <div className="relative">
                    <select
                        name="selectedDoctor"
                        value={formData.selectedDoctor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading' || doctorOptions.length === 0}
                        className={`w-full bg-[#ffffff1a] border ${errors.selectedDoctor && touched.selectedDoctor ? 'border-red-500' : 'border-transparent'} rounded-lg text-white px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] appearance-none cursor-pointer ${formData.selectedDoctor === '' ? 'text-white/70' : 'text-white'} ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        <option value="" disabled className="text-gray-400 bg-[#19628DE0]">
                            {doctorOptions.length > 0 ? 'Select Your Doctor' : 'No doctors available'}
                        </option>
                        {doctorOptions.map((doctor) => (
                            <option key={doctor.id || doctor.name} value={doctor.name} className="text-white bg-[#19628DE0]">
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[12px] sm:h-[8px]">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {errors.selectedDoctor && touched.selectedDoctor && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.selectedDoctor}</p>
                    )}
                </div>

                {/* <div className="relative">
                    <select
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.concern && touched.concern ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] appearance-none cursor-pointer ${formData.concern === '' ? 'text-white/70' : 'text-white'} ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        <option value="" disabled className="text-gray-400 bg-[#19628DE0]">State Your Concern</option>
                        {concerns.map((con, idx) => (
                            <option key={idx} value={con} className="text-white bg-[#19628DE0]">{con}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[12px] sm:h-[8px]">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {errors.concern && touched.concern && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.concern}</p>
                    )}
                </div> */}

                <div className="pt-2 sm:pt-3 text-center">
                    {status.message && status.type !== 'success' && (
                        <p className={`text-[11px] sm:text-xs mb-2 sm:mb-3 px-2 py-1 rounded ${status.type === 'error' ? 'text-red-700 bg-red-100' : 'text-white bg-[#19628D]/30'}`}>
                            {status.message}
                        </p>
                    )}
                    {!isSubmitted ? (
                        <button type="submit" disabled={status.type === 'loading'} className="w-full sm:w-auto bg-[#0FB1AB33] border border-[#0FFFFFF] hover:bg-[#347d8b] text-white font-bold py-2 sm:py-2.5 px-5 sm:px-7 rounded shadow-lg uppercase tracking-wide text-[10px] sm:text-xs transition-all duration-300">
                            {status.type === 'loading' ? 'SENDING...' : 'BOOK AN APPOINTMENT'}
                        </button>
                    ) : (
                        <div className="py-1">
                            <h2 className="text-white font-canela font-bold text-[20px] sm:text-[24px] leading-tight mb-1">Thank You</h2>
                            <p className="text-white font-sohne font-normal text-[12px] sm:text-[14px]">Our Team will get back to you shortly.</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );

    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen h-auto lg:h-screen font-sans overflow-x-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={heroMap[image] || (
                        image?.startsWith('http')
                            ? (image.includes('ik.imagekit.io') ? `${image}?tr=w-1400` : image)
                            : (window.location.hostname === 'localhost'
                                ? `http://localhost:4000/uploads/${image}`
                                : `https://atreum.onrender.com/uploads/${image}`)
                    )}
                    alt="Background"
                    className="w-full h-full object-cover object-top lg:object-center"
                />
                <div className="absolute inset-0 bg-[#0e4857]/55"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col px-3 sm:px-4 md:px-8 lg:px-12 justify-center pt-10 sm:pt-12 md:pt-0">
                {centerContent ? (
                    <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 py-8 lg:py-0">
                        {/* Title Section */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-[24px] xl:pl-[72px]">
                            <h1
                                className="text-white font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[36px] xl:text-[43px] leading-[26px] sm:leading-[30px] md:leading-[40px] lg:leading-[42px] xl:leading-[52px] tracking-tight text-center lg:text-left max-w-[95%] sm:max-w-[90%] lg:max-w-none"
                                dangerouslySetInnerHTML={typeof title === 'string' ? { __html: title } : undefined}
                            >
                                {typeof title !== 'string' ? title : null}
                            </h1>
                        </div>

                        {/* Form Section */}
                        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                            <div className="w-full max-w-[450px] sm:w-[360px] md:w-[420px] lg:w-[380px] xl:w-[450px]">
                                {renderForm()}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5 sm:gap-6 lg:gap-8 xl:gap-12 py-8 lg:py-0">
                        <div className="w-full lg:w-auto lg:flex-1 lg:max-w-[600px] xl:max-w-[700px] text-white flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left">
                            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6 w-full">
                                {title ? (
                                    <h1
                                        className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-normal break-words"
                                        dangerouslySetInnerHTML={typeof title === 'string' ? { __html: title } : undefined}
                                    >
                                        {typeof title !== 'string' ? title : null}
                                    </h1>
                                ) : (
                                    <>
                                        <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal break-words">
                                            {title1} <br /> to <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal">{title2}</span>
                                        </h1>
                                        <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal break-words">
                                            {title3} <br /> to <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal">{title4}</span>
                                        </h1>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* <div className="w-full sm:w-[360px] md:w-[420px] lg:w-[450px] flex-shrink-0 mx-auto lg:mx-0 lg:ml-auto">
                            {renderForm()}
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentHero;
