// import React, { useState } from 'react';
// import heroortho from "../../images/heroortho.png";
// import { Phone, MessageCircle } from 'lucide-react';

// const Ortho = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         concern: ''
//     });

//     const [status, setStatus] = useState({ type: '', message: '' });

//     const [errors, setErrors] = useState({
//         name: '',
//         phone: '',
//         concern: ''
//     });

//     const [touched, setTouched] = useState({
//         name: false,
//         phone: false,
//         concern: false
//     });

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const validateName = (name) => {
//         if (!name.trim()) {
//             return 'Name is required';
//         }
//         if (name.trim().length < 2) {
//             return 'Name must be at least 2 characters';
//         }
//         return '';
//     };

//     const validatePhone = (phone) => {
//         if (!phone.trim()) {
//             return 'Phone number is required';
//         }
//         const phoneRegex = /^[6-9]\d{9}$/;
//         if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
//             return 'Enter a valid 10-digit phone number';
//         }
//         return '';
//     };

//     const validateConcern = (concern) => {
//         if (!concern) {
//             return 'Please select your concern';
//         }
//         return '';
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));

//         // Validate on change if field was touched
//         if (touched[name]) {
//             let error = '';
//             if (name === 'name') error = validateName(value);
//             if (name === 'phone') error = validatePhone(value);
//             if (name === 'concern') error = validateConcern(value);

//             setErrors(prev => ({
//                 ...prev,
//                 [name]: error
//             }));
//         }
//     };

//     const handleBlur = (e) => {
//         const { name, value } = e.target;
//         setTouched(prev => ({
//             ...prev,
//             [name]: true
//         }));

//         let error = '';
//         if (name === 'name') error = validateName(value);
//         if (name === 'phone') error = validatePhone(value);
//         if (name === 'concern') error = validateConcern(value);

//         setErrors(prev => ({
//             ...prev,
//             [name]: error
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Mark all fields as touched
//         setTouched({
//             name: true,
//             phone: true,
//             concern: true
//         });

//         // Validate all fields
//         const nameError = validateName(formData.name);
//         const phoneError = validatePhone(formData.phone);
//         const concernError = validateConcern(formData.concern);

//         setErrors({
//             name: nameError,
//             phone: phoneError,
//             concern: concernError
//         });

//         // If no errors, submit the form
//         if (!nameError && !phoneError && !concernError) {
//             setStatus({ type: 'loading', message: 'Sending your inquiry...' });

//             try {
//                 const payload = {
//                     fullName: formData.name,
//                     age: 'N/A',
//                     gender: 'N/A',
//                     mobileNumber: formData.phone,
//                     email: '',
//                     concern: formData.concern,
//                     affectedArea: []
//                 };

//                 const response = await fetch('https://atreum.onrender.com/api/send-email', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(payload),
//                 });

//                 const data = await response.json();

//                 if (response.ok) {
//                     setStatus({ type: 'success', message: 'Thank you! Our Team will get back to you shortly.' });
//                     setFormData({
//                         name: '',
//                         phone: '',
//                         concern: ''
//                     });
//                     setIsSubmitted(true);
//                 } else {
//                     setStatus({ type: 'error', message: data.error || data.details || 'Failed to send inquiry. Please try again.' });
//                 }
//             } catch (error) {
//                 console.error('Submission Error:', error);
//                 setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
//             }
//         }
//     };

//     return (
//         <div className="relative w-full min-h-screen h-auto lg:h-screen font-sans overflow-hidden">
//             {/* Background Image */}
//             <div className="absolute inset-0 z-0">
//                 <img
//                     src={heroortho}
//                     alt="Orthopaedics Background"
//                     className="w-full h-full object-cover object-center sm:object-top"
//                 />
//                 {/* Overlay - Darker teal overlay to match the reference */}
//                 <div className="absolute inset-0 bg-[#0e4857]/60"></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
//                 <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center justify-between h-auto lg:h-fit pt-8 sm:pt-12 lg:pt-0 pb-8 sm:pb-10 lg:pb-0 gap-6 lg:gap-0">

//                     {/* Left Side Content */}
//                     <div className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-4 sm:gap-6 lg:gap-8 lg:pl-[72px] lg:mt-64">
//                         <div className="space-y-6 sm:space-y-8 lg:space-y-6">
//                             <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[36px] lg:text-[43px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-normal">
//                                 Open doors <br />
//                                 to
//                                 <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-normal"> health.</span>
//                             </h1>
//                             <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[36px] lg:text-[43px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-normal">
//                                 Open doors <br />
//                                 to
//                                 <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[54px] tracking-normal"> Atreum</span>
//                             </h1>
//                         </div>


