import React from 'react';

const Terms = () => {
    return (
        <div className="w-full font-sans bg-[#F8F9FA]">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Terms and Conditions"
                    />
                    {/* Overlay matching the project theme */}
                    <div className="absolute inset-0 bg-[#0e4857]/70"></div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-4 mt-16 md:mt-0">
                        <h1 className="text-white font-canela font-normal text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] text-center">
                            Terms & <span className="font-bold italic">Conditions</span>
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg text-center max-w-2xl font-sans uppercase tracking-wider">
                            Atreum Hospital
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
                    
                    <div className="prose prose-blue max-w-none text-gray-600 text-justify">
                        <h2 className="text-2xl font-bold text-[#19628D] mb-4">Acceptance of Terms</h2>
                        <p className="mb-8 leading-relaxed">
                            Welcome to Atreum Hospital. These Terms and Conditions govern your access to and use of the Atreum Hospital website, mobile applications, and online services (collectively, the "Services"). By accessing, browsing, or otherwise using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not accept these terms in their entirety, you must not access or use our Services. These terms apply to all visitors, users, patients, and others who wish to access or use the Services.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Medical Disclaimer</h2>
                        <p className="mb-4 leading-relaxed">
                            The content provided through our Services, including but not text, graphics, images, and other materials, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                        <p className="mb-8 leading-relaxed font-semibold text-gray-700">
                            Never disregard professional medical advice or delay in seeking it because of something you have read on the Atreum Hospital website. If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Use of the Services</h2>
                        <p className="mb-4 leading-relaxed">
                            You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>In any way that violates any applicable local, national, or international law or regulation.</li>
                            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", or "spam".</li>
                            <li>To impersonate or attempt to impersonate Atreum Hospital, an Atreum Hospital employee, another user, or any other person or entity.</li>
                            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Atreum Hospital or users of the Services.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Online Appointments and Teleconsultations</h2>
                        <p className="mb-4 leading-relaxed">
                            Atreum Hospital provides features allowing users to schedule appointments and participate in teleconsultations online. By using these features, you agree that:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>You will provide accurate, current, and complete information during the booking process.</li>
                            <li>Teleconsultation is not a substitute for in-person physical examination when required, and the attending physician may advise a physical visit based on their clinical judgment.</li>
                            <li>You are responsible for ensuring that you have appropriate internet connectivity and hardware to conduct teleconsultations smoothly.</li>
                            <li>Atreum Hospital is not liable for any technical failures, connectivity issues, or interruptions during the teleconsultation process.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">User Accounts and Security</h2>
                        <p className="mb-8 leading-relaxed">
                            To access certain features of the Services, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account credentials, including your username and password, and for all activities that occur under your account. You agree to notify Atreum Hospital immediately of any unauthorized access to or use of your account or any other breach of security. We have the right to disable any user account or password at any time if, in our reasonable opinion, you have failed to comply with any of the provisions of these Terms and Conditions.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Intellectual Property Rights</h2>
                        <p className="mb-8 leading-relaxed">
                            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Atreum Hospital, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without the prior written consent of Atreum Hospital.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Third-Party Links</h2>
                        <p className="mb-8 leading-relaxed">
                            If our Services contain links to other sites and resources provided by third parties, these links are provided for your convenience only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to our Services, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Limitation of Liability</h2>
                        <p className="mb-8 leading-relaxed">
                            To the fullest extent provided by law, in no event will Atreum Hospital, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Services, any websites linked to it, any content on the Services or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Changes to the Terms</h2>
                        <p className="mb-8 leading-relaxed">
                            We may revise and update these Terms and Conditions from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Services thereafter. Your continued use of the Services following the posting of revised Terms and Conditions means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Contact Information</h2>
                        <p className="mb-4 leading-relaxed">
                            If you have any questions or comments about these Terms and Conditions, please contact us at:
                        </p>
                        <p className="mb-8 font-semibold text-gray-700">
                            Atreum Hospital<br />
                            Ideal Homes Layout, Kenchenhalli, Rajarajeshwari Nagar,<br />
                            Bengaluru, Karnataka 560098<br />
                            Phone: +91 - 9606970542
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Terms;