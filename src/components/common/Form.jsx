import React, { useState } from 'react';

const INITIAL_FORM_DATA = {
    fullName: '',
    age: '',
    gender: '',
    mobileNumber: '',
    email: '',
    concern: '',
    affectedArea: [],
    consultationPreference: ''
};

const validateForm = (values) => {
    const nextErrors = {};

    if (!values.fullName.trim()) {
        nextErrors.fullName = 'Full Name is required.';
    }

    if (!values.age.trim()) {
        nextErrors.age = 'Age is required.';
    } else if (!/^\d+$/.test(values.age.trim()) || Number(values.age.trim()) <= 0 || Number(values.age.trim()) > 120) {
        nextErrors.age = 'Enter a valid age.';
    }

    if (!values.gender) {
        nextErrors.gender = 'Please select gender.';
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
        nextErrors.concern = 'Please describe your concern.';
    }

    return nextErrors;
};

const Form = ({ inModal = false, department = 'Patient', leadSource = 'Website Form' }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});

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

    const handleGenderSelect = (gender) => {
        setFormData(prev => ({ ...prev, gender }));
        setErrors((prev) => {
            if (!prev.gender) return prev;
            const updated = { ...prev };
            delete updated.gender;
            return updated;
        });
    };

    // const handleAreaSelect = (area) => {
    //     setFormData(prev => {
    //         const areas = prev.affectedArea.includes(area)
    //             ? prev.affectedArea.filter(a => a !== area)
    //             : [...prev.affectedArea, area];
    //         return { ...prev, affectedArea: areas };
    //     });
    // };



    const [status, setStatus] = useState({ type: '', message: '' });

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

        const HELIX_LEAD_URL = "https://atreum.engage.healix360.net/api/widget/lead";
        const HELIX_WIDGET_KEY = "0f85bdcc49124e82.439edadc231dc42ef9d7fa5207331898346e2b7e2f2411edb29ddcdc430f8a52";

        const payload = {
            name: formData.fullName.trim(),
            phone: formData.mobileNumber.replace(/\D/g, ""),
            interest: leadSource === 'ADS form' ? "Ads Enquiry" : "Website Enquiry",
            message: [
                formData.concern && `Concern: ${formData.concern}`,
                formData.age && `Age: ${formData.age}`,
                formData.gender && `Gender: ${formData.gender}`,
                formData.email && `Email: ${formData.email}`,
                department && `Department: ${department}`,
                leadSource && `Lead Source: ${leadSource}`
            ].filter(Boolean).join("\n"),
        };

        try {
            const response = await fetch(HELIX_LEAD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Widget-Key': HELIX_WIDGET_KEY
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
                // Reset form
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
        <section className={inModal ? "p-0" : "px-3 md:px-12 py-4 md:py-8"}>
            <div id="form-section" className="w-full max-w-2xl mx-auto bg-[#D9D9D933] p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl">
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-[#19628D] text-center">
                        <span className="font-canela font-light text-[1.6rem] sm:text-[1.9rem] md:text-[2rem] leading-[1.05] tracking-normal">Share a few details below to help <br />us</span>
                        <span className="font-canela font-bold italic text-[1.6rem] sm:text-[1.9rem] md:text-[2rem] leading-[1.05] tracking-normal text-[#19628D]"> understand your concern.</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2.5 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 placeholder-black font-sohne ${errors.fullName
                                ? 'border-red-400 focus:ring-red-300'
                                : 'border-[#0FB1AB] focus:ring-[#0FB1AB]'
                                }`}
                        />
                        {errors.fullName ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.fullName}</p> : null}
                    </div>

                    {/* Age */}
                    <div>
                        <input
                            type="text"
                            name="age"
                            required
                            inputMode="numeric"
                            maxLength={3}
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className={`w-full sm:w-1/3 px-4 py-2.5 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 placeholder-black font-sohne ${errors.age
                                ? 'border-red-400 focus:ring-red-300'
                                : 'border-[#0FB1AB] focus:ring-[#0FB1AB]'
                                }`}
                        />
                        {errors.age ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.age}</p> : null}
                    </div>

                    {/* Gender */}
                    <div>
                        <div className={`flex items-center border rounded-lg bg-white overflow-hidden w-full sm:w-fit ${errors.gender ? 'border-red-400' : 'border-[#0FB1AB]'}`}>
                            <span className="px-3 sm:px-4 py-2.5 text-black bg-transparent font-sohne text-sm sm:text-base whitespace-nowrap">Gender</span>
                            <div className={`flex border-l flex-1 sm:flex-initial ${errors.gender ? 'border-red-400' : 'border-[#0FB1AB]'}`}>
                                <button
                                    type="button"
                                    onClick={() => handleGenderSelect('MALE')}
                                    className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors flex-1 ${formData.gender === 'MALE'
                                        ? 'text-[#0FB1AB] bg-[#0FB1AB]/10'
                                        : 'text-black hover:text-[#0FB1AB]'
                                        }`}
                                >
                                    MALE
                                </button>
                                <div className={`w-px ${errors.gender ? 'bg-red-400' : 'bg-[#0FB1AB]'}`}></div>
                                <button
                                    type="button"
                                    onClick={() => handleGenderSelect('FEMALE')}
                                    className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors flex-1 ${formData.gender === 'FEMALE'
                                        ? 'text-[#0FB1AB] bg-[#0FB1AB]/10'
                                        : 'text-black hover:text-[#0FB1AB]'
                                        }`}
                                >
                                    FEMALE
                                </button>
                            </div>
                        </div>
                        {errors.gender ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.gender}</p> : null}
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <input
                            type="tel"
                            name="mobileNumber"
                            required
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2.5 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 placeholder-black  font-sohne ${errors.mobileNumber
                                ? 'border-red-400 focus:ring-red-300'
                                : 'border-[#0FB1AB] focus:ring-[#0FB1AB]'
                                }`}
                        />
                        {errors.mobileNumber ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.mobileNumber}</p> : null}
                    </div>

                    {/* Email ID */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2.5 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 placeholder-black font-sohne ${errors.email
                                ? 'border-red-400 focus:ring-red-300'
                                : 'border-[#0FB1AB] focus:ring-[#0FB1AB]'
                                }`}
                        />
                        {errors.email ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.email}</p> : null}
                    </div>

                    {/* Orthopedic Concern */}
                    <div className="pt-2">
                        <label className="block text-black text-base mb-1">{department} Concern</label>
                        <textarea
                            name="concern"
                            required
                            placeholder="Please describe your concern to us here"
                            value={formData.concern}
                            onChange={handleInputChange}
                            rows="4"
                            className={`w-full px-4 py-2.5 border rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 placeholder-black italic text-sm font-sohne ${errors.concern
                                ? 'border-red-400 focus:ring-red-300'
                                : 'border-[#0FB1AB] focus:ring-[#0FB1AB]'
                                }`}
                        ></textarea>
                        {errors.concern ? <p className="mt-1 text-xs text-red-600 font-sohne">{errors.concern}</p> : null}
                    </div>

                    {/* Affected Area */}
                    {/* <div className="pt-2">
                    <label className="block text-black text-base mb-2 font-sohne">Affected Area</label>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'SHOULDER',
                            'ELBOW',
                            'WRIST / HAND',
                            'HIP',
                            'KNEE',
                            'ANKLE / FOOT',
                            'SPINE / BACK'
                        ].map((area) => (
                            <button
                                key={area}
                                type="button"
                                onClick={() => handleAreaSelect(area)}
                                className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all duration-200 uppercase ${formData.affectedArea.includes(area)
                                    ? 'bg-[#0FB1AB]/10 border-[#0FB1AB] text-[#0FB1AB]'
                                    : 'bg-white border-[#0FB1AB] text-gray-600 hover:border-[#0FB1AB] hover:text-[#0FB1AB]'
                                    }`}
                            >
                                {area}
                            </button>
                        ))}
                    </div>
                </div> */}

                    {/* Consultation Preference */}


                    {/* Status Messages */}
                    {status.message && (
                        <div className={`text-center p-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${status.type === 'success'
                            ? 'bg-[#0FB1AB]/10 text-[#19628D] border border-[#0FB1AB]/20'
                            : status.type === 'error'
                                ? 'bg-red-50 text-red-600 border border-red-100'
                                : 'bg-[#19628D]/5 text-[#19628D]'
                            }`}>
                            {status.type === 'success' && <span className="mr-2">✓</span>}
                            {status.message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 sm:pt-6 flex justify-center">
                        <button
                            type="submit"
                            disabled={status.type === 'loading'}
                            className={`w-auto px-10 sm:px-16 py-2.5 sm:py-3 border border-[#0FB1AB] text-[#0FB1AB] text-[13px] sm:text-sm font-extrabold uppercase rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0FB1AB] focus:ring-offset-2 tracking-wider ${status.type === 'loading'
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-[#0FB1AB] hover:text-white'
                                }`}
                        >
                            {status.type === 'loading' ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form