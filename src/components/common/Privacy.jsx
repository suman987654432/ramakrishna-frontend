import React from 'react';

const Privacy = () => {
    return (
        <div className="w-full font-sans bg-[#F8F9FA]">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Privacy Policy"
                    />
                    {/* Overlay matching the project theme */}
                    <div className="absolute inset-0 bg-[#0e4857]/70"></div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-4 mt-16 md:mt-0">
                        <h1 className="text-white font-canela font-normal text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] text-center">
                            Privacy <span className="font-bold italic">Policy</span>
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
                        <h2 className="text-2xl font-bold text-[#19628D] mb-4">Our commitment to Privacy:</h2>
                        <p className="mb-4 leading-relaxed">
                            We are committed to protect Privacy rights of individuals whose personal information is provided to us. To affirm our commitment to protect Privacy as well as personal data, we provide this notice explaining our Information Security practices and Policies we follow in collection, storage and use of personal data including sensitive personal data as received from providers/users/you under lawful contracts or from persons directly. We ensure all our employees comply with our Privacy and Security policies. Atreum has established its policies, standards and procedures. We created this Privacy Policy to demonstrate our commitment to the protection of providers'/users' privacy and personal information. Providers/Users use of and access to the Services is subject to this Privacy Policy.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            By confirming that you are bound by this privacy policy (by the means provided on this website or app), by using the services or by otherwise giving us your information, you agree to the practices and policies outlined in this privacy policy and you hereby consent to our collection, use, process and sharing of your information as described in this privacy policy. We reserve the right to change, modify, add or delete portions of the terms of this privacy policy, at our sole discretion, at any time. If you do not agree with this privacy policy at any time, do not use any of the services or give us any of your information. If you use the services on behalf of someone else (such as your child) or an entity, you represent that you are authorised by such individual or entity to accept this privacy policy on such individual's or entity's behalf.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Collection and processing of personal information:</h2>
                        <p className="mb-4 leading-relaxed">
                            Personal information including sensitive personal data may be received, processed or stored by Atreum only under valid contracts entered into with providers/users.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            The types of personal information received by Atreum may include the following but not limited to: names, addresses of natural persons, as well as sensitive personal data such as demographic data like gender, date of birth etc, password, financial information like Bank account or credit card or debit card or other payment instrument details, medical records and biometric information etc.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Accessing or correcting your personal information:</h2>
                        <p className="mb-4 leading-relaxed">
                            At any time, the provider can request regarding their own personal information maintained at Atreum for various purposes as listed below but not limited to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>General information</li>
                            <li>Update of personal information</li>
                            <li>Deletion of personal information</li>
                        </ul>
                        <p className="mb-8 leading-relaxed">
                            Atreum will respond to such requests as soon as possible after confirming the authenticity of the requestor and the request.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">How to contact us:</h2>
                        <p className="mb-4 leading-relaxed">
                            Should you as an information provider have any grievances on the data collected, processed or stored by Atreum, you may reach out to the Grievance Officer with questions or concerns about these Privacy policies as follows:
                        </p>
                        <p className="mb-4 font-semibold text-gray-700">
                            Postal address: Privacy Officer, Ideal Homes Layout, Kenchenhalli, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
                        </p>
                        <p className="mb-8 text-sm italic text-gray-500">
                            Atreum Hospitals Online Privacy Notice Updated Sept 2018.
                        </p>

                        <p className="mb-8 leading-relaxed">
                            This Online Privacy Notice ("Notice") describes how Atreum Hospital and its affiliates ("Atreum Hospitals", "us", "our" or "we") collects, uses and shares information from or about you through any online interface (e.g., Website or mobile application) owned and controlled by us (the "Site", meaning singularly, jointly and severally, any Website or Websites). We will use and share any information that we collect from or about you in accordance with the Atreum Hospitals Privacy Notice (above), which provides choices in the use and sharing of information. When using any of our Sites, you agree to the terms and conditions of this Notice.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8 uppercase">Information Collection and Use</h2>
                        <p className="mb-8 leading-relaxed">
                            All the information provided to us by a Provider/User, including sensitive personal information, is voluntary. Personal Information that we Collect Online "Personal Information" means personally identifiable information such as information you provide, or that others provide to us on your behalf, via forms, surveys, applications, or other online fields including but not limited to name, postal, or email addresses, telephone, fax or mobile numbers.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">How We Use Personal Information</h2>
                        <p className="mb-4 leading-relaxed">
                            You understand that Atreum, either itself or with its Partners, may use certain information of yours, which has been designated as 'sensitive personal data or information. We may use Personal Information to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Respond to your inquiries and fulfill your requests;</li>
                            <li>Send you important information regarding the Site, changes to our terms, conditions, and policies and/or other administrative information;</li>
                            <li>Send you marketing communications that we believe may be of interest to you;</li>
                            <li>Personalize your experience on the Site;</li>
                            <li>Allow you to participate in surveys, contests and similar promotions and to administer these activities. Some of these activities have additional rules, which could contain additional information about how we use and disclose Personal Information;</li>
                            <li>Analyze data for our business purposes, such as audits, medical records, enhancing the Site, improving our services, identifying usage trends and determining the effectiveness of our promotional campaigns; Analyzing software usage patterns for improving product design and utility or;</li>
                            <li>For commercial purposes and in an aggregated or non-personally identifiable form for research, statistical analysis and business intelligence purposes</li>
                            <li>Control risk, to comply with laws and regulations and comply with other legal processes and law enforcement requirements.</li>
                            <li>For sale or transfer of such research, statistical, or intelligence data in an aggregated or non-personally identifiable form to our Partners.</li>
                        </ul>
                        <p className="mb-8 leading-relaxed">
                            Provider hereby consents to such use of such information by Atreum and its Partner.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">Other Information We Collect Online</h2>
                        <p className="mb-4 leading-relaxed">
                            "Other Information" is any information other than Personal Information that does not reveal your specific identity or does not directly relate to an individual, such as:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>Browser information Online Privacy Policy</li>
                            <li>Information collected through cookies, pixel tags, and other technologies</li>
                            <li>Demographic information and other information provided by you such as your date of birth;</li>
                            <li>Aggregated and De-identified Data</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">How we protect your personal information</h2>
                        <p className="mb-8 leading-relaxed">
                            To protect your personal information from unauthorized access and use, we use security measures that comply with Indian law. These measures include computer safeguards, Data and Database Encrypting, and secured files and buildings.
                        </p>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">How We Collect and Use Other Information</h2>
                        <p className="mb-4 leading-relaxed">
                            We and our third-party service providers/users, if any, may record, collect and use Other Information in a variety of ways, including:
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-4">
                            <li><strong>Through your browser:</strong> Certain information is collected by most browsers, such as your Media Access Control (MAC) address, device type, screen resolution, operating system version, and Internet browser type and version. We use this information to ensure that the Site functions properly and for security purposes.</li>
                            <li><strong>Use of cookies:</strong> Cookies are pieces of information stored directly on the device you are using. Cookies we use do not contain or capture unencrypted Personal Information. Cookies allow us to collect information such as browser type, time spent on the Site, pages visited, and language preferences. We use the information for security purposes, to facilitate navigation, to display information more effectively and to personalize your experience while visiting the Site. We also gather statistical information about the usage of the Site in order to continually improve the design and functionality, to understand how people use the Site, and to assist us with resolving questions regarding the Site.<br />You can refuse to accept these cookies and most devices and browsers offer their own privacy settings for cookies. You will need to manage your cookie settings for each device and browser you use. However, if you do not accept these cookies, you may experience some inconvenience in your use of the Site.</li>
                            <li><strong>Use of an analytics and optimization service:</strong> that tracks and analyzes activity on the Site. We use the information for security purposes, to facilitate navigation, to display information more effectively, to continually improve the design and functionality, and to understand how people use the Site.</li>
                            <li><strong>Use of pixel tags, web beacons, clear GIFs, or other technologies:</strong> These may be used in connection with some Site pages and HTML-formatted email messages to measure the effectiveness of our communications, the success of our marketing campaigns, compile statistics about usage and response rates and to assist us in resolving customers' questions regarding the use of the Site.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#19628D] mb-4 mt-8">IP Address:</h2>
                        <p className="mb-8 leading-relaxed">
                            Your IP Address is a number that is automatically assigned to the device that you are using by your Internet Service Provider. An IP Address is identified and logged automatically in our server log files whenever a user visits the Site, along with the time of the visit and the page(s) that were visited. Collecting IP Addresses is standard practice on the Internet and is done automatically by many websites. We use IP Addresses for purposes such as calculating Site usage levels, helping diagnose server problems and administering the Site.
                        </p>
                        
                        <p className="mb-12 leading-relaxed">
                            <strong>Aggregated and De-identified Data:</strong> "Aggregated and De-identified Data" is data we may create or compile from various sources, including mouse clicks and movements, scrolling activity and text you type into the Site. This information is used for business purposes, which may include offering products or services, research, marketing or analyzing market trends and other purposes consistent with applicable laws.
                        </p>

                        <h2 className="text-3xl font-bold text-[#0e4857] mb-8 mt-12 border-b border-gray-200 pb-4">ADDITIONAL INFORMATION</h2>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6">Social Media Sites</h3>
                        <p className="mb-8 leading-relaxed">
                            Atreum Hospital provides experiences on social media platforms such as Facebook®, Instagram® and LinkedIn® that enable online sharing and collaboration among users who have registered to use them. Any content you post, such as pictures, information, opinions or any Personal Information that you make available to other participants on these social platforms, is subject to the Terms of Use and Privacy Policies of those platforms. Please refer to them to better understand your rights and obligations with regard to such content.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6">Law Enforcement</h3>
                        <p className="mb-8 leading-relaxed">
                            If required by law, we may provide any and all information we have about you to law enforcement or other government agencies, pursuant to a subpoena, warrant or other order by a court of competent jurisdiction. Where required by applicable law, we will require written documentation of the request, proof of the identity of the law enforcement official making the request, and we will take steps to authenticate the validity of the request. Any law enforcement or government agency request submitted with less than a court-issued order will be evaluated on a case-by-case basis according to the need and urgency, as well as the particular law enforcement agency making the request.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6">Links</h3>
                        <p className="mb-8 leading-relaxed">
                            The Site may contain links to other websites. Please be aware that we are not responsible for the content or privacy practices of other websites to which we link. We do not exercise control over the sites that may be displayed as search results or links from within our Website/App, Services. These other sites may place their own cookies or other files on the Users' computer, collect data or solicit personal information from the Users, for which Atreum is not responsible or liable. Accordingly, Atreum does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does Atreum guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites. The inclusion or exclusion does not imply any endorsement by Atreum of the website, the website's provider, or the information on the website. If you decide to visit a third party website linked to the our Website, you do this entirely at your own risk. You should also be aware that, when you voluntarily disclose personal information in public forums, such information may be collected by others and may result in receiving unsolicited messages. We strongly encourage you to be aware that when you leave our Site you should read the privacy statements of each and every website that collects personally identifiable information.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6 uppercase">Casual Visitors Note</h3>
                        <p className="mb-8 leading-relaxed">
                            No sensitive personal data or information is automatically collected by Atreum from any casual visitors of this website, who are merely perusing the website/App. Nevertheless, certain provisions of this Privacy Policy are applicable to even such casual visitors, and such casual visitors are also required to read and understand the privacy statements set out herein, failing which they are required to leave the Website immediately. You are not a casual visitor if you have willingly submitted any personal data or information to Atreum through any means, including email, post or through the registration process on the Website or App. All such visitors will be deemed to be and will be treated as, Users for the purposes of this Privacy Policy, and in which case, all the statements in this Privacy Policy apply to such persons.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6">Security</h3>
                        <p className="mb-4 leading-relaxed">
                            To maintain the accuracy of the Personal Data, as well as to prevent unauthorized access and ensure the correct use of Personal Data, we have implemented appropriate physical, technical, and administrative measures to safeguard and secure the Personal Data we collect.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            We use Secure Socket Layer (SSL) protocol—an industry standard for encryption over the Internet—to protect in transmission the Personal Data we collect online. When you type in sensitive information, it will be automatically converted into codes before being securely dispatched over the Internet. All electronic Personal Data that we maintain in DB is securely stored and further protected through our use of appropriate access controls.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            In addition, to better protect certain Personal Data, some areas of the website channels are inaccessible unless you supply individually identifiable and verifiable information.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            As stated above, in some instances we may entrust Personal Data to third party service providers/users (including service providers/users outside of your jurisdiction) upon your acceptance, binding them to protect the security of Personal Data and only to use it for the purposes we specify.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            Providers' Personal Information is maintained by Atreum in electronic form on its or its employees and Partners equipment. Such information may also be converted to physical form from time to time. We take necessary precautions to protect your personal information both online and off-line, and implements reasonable security practices and measures including certain managerial, technical, operational and physical security control measures that are commensurate with respect to the information being collected and the nature of Atreum's business. Atreum makes all User information accessible to its employees only on a need-to-know basis.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Notwithstanding the above, Atreum is not responsible for the confidentiality, security or distribution of your personal information by our Partners and third parties outside the scope of our agreement with such Partners and third parties. Further, Atreum and its Partners shall not be responsible for any breach of security or for any actions of any third parties or events that are beyond the reasonable control of Atreum and its Partners including, acts of government, computer hacking, unauthorised access to computer data and storage device, computer crashes, breach of security and encryption, poor quality of Internet service or telephone service of the User etc.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6">Choice / Opt Out</h3>
                        <p className="mb-8 leading-relaxed">
                            From time to time, we may send you e-mail, e-mail newsletters or Site news updates alerting you to new features, products, promotions, or services pertaining to the Site. If you no longer wish to receive these materials from us you may opt-out of receiving them. We will gladly comply with your requests for removal. Opt-Out Procedure: In compliance with the Can-Spam Act, on each marketing email transmitted by the Site, there are instructions for opting out of receiving future emails. Such instructions may include, without limitation: (a) clicking a link on the email which sends a reply to the sender's server instructing the server of the sender's desire to opt-out of future emails, or (b) instructions for mailing a written request to be removed from future emails. All requests to opt-out of future emails will be respected.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6 uppercase">Updates to this Online Privacy Notice</h3>
                        <p className="mb-8 leading-relaxed">
                            In the future, we may need to change this Online Privacy Notice or the Atreum Hospital Consumer Privacy Notice. Please review it periodically. All changes will be made here so that you will always know what information we gather, how we might use that information and whether we may share it with anyone. Any change to a Privacy Notice will become effective when we post the revised Notice on the Site. Your use of the Site following these revisions acknowledges your receipt of the revision and your agreement to and acceptance of the revised Privacy Notice.
                        </p>

                        <h3 className="text-xl font-bold text-[#19628D] mb-4 mt-6 uppercase">Consent to this Policy</h3>
                        <p className="mb-8 leading-relaxed">
                            You acknowledge that this Privacy Policy is a part of the Terms of Use of the Website/App and the other Services, and you unconditionally agree that becoming a User of the Website, the App and its Services signifies your assent to this Privacy Policy. Your visit to the Website, use of the App and use of the Services is subject to this Privacy Policy and the Terms of Use. By affirming your assent to this Privacy Policy, you provide your consent to such collection as required under applicable law. Our Services may be unavailable to you in the event such consent is not given.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Privacy;