//                     </div>
//                     {/* Right Side Form */}
//                     <div className="w-full sm:w-[400px] md:w-[420px] lg:w-[450px] mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
//                         <div className="bg-[#2C747C80] border-[1px] border-[#FFFFFF61] p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl shadow-2xl bg-blur-lg backdrop-blur-md">
//                             <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[34px] tracking-normal text-center">
//                                 <span className="font-bold italic">Unconditional care</span> begins
//                             </h3>
//                             <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[34px] tracking-normal text-center mb-3 sm:mb-4 lg:mb-5">
//                                 with knowing youuuu
//                             </h3>

//                             <form onSubmit={handleSubmit} className="space-y-2.5" noValidate>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         disabled={isSubmitted || status.type === 'loading'}
//                                         className={`w-full bg-[#ffffff1a] border ${errors.name && touched.name ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2.5 text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
//                                     />
//                                     {errors.name && touched.name && (
//                                         <p className="text-red-700 text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.name}</p>
//                                     )}
//                                 </div>

//                                 <div className="relative">
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         placeholder="Phone Number"
//                                         value={formData.phone}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         disabled={isSubmitted || status.type === 'loading'}
//                                         className={`w-full bg-[#ffffff1a] border ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2.5 text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
//                                     />
//                                     {errors.phone && touched.phone && (
//                                         <p className="text-red-700 text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.phone}</p>
//                                     )}
//                                 </div>

//                                 {/* <div className="relative">
//                                     <select
//                                         name="concern"
//                                         value={formData.concern}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         disabled={isSubmitted || status.type === 'loading'}
//                                         className={`w-full bg-[#ffffff1a] border ${errors.concern && touched.concern ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2.5 text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] appearance-none cursor-pointer ${formData.concern === '' ? 'text-white/70' : 'text-white'} ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
//                                     >
//                                         <option value="" disabled className="text-gray-400 bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">State Your Concern</option>
//                                         <option value="knee" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Knee Replacement</option>
//                                         <option value="joint" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Joint Replacement</option>
//                                         <option value="trauma" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Trauma and Fracture Care</option>
//                                         <option value="sports" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Sports Medicine Surgery</option>
//                                         <option value="hand" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Hand and Wrist Surgery</option>
//                                         <option value="deformity" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Deformity Correction</option>
//                                         <option value="pediatric" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Paediatric Ortho</option>
//                                         <option value="shoulder" className="text-white bg-[#19628DE0] font-sohne font-normal text-[14px] leading-[26px] tracking-normal">Shoulder Surgery</option>
//                                     </select>

//                                     <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none pr-4">
//                                         <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </div>
//                                     {errors.concern && touched.concern && (
//                                         <p className="text-red-700 text-xs mt-1 font-sohne font-medium  px-2 py-0.5 ">{errors.concern}</p>
//                                     )}
//                                 </div> */}

//                                 <div className="pt-3 text-center">
//                                     {status.message && status.type !== 'success' && (
//                                         <p className={`text-xs mb-3 px-2 py-1 rounded ${status.type === 'error' ? 'text-red-700 bg-red-100' : 'text-white bg-[#19628D]/30'}`}>
//                                             {status.message}
//                                         </p>
//                                     )}
//                                     {!isSubmitted ? (
//                                         <button
//                                             type="submit"
//                                             disabled={status.type === 'loading'}
//                                             className="w-full sm:w-auto bg-[#0FB1AB33] border border-[#0FFFFFF] hover:bg-[#347d8b] text-white font-bold py-2.5 px-7 rounded shadow-lg uppercase tracking-wide text-xs transition-all duration-300"
//                                         >
//                                             {status.type === 'loading' ? 'SENDING...' : 'GET COST ESTIMATnbE'}
//                                         </button>
//                                     ) : (
//                                         <div className="py-4">
//                                             <h2 className="text-white font-canela font-bold text-[28px] leading-[34px] tracking-normal mb-2">
//                                                 Thank You
//                                             </h2>
//                                             <p className="text-white font-sohne font-normal text-[15px] leading-[22px] tracking-normal">
//                                                 Our Team will get back to you shortly.
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Ortho;