import React, { useState } from 'react';

const NISMCertificationExam: React.FC = () => {
    const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        holderType: 'arnHolder',
        getInfo: true,
    });

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form or show success message
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - All About NISM Certificates Exam */}
            <section className="relative bg-white py-12 md:py-24 overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 items-start">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#243062] leading-tight">
                                All About NISM Certificates Exam
                            </h1>
                            
                            <div className="space-y-4 text-sm md:text-base text-neutral-600 leading-relaxed">
                                <p>
                                    The NISM (National Institute of Securities Markets) Certification Exam is a mandatory examination for individuals who wish to become mutual fund distributors in India. NISM is an educational institution established by the Securities and Exchange Board of India (SEBI) to enhance the quality of the securities markets.
                                </p>
                                
                                <p>
                                    The NISM-Series-V-A: Mutual Fund Distributors Certification Examination is specifically designed for individuals who want to distribute mutual fund products. This certification is a prerequisite for obtaining an AMFI Registration Number (ARN), which is essential for selling mutual funds in India.
                                </p>
                                
                                <p>
                                    Passing the NISM exam demonstrates your understanding of mutual fund products, regulations, and distribution practices, ensuring you can provide quality advice to investors.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:sticky lg:top-24">
                            <form 
                                onSubmit={handleFormSubmit}
                                className="bg-white border-2 border-green-200 rounded-lg p-6 md:p-8 shadow-sm"
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-6">
                                    Fill the Form to Know More!
                                </h2>
                                
                                <div className="space-y-4">
                                    {/* Input Fields */}
                                    <input
                                        type="text"
                                        placeholder="Enter Full Name"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                                    />
                                    
                                    <input
                                        type="email"
                                        placeholder="Enter Email ID"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                                    />
                                    
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary text-sm"
                                    />
                                    
                                    {/* Radio Buttons */}
                                    <div className="space-y-3">
                                        <p className="text-sm font-medium text-neutral-700">Currently, you are an</p>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="holderType"
                                                    value="arnHolder"
                                                    checked={formData.holderType === 'arnHolder'}
                                                    onChange={(e) => setFormData({ ...formData, holderType: e.target.value })}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-neutral-700">ARN Holder</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="holderType"
                                                    value="nonArnHolder"
                                                    checked={formData.holderType === 'nonArnHolder'}
                                                    onChange={(e) => setFormData({ ...formData, holderType: e.target.value })}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-neutral-700">Non ARN Holder</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    {/* Checkbox */}
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.getInfo}
                                            onChange={(e) => setFormData({ ...formData, getInfo: e.target.checked })}
                                            className="mt-1 w-4 h-4 text-primary focus:ring-primary rounded"
                                        />
                                        <span className="text-xs text-neutral-600 leading-relaxed">
                                            I would like to get information on products, investment options via WhatsApp, Email, SMS, phone from Nivesh
                                        </span>
                                    </label>
                                    
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Highlights Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                            Key Highlights
                        </h2>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        {/* Top Section: Left (1-5) and Right (6-10) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Left Column: Items 1-5 */}
                            <div className="flex flex-col items-center md:items-end space-y-6 md:space-y-8">
                                {[
                                    {
                                        title: 'NISM Certifications Eligibility Criteria',
                                    },
                                    {
                                        title: 'Mode to Appear in the NISM Exam',
                                    },
                                    {
                                        title: 'How Much NISM Certification Fees to be submitted?',
                                    },
                                    {
                                        title: 'What is the Validity of NISM Certificate?',
                                    },
                                    {
                                        title: 'NISM Certification Exam Pattern',
                                    },
                                ].map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 w-full max-w-lg"
                                    >
                                        <h5 className="text-lg md:text-xl font-bold text-[#243062]">
                                            {index + 1}. {highlight.title}
                                        </h5>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column: Items 6-10 */}
                            <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8">
                                {[
                                    {
                                        title: 'NISM Series VA - Name of Module',
                                    },
                                    {
                                        title: 'How to Enroll for the NISM Exam?',
                                    },
                                    {
                                        title: 'NISM Certifications Exam Syllabus',
                                    },
                                    {
                                        title: 'NISM Exam Study Material',
                                    },
                                    {
                                        title: 'Frequently Asked Questions (FAQs)',
                                    },
                                ].map((highlight, index) => (
                                    <div
                                        key={index + 5}
                                        className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 w-full max-w-lg"
                                    >
                                        <h5 className="text-lg md:text-xl font-bold text-[#243062]">
                                            {index + 6}. {highlight.title}
                                        </h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Section: Item 11 Centered */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 w-full max-w-md">
                                <h5 className="text-lg md:text-xl font-bold text-[#243062]">
                                    11. Become a Mutual Fund Distributor
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NISM Exam Eligibility Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            NISM Exam Eligibility
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                    To appear for the NISM-Series-V-A: Mutual Fund Distributors Certification Examination, candidates must meet the following eligibility criteria:
                                </p>
                                <ul className="space-y-3 list-disc list-inside text-sm md:text-base text-neutral-700">
                                    <li>Minimum age of 18 years</li>
                                    <li>Minimum educational qualification: 10+2 (12th standard) or equivalent</li>
                                    <li>No prior experience in mutual fund distribution is required</li>
                                    <li>Candidates can be fresh graduates or working professionals</li>
                                    <li>No maximum age limit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why is NISM Certification Important? Section */}
            <section className="py-12 md:py-20 bg-[#243062] text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center leading-tight">
                            Why is NISM Certification Important?
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg leading-relaxed">
                                NISM certification is crucial for anyone looking to build a career in mutual fund distribution. It serves as a gateway to becoming a registered mutual fund distributor in India.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed">
                                The certification ensures that distributors have the necessary knowledge and understanding of mutual fund products, regulatory requirements, and ethical practices. This helps in building trust with investors and maintaining high standards in the financial services industry.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed">
                                Additionally, NISM certification is mandatory for obtaining an AMFI Registration Number (ARN), which is required by SEBI regulations for all mutual fund distributors. Without a valid ARN, it is illegal to sell mutual funds in India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mode to Appear in the NISM Mutual Fund Distributor Exam Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Mode to Appear in the NISM Mutual Fund Distributor Exam
                        </h2>
                        
                        {/* Introductory Content */}
                        <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200 mb-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                Based on the details provided by the Association of Mutual Funds in India (AMFI), the NISM Mutual Fund Distributor Exam can be attempted either in English or Hindi.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                The NISM certification examination is provided both online and offline for English speakers.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                For Hindi, it is made available only offline.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                The online option is highly popular as it is convenient, provided from various centers, and faster in terms of result processing.
                            </p>
                        </div>

                        {/* Mode Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                            <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Online Mode
                                </h3>
                                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                    Available for English language. The online option is convenient, provided from various centers, and faster in terms of result processing.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Offline Mode
                                </h3>
                                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                    Available for both English and Hindi languages. Candidates can appear for the exam at designated NISM test centers across India.
                                </p>
                            </div>
                        </div>

                        {/* Steps to Get NISM Certification */}
                        <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                Steps to Get NISM Certification
                            </h3>
                            <ol className="space-y-3 list-decimal list-inside text-sm md:text-base text-neutral-700 ml-2">
                                <li>Register for the NISM exam on the official portal.</li>
                                <li>Select the NISM certificate course relevant to mutual fund distribution.</li>
                                <li>Appear for the NISM certificate examination as per the chosen mode.</li>
                                <li>Clear the mutual fund exam to obtain the NISM mutual fund certification.</li>
                            </ol>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                If you are wondering what is NISM certification, it is a mandatory qualification to become a certified mutual fund advisor. The AMFI certification ensures compliance with industry standards. For those asking how to get NISM certificate, the process involves NISM register, choosing the exam mode, and successfully passing the test.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Much NISM Exam Fee to be submitted? Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            How Much NISM Exam Fee to be submitted?
                        </h2>
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-200">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                The NISM-Series-V-A: Mutual Fund Distributors Certification Examination fee is <strong className="text-[#243062]">₹1,500</strong> (inclusive of taxes). This fee is payable at the time of registration for the exam.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                The exam fee is non-refundable and non-transferable. Candidates must ensure they are fully prepared before registering for the examination. In case of failure, candidates will need to pay the full fee again to retake the exam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is the Validity for a NISM Certificate? Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            What is the Validity for a NISM Certificate?
                        </h2>
                        <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                The NISM-Series-V-A certificate is valid for <strong className="text-[#243062]">3 years</strong> from the date of issue. During this period, the certificate holder can use it to obtain and maintain their AMFI Registration Number (ARN).
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                To renew the certificate after 3 years, certificate holders must complete the mandatory Continuous Professional Education (CPE) training program. The CPE training ensures that distributors stay updated with the latest developments in the mutual fund industry and regulatory changes.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                It is important to complete the CPE training before the certificate expires to avoid any interruption in your distribution activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NISM Exam Pattern Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            NISM Exam Pattern
                        </h2>
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-200">
                            {/* Introductory Paragraph */}
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
                                The NISM Exam follows a structured pattern for candidates appearing in the mutual fund distributor exam. Below are the key details:
                            </p>
                            
                            {/* Exam Pattern Table */}
                            <div className="mb-8 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-[#243062] text-white">
                                                <th className="border border-[#243062] p-4 text-left font-serif font-bold text-sm md:text-base">Parameter</th>
                                                <th className="border border-[#243062] p-4 text-center font-serif font-bold text-sm md:text-base">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white hover:bg-neutral-50">
                                                <td className="border border-neutral-300 p-4 font-serif text-sm md:text-base text-neutral-800">Total Questions</td>
                                                <td className="border border-neutral-300 p-4 text-center text-sm md:text-base text-neutral-700">100 questions</td>
                                            </tr>
                                            <tr className="bg-neutral-50 hover:bg-neutral-100">
                                                <td className="border border-neutral-300 p-4 font-serif text-sm md:text-base text-neutral-800">Marks per Question</td>
                                                <td className="border border-neutral-300 p-4 text-center text-sm md:text-base text-neutral-700">1 mark each (Maximum marks: 100)</td>
                                            </tr>
                                            <tr className="bg-white hover:bg-neutral-50">
                                                <td className="border border-neutral-300 p-4 font-serif text-sm md:text-base text-neutral-800">Passing Marks</td>
                                                <td className="border border-neutral-300 p-4 text-center text-sm md:text-base text-neutral-700">50% (50 marks out of 100)</td>
                                            </tr>
                                            <tr className="bg-neutral-50 hover:bg-neutral-100">
                                                <td className="border border-neutral-300 p-4 font-serif text-sm md:text-base text-neutral-800">Negative Marking</td>
                                                <td className="border border-neutral-300 p-4 text-center text-sm md:text-base text-neutral-700">No negative marking</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* How to Appear Section */}
                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    How to Appear for the NISM Certificate Examination?
                                </h3>
                                <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-neutral-700 ml-2">
                                    <li>Complete the NISM registration on the official portal.</li>
                                    <li>Log in using your NISM login credentials.</li>
                                    <li>Choose the relevant NISM certificate course and exam mode.</li>
                                    <li>Appear for the mutual fund exam and clear it to receive the NISM mutual fund certification.</li>
                                </ul>
                            </div>

                            {/* Additional Information Paragraphs */}
                            <div className="space-y-4 mb-6">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    If you are wondering what is NISM certification, it is a mandatory qualification for mutual fund distributors. The AMFI certification ensures compliance with industry standards.
                                </p>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    For those searching how to get NISM certificate, the process starts with NISM register, selecting the exam, and passing with the required marks.
                                </p>
                            </div>

                            {/* Note Section */}
                            <div className="bg-[#243062] text-white rounded-lg p-4 md:p-6 mt-6">
                                <p className="text-sm md:text-base leading-relaxed">
                                    <strong>Note:</strong> Passing certificate will be issued only to those candidates who have furnished/ updated their Income Tax Permanent Account Number (PAN) in their registration details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Name of Module Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Name of Module: NISM-Series-V-A: Mutual Fund Distributors Certification Examination
                        </h2>
                        <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                The NISM-Series-V-A: Mutual Fund Distributors Certification Examination is the official certification program for individuals who wish to become mutual fund distributors in India.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                                This module covers comprehensive topics related to mutual fund products, their features, benefits, risks, regulatory framework, and distribution practices. The examination ensures that candidates have a thorough understanding of:
                            </p>
                            <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-neutral-700 mb-4">
                                <li>Mutual fund concepts and products</li>
                                <li>Regulatory framework and compliance requirements</li>
                                <li>Investment strategies and portfolio management</li>
                                <li>Client relationship management</li>
                                <li>Ethical practices and code of conduct</li>
                            </ul>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                Successful completion of this examination is mandatory for obtaining an AMFI Registration Number (ARN) and becoming a registered mutual fund distributor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Enroll for The NISM Exam? Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            How to Enroll for The NISM Exam?
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
                                    To enroll for the NISM-Series-V-A: Mutual Fund Distributors Certification Examination, follow these steps:
                                </p>
                                <ol className="space-y-4 list-decimal list-inside text-sm md:text-base text-neutral-700">
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Visit the NISM Website:</strong> Go to the official NISM website (www.nism.ac.in) and navigate to the certification section.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Create an Account:</strong> Register yourself on the NISM portal by providing your personal details, email ID, and mobile number.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Select the Exam:</strong> Choose NISM-Series-V-A: Mutual Fund Distributors Certification Examination from the list of available exams.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Fill Application Form:</strong> Complete the online application form with all required details including personal information, educational qualifications, and contact details.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Upload Documents:</strong> Upload scanned copies of required documents such as photograph, signature, and identity proof.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Pay Exam Fee:</strong> Pay the examination fee of ₹1,500 online through the available payment gateways (credit card, debit card, net banking, or UPI).
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Select Exam Date & Center:</strong> Choose your preferred exam date and test center (for offline mode) or schedule your online exam slot.
                                    </li>
                                    <li className="mb-2">
                                        <strong className="text-[#243062]">Download Admit Card:</strong> After successful registration, download your admit card from the NISM portal. The admit card will contain your exam details, date, time, and venue.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NISM Exam Syllabus Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            NISM Exam Syllabus
                        </h2>
                        <div className="space-y-6">
                            <div className=" mb-8">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    In order to qualify the NISM Exam, it is necessary for the personnel to understand the whole NISM Examination Syllabus. Following are the topics included in the NISM Curriculum.
                                </p>
                            </div>
                            {[
                                {
                                    topic: 'I. Investment Landscape',
                                    subtopics: [
                                        'Understand the parameters of the Indian Economy: Describe about Investors and their Financial Goals',
                                        'Understand Savings and Investment',
                                        'Discuss Different Asset Classes',
                                        'Understand the Classification of Investment Risks',
                                        'Explain Risk Measure and Management Strategies',
                                        'Understand Behavioral Biases in Investment Decision Making',
                                        'Understand Risk Profiling',
                                        'Explain the Asset Allocation',
                                        'Comparison between the two approaches – Do-it-yourself and Taking Professional Help',
                                    ],
                                },
                                {
                                    topic: 'II. Concept & Role of a Mutual Fund',
                                    subtopics: [
                                        'Explain the Concept of Mutual Fund',
                                        'Understand the Classifications of Mutual Funds',
                                        'Describe the Growth of the Mutual Fund Industry in India',
                                    ],
                                },
                                {
                                    topic: 'III. Legal Structure of Mutual Funds in India',
                                    subtopics: [
                                        'Describe the Structure of Mutual Funds in India',
                                        'Understand the Key Constituents of a Mutual Fund',
                                        'Understand the Organisation Structure of Asset Management Company',
                                        'Understand the Role and Support Functions of Service Providers of Mutual Funds',
                                        'Explain the Role and Function of AMFI',
                                    ],
                                },
                                {
                                    topic: 'IV. Legal and Regulatory Framework',
                                    subtopics: [
                                        'Describe Role of Regulators in India',
                                        'Discuss Role of Securities and Exchange Board of India',
                                        'Know the Due Diligence Process Followed by AMCs for Distributors of Mutual Funds',
                                        'Explain Investor Grievance and Redressal Standards (Explain about SCORES)',
                                        'Understand AMFI Code of Conduct for Intermediaries',
                                    ],
                                },
                                {
                                    topic: 'V. Scheme Related Information',
                                    subtopics: [
                                        'Understanding the Mandatory Documents and their Purpose, Objective and Significance',
                                        'Explain the Non-Mandatory Disclosures',
                                    ],
                                },
                                {
                                    topic: 'VI. Fund Distribution and Channel Management Practices',
                                    subtopics: [
                                        'Explain the Role and Importance of Mutual Fund Distributors',
                                        'Understand the Classification of Mutual Fund Distributors',
                                        'Explain the Modes of Distribution',
                                        'Understand the Pre-requisites to Become Distributor of the Mutual Fund',
                                        'Explain Revenue for a Mutual Fund Distributor',
                                        'Know the Commission Disclosure mandated by SEBI',
                                        'Explain the Due Diligence Process by AMCs for Distributors of Mutual Funds',
                                        'Discuss Nomination Facilities to Agents / Distributors and Payment of Commission to Nominee',
                                        'Explain About Change of Distributor',
                                    ],
                                },
                                {
                                    topic: 'VII. Net Asset Value, Total Expense Ratio and Pricing of Units',
                                    subtopics: [
                                        'Discuss the Fair Valuation Principles',
                                        'Compute Net Assets of a Mutual Fund Scheme and NAV',
                                        'Explain about Dividends & Distributable Reserves',
                                        'Know about the Concept of Entry and Exit Load and its Impact on NAV',
                                        'Know about the Key Accounting and Reporting Requirements Applicable to Mutual Funds',
                                        'Know about the NAV, Total expense ratio and Pricing of units for the Segregated Portfolio',
                                    ],
                                },
                                {
                                    topic: 'VIII. Taxation',
                                    subtopics: [
                                        'Understand Applicability of various taxes in respect of Mutual Funds',
                                        'Understand about Capital gains, Capital gains (Long term & Short term) tax and Indexation.',
                                        'Understand about the Dividend Income and Dividend Income tax',
                                        'Understand the Difference Between dividend distribution tax and capital gains tax',
                                        'Understand the basics of Setting off Gains and Losses under Income Tax Act',
                                        'Understand about Securities Transaction Tax',
                                        'Understand about Tax benefit under Section 80C of the Income Tax Act for investment pertaining to Mutual Funds',
                                        'Understand about Tax Deducted at Source (TDS) in Mutual Funds',
                                        'Understand Applicability of GST in Mutual Funds',
                                    ],
                                },
                                {
                                    topic: 'IX. Investor Services',
                                    subtopics: [
                                        'Describe the NFO Process',
                                        'Explain about the New Fund Offer Price /On-going price for subscription',
                                        'Discuss Different types of investment plans and options',
                                        'Explain how the mutual fund units are allotted to the investor',
                                        'Describe the content and periodicity of Statement of Accounts for investments',
                                        'Describe different types of Mutual Fund Investors',
                                        'Explain how to fill in the application form for Mutual Funds',
                                        'Describe the financial transactions with Mutual Funds (Purchase, Redemption and Switches)',
                                        'Explain Cut-off time and Time Stamping',
                                        'Describe the KYC requirement for mutual fund investors',
                                        'Explain the different types of systematic transactions',
                                        'Explain operational aspects of systematic transactions',
                                        'Explain Non – Financial Transactions in Mutual Funds',
                                        'Discuss change in Status of Special Investor Categories',
                                        'Explain Investor Transactions – turnaround times',
                                    ],
                                },
                                {
                                    topic: 'X. Risk, Return and Performance of funds',
                                    subtopics: [
                                        'Understand the General and Specific Risk Factors',
                                        'Explain the Factors that affect mutual fund performance',
                                        'Describe Drivers of Returns and Risk in mutual fund Scheme',
                                        'Understand the Measures of Returns',
                                        'Know about the SEBI norms regarding representation of returns by Mutual Funds in India',
                                        'Explain risks in fund investing with a focus on investors',
                                        'Understand the Measures of Risk',
                                        'Explain certain provisions with respect to Credit Risk',
                                    ],
                                },
                                {
                                    topic: 'XI. Mutual Fund Scheme Performance',
                                    subtopics: [
                                        'Explain the concept of Benchmarks',
                                        'Compare Price Return Index and Total Return Index',
                                        'Identify the basics of choosing an appropriate performance benchmark',
                                        'Describe the use of market benchmarks to evaluate Equity Fund Performance',
                                        'Describe the use of market benchmarks to evaluate Debt Fund Performance',
                                        'Describe the use of market benchmarks to evaluate Other Schemes',
                                        'Explain Quantitative Measures of Fund Manager Performance',
                                        'Define Tracking Error',
                                        'Understand the different Sources for disclosure of scheme performance (Scheme documents, AMFI and AMC website and Fund Fact Sheet)',
                                    ],
                                },
                                {
                                    topic: 'XII. Mutual Fund Scheme Selection',
                                    subtopics: [
                                        'Explain Scheme Selection based on Investor needs, preferences and risk-profile',
                                        'Explain Risk Levels in mutual fund schemes',
                                        'Explain Scheme Selection based on investment strategy of Mutual Funds',
                                        'Explain Selection of Mutual Fund scheme offered by different AMCs or within the scheme category',
                                        'Know about selecting options in mutual fund schemes',
                                        'Know about Do\'s and Don\'ts while selecting mutual fund schemess',
                                    ],
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-[#243062] mb-4">
                                        {item.topic}
                                    </h3>
                                    <ul className="space-y-2 list-disc list-inside text-sm md:text-base text-neutral-700">
                                        {item.subtopics.map((subtopic, subIndex) => (
                                            <li key={subIndex}>{subtopic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NISM Exam Study Material Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            NISM Exam Study Material
                        </h2>
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-200">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                If you want to qualify the NISM Test with good grades and in the first attempt then it is highly necessary to prepare strongly. For this you can take help from the Mutual Fund Mock Test, NISM Books and other material like the News sections. Study material is provided by NISM upon registration for the exam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions (FAQs) Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-12 md:mb-16 text-center leading-tight">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="space-y-4 md:space-y-5">
                            {[
                                {
                                    question: 'What is the Regulation Over Using Electrical Items Like a Calculator in the NISM Examination?',
                                    answer: 'Using the calculator or any other electronic item in the NISM examination hall is strictly prohibited.',
                                },
                                {
                                    question: 'What if a Candidate Fails in the NISM examination? Is there any Refund Policy?',
                                    answer: 'No, there is no procedure for fee refund. But yes, if the exam gets cancelled by the NISM, then a refund will be given to the candidate.',
                                },
                                {
                                    question: 'How can the fees for nism certification for mutual fund distributors be paid?',
                                    answer: 'The NISM exam exam fees can easily be paid through online mode by using a debit card, net banking. Exam NISM certification fees fees can also be submitted through offline mode by using the demand Drafts.',
                                },
                                {
                                    question: 'Is it Possible to Give the NISM Exam in the Hindi language?',
                                    answer: 'Yes, a prospect can give the examination in the Hindi language. However, the exam will be conducted in offline mode only in case of Hindi.',
                                },
                                {
                                    question: 'What is the Scope of the NISM certificate?',
                                    answer: 'NISM certificate is essential for the mutual fund distributors to get the ARN number.',
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-transparent border-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors duration-200"
                                    >
                                        <h5 className="text-base md:text-lg font-bold text-[#243062] pr-4">
                                            {faq.question}
                                        </h5>
                                        <svg
                                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                                openFaqs[index] ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openFaqs[index] && (
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NISMCertificationExam;

