import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Favicon from '../../assets/Favicon.png';

const BecomeMutualFundDistributors: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        holderType: 'arnHolder',
        getInfo: true,
    });
    const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form or show success message
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Become an MFD with Nivesh */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-neutral-50">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="relative z-10 text-center lg:text-left">
                            <p className="text-sm md:text-base text-primary font-semibold mb-3 uppercase tracking-wide">
                                Become Mutual Fund Distributor
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#243062] mb-4 leading-tight">
                                Start your wealth journey — become a Mutual Fund Distributor with{' '}
                                <span className="text-primary">Nivesh</span>
                            </h1>
                            
                            <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Start your journey into financial entrepreneurship — backed by India's most trusted wealth platform.
                            </p>
                            
                            <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                We help you get AMFI certified, set up your business, and serve clients digitally — with tools, training, and a ready-to-use platform. Build a rewarding career helping people invest and grow wealth.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Get Started Now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        const element = document.getElementById('how-it-works');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="border-2 border-[#243062] text-[#243062] hover:bg-[#243062] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    How It Works
                                </Button>
                            </div>

                            {/* Stats or Features */}
                            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">1000+</div>
                                    <div className="text-sm text-neutral-600">Active MFDs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">24/7</div>
                                    <div className="text-sm text-neutral-600">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">100%</div>
                                    <div className="text-sm text-neutral-600">Digital</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form Card */}
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-neutral-200">
                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    {/* Logo and Title */}
                                    <div className="text-center mb-6">
                                        <div className="flex justify-center mb-4">
                                            <img src={Favicon} alt="Nivesh" className="w-10 h-10" />
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-[#243062] mb-1">
                                            It's a Great Opportunity
                                        </h2>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#243062]">
                                            Let's Connect!
                                        </h2>
                                    </div>
                                    
                                    {/* Input Fields */}
                                    <input
                                        type="text"
                                        placeholder="Enter Full Name"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                    />
                                    
                                    <input
                                        type="email"
                                        placeholder="Enter Email-ID"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                    />
                                    
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                    />
                                    
                                    {/* Radio Buttons */}
                                    <div className="space-y-3 pt-2">
                                        <p className="text-sm font-medium text-neutral-700 text-center">Currently, you are an</p>
                                        <div className="flex gap-6 justify-center">
                                            <label className="flex items-center gap-2 cursor-pointer">
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
                                            <label className="flex items-center gap-2 cursor-pointer">
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
                                    <label className="flex items-start gap-3 cursor-pointer pt-2">
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
                                        className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-base shadow-md hover:shadow-lg"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    {/* Wavy Lines at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24">
                            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Why Become an MFD? (Opportunity Section) */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            A career with purpose, income, and independence.
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-center">
                                India's financial awareness is growing — but millions still need guidance.
                            </p>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    As an MFD, you help clients save, invest, and reach life goals.
                                </p>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    You earn commissions on every investment and build a long-term, recurring income.
                                </p>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    You decide your own pace, clients, and future.
                                </p>
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-[#243062] text-center italic mt-8">
                                It's not just a job — it's your own wealth business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Nivesh Advantage Section */}
            <section id="how-it-works" className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                            We make it simple to start, scale, and succeed.
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Step</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">What You Get with Nivesh</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">How It Helps</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200">
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">1. Learn & Get Certified</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">AMFI exam training, mock tests, support</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Pass with confidence</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">2. Set Up Your Business</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Assistance in registration & documentation</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Quick & hassle-free onboarding</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">3. Start with Zero Investment</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">No setup cost, no infrastructure required</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Begin earning from day one</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">4. Use Your Digital Platform</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">White-labeled app + dashboard</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Manage clients easily</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">5. Grow with Expert Support</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Marketing, client acquisition, and training</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Scale your income and brand</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold text-[#243062] mt-8 italic">
                            From learning to earning — Nivesh is with you at every step.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training & Certification Support Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Become AMFI-certified the smart way.
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Free learning modules and test prep resources.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Mentor sessions to clarify rules, regulations, and client-handling.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Practice questions & guidance from industry experts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Direct help with ARN registration once you clear the exam.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20">
                                <p className="text-lg md:text-xl font-semibold text-[#243062] italic text-center">
                                    "We don't just help you pass the exam — we prepare you for real client conversations."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Growth Stories Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            From first client to first lakh — every success starts small.
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 italic">
                                    "I started as a homemaker with no financial background. With Nivesh's support, I built a steady client base in just 6 months."
                                </p>
                                <p className="text-sm md:text-base font-semibold text-[#243062]">
                                    — Priya S., Delhi
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 italic">
                                    "The digital tools made it easy to serve clients remotely. Today, I manage ₹4 Cr AUM with Nivesh."
                                </p>
                                <p className="text-sm md:text-base font-semibold text-[#243062]">
                                    — Rajesh K., Pune
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Begin? Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 border-2 border-primary/20 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                                Your journey to becoming an MFD starts here.
                            </h2>
                            <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
                                Get trained, certified, and onboarded — all in one place.
                            </p>
                            <p className="text-base md:text-lg font-semibold text-[#243062] mb-8 leading-relaxed">
                                Build your own wealth business with Nivesh.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Start My MFD Journey
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        const element = document.getElementById('faqs');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Learn About AMFI Certification
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#243062] mb-10 md:mb-12 text-center leading-tight">
                            FAQs on Becoming an MFD with Nivesh
                        </h2>
                        <div className="space-y-4 md:space-y-5">
                            {[
                                {
                                    question: 'What is the eligibility to become an MFD?',
                                    answer: 'To become a Mutual Fund Distributor (MFD), you need to be at least 18 years old, have passed 10+2 or equivalent, and obtain an AMFI ARN (Advisory Registration Number) by clearing the NISM Series V-A exam. No prior financial background is required.',
                                },
                                {
                                    question: 'What is the AMFI certification process?',
                                    answer: 'The AMFI certification process involves: 1) Registering for the NISM Series V-A exam, 2) Preparing with study materials and mock tests, 3) Clearing the exam, 4) Applying for AMFI ARN registration, 5) Getting empaneled with an AMC or distributor platform like Nivesh.',
                                },
                                {
                                    question: 'How long does it take to start earning as an MFD?',
                                    answer: 'Typically, it takes 2-3 months to complete certification and onboarding. Once you start serving clients, you can begin earning commissions immediately. Your income grows as you build your client base.',
                                },
                                {
                                    question: 'Is there a registration or setup fee?',
                                    answer: 'With Nivesh, there is no setup fee or infrastructure cost. You can start with zero investment. The only costs are the NISM exam fee (around ₹1,500) and AMFI ARN registration fee (around ₹1,000).',
                                },
                                {
                                    question: 'Can I work part-time as an MFD?',
                                    answer: 'Yes, absolutely! Being an MFD offers complete flexibility. You can work part-time, full-time, or even as a side business. Many successful MFDs start part-time and gradually transition to full-time as their client base grows.',
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        onClick={() => {
                                            const newOpenFaqs = { ...openFaqs };
                                            newOpenFaqs[index] = !newOpenFaqs[index];
                                            setOpenFaqs(newOpenFaqs);
                                        }}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-transparent border-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors duration-200"
                                    >
                                        <h5 className="text-base md:text-lg font-bold text-[#243062] pr-4">
                                            {faq.question}
                                        </h5>
                                        <svg
                                            className={`w-5 h-5 text-[#243062] flex-shrink-0 transition-transform duration-300 ${
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

export default BecomeMutualFundDistributors;

