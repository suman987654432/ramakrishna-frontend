import React from 'react';

const Insurance = () => {

    return (
        <div className="w-full font-sans bg-[#F8F9FA]">

            {/* Hero Section */}
            <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Insurance & TPA Services"
                    />
                    {/* Overlay matching the project theme */}
                    <div className="absolute inset-0 bg-[#0e4857]/70"></div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-4 mt-16 md:mt-0">
                        <h1 className="text-white font-canela font-normal text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] text-center">
                            Insurance & <span className="font-bold italic">TPA</span>
                        </h1>
                        {/* <p className="text-white/90 text-sm sm:text-base md:text-lg text-center max-w-2xl font-sans uppercase tracking-wider">
                            Atreum Hospital
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                {/* Text Information Section */}
                <div className="p-8 sm:p-12">
                    <div className="prose prose-blue max-w-none text-gray-600 text-justify">
                        <h2 className="text-2xl font-bold text-[#19628D] mb-4">Cashless Hospitalization</h2>
                        <p className="mb-8 leading-relaxed">
                            At Atreum Hospital, we understand that medical emergencies can be financially stressful. To ease this burden, we have partnered with leading Health Insurance Providers and Third-Party Administrators (TPAs) to offer seamless cashless hospitalization facilities. Our dedicated Insurance Desk is available to assist you throughout the admission and discharge process, ensuring a hassle-free experience so you can focus entirely on your recovery.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">How to Avail Cashless Facility</h2>
                        <ul className="list-disc pl-6 mb-8 space-y-4">
                            <li>
                                <strong className="text-gray-800">Planned Hospitalization:</strong> Please visit our TPA desk at least 48 to 72 hours prior to your scheduled admission. Submit the pre-authorization form duly filled by your consulting doctor along with the necessary documents.
                            </li>
                            <li>
                                <strong className="text-gray-800">Emergency Hospitalization:</strong> In case of an emergency, you can avail the cashless facility by presenting your health insurance card at the TPA desk within 24 hours of admission. Our team will fast-track the pre-authorization process.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Documents Required</h2>
                        <p className="mb-4 leading-relaxed">
                            To ensure a smooth approval process for your cashless claim, please carry the following documents:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <ul className="list-disc pl-4 space-y-2">
                                    <li>Health Insurance Card / TPA ID Card</li>
                                    <li>Government-issued ID Proof (Aadhar Card, PAN Card, Voter ID, or Passport)</li>
                                    <li>Doctor's Admission Advice / Prescription</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <ul className="list-disc pl-4 space-y-2">
                                    <li>Past Medical Reports & Investigation Results</li>
                                    <li>Corporate Employee ID (if covered under a corporate group policy)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-[#19628D]/5 rounded-xl border border-[#19628D]/10">
                            <h3 className="text-xl font-bold text-[#0e4857] mb-3">Important Note</h3>
                            <p className="leading-relaxed text-gray-700">
                                The approval or denial of cashless hospitalization is solely at the discretion of your Insurance Provider or TPA. In the event that a cashless claim is denied, the patient or patient's family will be required to settle the hospital bills directly and may later apply for reimbursement from their insurer.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Insurance;