import React, { useState } from 'react';

const INITIAL_FORM_DATA = {
    fullName: '',
    mobileNumber: '',
    email: '',
    concern: '',
    age: '0',
    gender: 'NOT_SPECIFIED',
    affectedArea: [],
    consultationPreference: '',
};


const validateForm = (values) => {
    const nextErrors = {};

    if (!values.fullName.trim()) {
        nextErrors.fullName = 'Full Name is required.';
    }

    if (!values.mobileNumber.trim()) {
        nextErrors.mobileNumber = 'Mobile Number is required.';
    } else if (!/^\d{10}$/.test(values.mobileNumber.trim())) {
        nextErrors.mobileNumber = 'Enter a valid 10-digit mobile number.';
    }

    if (!values.email.trim()) {
        nextErrors.email = 'Email ID is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
        nextErrors.email = 'Enter a valid email address.';
    }

    if (!values.concern.trim()) {
        nextErrors.concern = 'Please type your query.';
    }

    return nextErrors;
};

const ContactSection = ({ leadSource = 'Website Form' }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors((prev) => {
            if (!prev[name]) return prev;
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus({ type: 'error', message: 'Please fill all required fields correctly.' });
            return;
        }

        setErrors({});
        setStatus({ type: 'loading', message: 'Sending your inquiry...' });

        // Use local backend if testing locally, otherwise use production
        const API_BASE_URL = window.location.hostname === 'localhost'
            ? 'http://localhost:4000'
            : 'https://atreum.onrender.com';

        try {
            const response = await fetch(`${API_BASE_URL}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, leadSource }),
            });

            const data = await response.json();

            if (response.ok) {
                // Trigger lead tracking events
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "lead_submit"
                });

                setStatus({ type: 'success', message: 'Thank you! Our Team will get back to you shortly.' });
                setFormData(INITIAL_FORM_DATA);
                setErrors({});
            } else {
                setStatus({ type: 'error', message: data.error?.message || 'Failed to send inquiry. Please try again.' });
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
        }
    };

    return (
        <section className="relative w-full px-4 md:px-12 py-4 md:py-8 flex justify-center items-center">
            {/* Main Container - Same style as Hero Section */}
            <div className="relative w-full max-w-[1440px] bg-[#D9D9D933] rounded-[24px] overflow-hidden px-4 md:px-14 py-4 md:py-10 border border-white/40 shadow-sm min-h-0">

                <div className="relative z-10 w-full flex flex-col items-center gap-4 md:gap-8 transition-all duration-300">
                    {/* Centered Heading */}
                    <h2 className="text-[clamp(19px,3.2vw,37px)] font-canela font-normal text-[#0B5D85] leading-none tracking-tight text-center">
                        Get a <span className="font-bold italic">free cost estimate</span> now
                    </h2>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-5xl grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full px-3 md:px-4 py-3 bg-white/60 border rounded-[12px] md:rounded-[15px] text-sm md:text-lg font-sohne text-[#0B5D85] placeholder:text-black/60 focus:outline-none ${errors.fullName ? 'border-red-400' : 'border-[#0FB1AB]'}`}
                            />
                            {errors.fullName && <p className="text-[10px] md:text-xs text-red-600 font-sohne">{errors.fullName}</p>}
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="tel"
                                name="mobileNumber"
                                inputMode="numeric"
                                maxLength={10}
                                placeholder="Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                className={`w-full px-3 md:px-4 py-3 bg-white/60 border rounded-[12px] md:rounded-[15px] text-sm md:text-lg font-sohne text-[#0B5D85] placeholder:text-black/60 focus:outline-none ${errors.mobileNumber ? 'border-red-400' : 'border-[#0FB1AB]'}`}
                            />
                            {errors.mobileNumber && <p className="text-[10px] md:text-xs text-red-600 font-sohne">{errors.mobileNumber}</p>}
                        </div>

                        {/* Email ID */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 md:px-4 py-3 bg-white/60 border rounded-[12px] md:rounded-[15px] text-sm md:text-lg font-sohne text-[#0B5D85] placeholder:text-black/60 focus:outline-none ${errors.email ? 'border-red-400' : 'border-[#0FB1AB]'}`}
                            />
                            {errors.email && <p className="text-[10px] md:text-xs text-red-600 font-sohne">{errors.email}</p>}
                        </div>

                        {/* Type your Query */}
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                name="concern"
                                placeholder="Type your Query"
                                value={formData.concern}
                                onChange={handleInputChange}
                                className={`w-full px-3 md:px-4 py-3 bg-white/60 border rounded-[12px] md:rounded-[15px] text-sm md:text-lg font-sohne text-[#0B5D85] placeholder:text-black/60 focus:outline-none ${errors.concern ? 'border-red-400' : 'border-[#0FB1AB]'}`}
                            />
                            {errors.concern && <p className="text-[10px] md:text-xs text-red-600 font-sohne">{errors.concern}</p>}
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div className={`col-span-2 text-center p-3 rounded-xl text-sm font-bold font-sohne tracking-wide ${status.type === 'success'
                                ? 'bg-[#0FB1AB]/10 text-[#19628D] border border-[#0FB1AB]/20'
                                : status.type === 'error'
                                    ? 'bg-red-50 text-red-600 border border-red-100'
                                    : 'bg-[#19628D]/5 text-[#19628D]'
                                }`}>
                                {status.type === 'success' && <span className="mr-2">✓</span>}
                                {status.message}
                            </div>
                        )}

                        {/* Submit Button Container */}
                        <div className="col-span-2 flex justify-center mt-2">
                            <button
                                type="submit"
                                disabled={status.type === 'loading'}
                                className={`px-5 md:px-14 py-2.5 md:py-3 bg-[#0B5D85] text-white font-sohne font-bold text-[13px] md:text-lg rounded-xl md:rounded-[10px] transition-all shadow-md active:scale-95 ${status.type === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#094d6e]'
                                    }`}
                            >
                                {status.type === 'loading' ? 'SENDING...' : 'ENQUIRE NOW'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;