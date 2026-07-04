import React, { useState } from 'react';

const AppointmentFormCard = ({ doctorOptions = [{ name: 'Dr. Sujay B R' }], departmentName = 'General Surgery' }) => {
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
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ selectedDoctor: true, name: true, phone: true, email: true, concern: true });
        const selectedDoctorError = validateDoctor(formData.selectedDoctor);
        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
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
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://atreum.onrender.com';
                const HELIX_LEAD_URL = `${API_BASE_URL}/api/submit-lead`;

                const payload = {
                    name: formData.name.trim(),
                    phone: formData.phone.replace(/\D/g, ""),
                    interest: "Website Enquiry",
                    message: [
                        formData.concern && `Concern: ${formData.concern}`,
                        formData.email && `Email: ${formData.email}`,
                        departmentName && `Department: ${departmentName}`,
                        formData.selectedDoctor && `Doctor: ${formData.selectedDoctor}`
                    ].filter(Boolean).join("\n")
                };

                const response = await fetch(HELIX_LEAD_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
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

    return (
        <div className="bg-white border-[1px] border-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h3 className="text-[#19628D] font-canela font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-center mb-8">
                Book an <span className="font-bold italic">Appointment</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitted || status.type === 'loading'}
                            className={`w-full bg-gray-50 border ${errors.name && touched.name ? 'border-red-400' : 'border-gray-200'} rounded-lg text-black placeholder-gray-500 px-4 py-3 sm:py-3.5 text-[15px] focus:outline-none focus:border-[#19628D] focus:bg-white font-sohne transition-colors ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                        />
                        {errors.name && touched.name && (
                            <p className="text-red-500 text-[12px] mt-1.5 font-sohne font-medium px-1">{errors.name}</p>
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
                            className={`w-full bg-gray-50 border ${errors.phone && touched.phone ? 'border-red-400' : 'border-gray-200'} rounded-lg text-black placeholder-gray-500 px-4 py-3 sm:py-3.5 text-[15px] focus:outline-none focus:border-[#19628D] focus:bg-white font-sohne transition-colors ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                        />
                        {errors.phone && touched.phone && (
                            <p className="text-red-500 text-[12px] mt-1.5 font-sohne font-medium px-1">{errors.phone}</p>
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
                            className={`w-full bg-gray-50 border ${errors.email && touched.email ? 'border-red-400' : 'border-gray-200'} rounded-lg text-black placeholder-gray-500 px-4 py-3 sm:py-3.5 text-[15px] focus:outline-none focus:border-[#19628D] focus:bg-white font-sohne transition-colors ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                        />
                        {errors.email && touched.email && (
                            <p className="text-red-500 text-[12px] mt-1.5 font-sohne font-medium px-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="relative">
                        <select
                            name="selectedDoctor"
                            value={formData.selectedDoctor}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitted || status.type === 'loading' || doctorOptions.length === 0}
                            className={`w-full bg-gray-50 border ${errors.selectedDoctor && touched.selectedDoctor ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-3 sm:py-3.5 text-[15px] focus:outline-none focus:border-[#19628D] focus:bg-white appearance-none cursor-pointer transition-colors ${formData.selectedDoctor === '' ? 'text-gray-500' : 'text-black'} ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <option value="" disabled className="text-gray-400 bg-white">
                                {doctorOptions.length > 0 ? 'Select Your Doctor' : 'No doctors available'}
                            </option>
                            {doctorOptions.map((doctor) => (
                                <option key={doctor.id || doctor.name} value={doctor.name} className="text-black bg-white">
                                    {doctor.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#19628D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {errors.selectedDoctor && touched.selectedDoctor && (
                            <p className="text-red-500 text-[12px] mt-1.5 font-sohne font-medium px-1">{errors.selectedDoctor}</p>
                        )}
                    </div>
                </div>

                <div className="pt-6 sm:pt-8 text-center">
                    {status.message && status.type !== 'success' && (
                        <p className={`text-[13px] sm:text-[14px] mb-4 sm:mb-6 px-4 py-3 rounded-lg font-medium ${status.type === 'error' ? 'text-red-700 bg-red-50' : 'text-[#19628D] bg-blue-50'}`}>
                            {status.message}
                        </p>
                    )}
                    {!isSubmitted ? (
                        <button type="submit" disabled={status.type === 'loading'} className="w-full sm:w-auto bg-[#0FB1AB] hover:bg-[#0da09a] text-white font-bold py-3.5 sm:py-4 px-8 sm:px-12 rounded-lg shadow-md hover:shadow-lg uppercase tracking-wider text-[14px] sm:text-[15px] transition-all duration-300">
                            {status.type === 'loading' ? 'SENDING...' : 'BOOK AN APPOINTMENT'}
                        </button>
                    ) : (
                        <div className="py-4 bg-[#f8fdfc] rounded-xl border border-[#e2f5f4]">
                            <h2 className="text-[#0FB1AB] font-canela font-bold text-[24px] sm:text-[28px] leading-tight mb-2">Thank You</h2>
                            <p className="text-gray-600 font-sohne font-medium text-[15px] sm:text-[16px]">Our Team will get back to you shortly.</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AppointmentFormCard;
