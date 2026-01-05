import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Favicon from '../../assets/Favicon.png';

const GrowYourMutualFund: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        holderType: 'arnHolder',
        getInfo: true,
    });

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
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-neutral-50">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="relative z-10 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#243062] mb-6 leading-tight">
                                Grow Your Mutual Fund{' '}
                                <span className="text-primary">Business</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Transform your mutual fund distribution business with Nivesh's comprehensive platform. Scale your operations, enhance client relationships, and accelerate your growth with cutting-edge technology and dedicated support.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Start Growing Today
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.open('https://nivesh.com/en/partner', '_blank')}
                                    className="border-2 border-[#243062] text-[#243062] hover:bg-[#243062] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Learn More
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">5000+</div>
                                    <div className="text-sm text-neutral-600">Active Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">₹1000Cr+</div>
                                    <div className="text-sm text-neutral-600">AUM Managed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-[#243062]">99%</div>
                                    <div className="text-sm text-neutral-600">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form Card */}
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-neutral-200">
                                <form onSubmit={handleFormSubmit} className="space-y-5">
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
                </div>
            </section>

            {/* Why MFDs Need a Platform Now Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Why MFDs Need a Platform Now
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {[
                                {
                                    title: 'Digital Transformation',
                                    description: 'The financial services industry is rapidly moving towards digitalization. MFDs need modern platforms to stay competitive and meet evolving client expectations.',
                                },
                                {
                                    title: 'Operational Efficiency',
                                    description: 'Manual processes are time-consuming and error-prone. A digital platform streamlines operations, reduces paperwork, and increases productivity.',
                                },
                                {
                                    title: 'Client Expectations',
                                    description: 'Today\'s clients expect seamless digital experiences, real-time portfolio tracking, and instant transactions. A platform enables you to meet these expectations.',
                                },
                                {
                                    title: 'Scalability',
                                    description: 'Growing your business requires scalable solutions. A platform allows you to manage more clients efficiently without proportionally increasing your workload.',
                                },
                                {
                                    title: 'Compliance & Security',
                                    description: 'Regulatory compliance and data security are critical. A robust platform ensures you meet all requirements while protecting client information.',
                                },
                                {
                                    title: 'Competitive Advantage',
                                    description: 'MFDs using advanced platforms can offer better services, faster response times, and superior client experiences, giving them a significant edge.',
                                },
                            ].map((reason, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-[#243062] mb-3">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Changes with Nivesh Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            What Changes with Nivesh
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: 'From Manual to Digital',
                                    description: 'Transform your entire workflow from paper-based processes to a fully digital platform. No more physical forms, manual calculations, or time-consuming paperwork.',
                                },
                                {
                                    title: 'From Reactive to Proactive',
                                    description: 'Move from reactive client management to proactive advisory. Get real-time insights, automated alerts, and data-driven recommendations to serve clients better.',
                                },
                                {
                                    title: 'From Limited to Unlimited',
                                    description: 'Break free from geographical and operational limitations. Serve clients anywhere, anytime, with a platform that scales with your business growth.',
                                },
                                {
                                    title: 'From Individual to Ecosystem',
                                    description: 'Join a thriving ecosystem of MFDs, benefit from shared resources, best practices, and collective growth opportunities.',
                                },
                            ].map((change, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                        {change.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                        {change.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Built for MFDs Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                            Key Features Built for MFDs
                        </h2>
                        <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                            Powerful tools and features designed specifically to help MFDs grow their business
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Client Onboarding',
                                description: 'Streamlined digital onboarding process with e-KYC, reducing time from days to minutes.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Portfolio Management',
                                description: 'Comprehensive portfolio tracking, analysis, and rebalancing tools for better client service.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Transaction Management',
                                description: 'Seamless transaction processing for SIPs, lumpsum investments, redemptions, and switches.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Analytics & Reports',
                                description: 'Advanced analytics and customizable reports to track performance and make data-driven decisions.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Commission Tracking',
                                description: 'Real-time commission tracking and automated payouts to ensure transparency and timely payments.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                            {
                                title: 'Marketing Tools',
                                description: 'Built-in marketing tools, templates, and lead generation features to help you grow your client base.',
                                icon: (
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                ),
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[#243062] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real Growth, Real Stories Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                            Real Growth, Real Stories
                        </h2>
                        <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                            Discover how MFDs are transforming their businesses with Nivesh
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                name: 'Rajesh Panwar',
                                story: 'I was running a Vodafone outlet. Due to dengue, I couldn\'t work for a month because of which I didn\'t get any payout in that period. I realized that even if I continue to work in the same business for the next 10 years, I could fall into the same situation. Hence, I was looking for a business that can secure my future. At this time, I met Nivesh.com and learned about Mutual Funds. Today, thanks to Nivesh.com, I have achieved fast-paced growth and can boast of having the highest number of clients with them.',
                            },
                            {
                                name: 'Abhimanyu Nehra',
                                story: 'Abhimanyu has been an entrepreneur in the hospitality and real estate sectors based out of Delhi NCR. He had been thinking about the need of taking other asset classes to his clients. After coming in touch with Nivesh.com, he carefully evaluated the option and clearly saw the benefit of being part of a larger platform and great leverage of technology that Nivesh.com offered. Since then, he has been able to help his customers diversify into mutual funds in a much simpler manner.',
                            },
                            {
                                name: 'Yashwant Gupta',
                                story: 'From traveling in buses to Jaipur and haggling with Mutual Funds companies for collecting clients\' statements to sitting in the comfort of my home and managing all the transactions in a few clicks on my phone, I have come a long way. All thanks to Nivesh. There was a time when I was forced to stop the SIPs of my hard-earned customers as it was impossible to service them given the paperwork. Nivesh came as a one-stop solution for all the problems and made investing a cake walk for me and my customers.',
                            },
                        ].map((story, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.312.817-5.996 3.549-5.996 7.849 0 2.857 1.158 5.143 3.369 6.571l-1.748 1.429zm-10.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.817-5.996 3.549-5.996 7.849 0 2.857 1.158 5.143 3.369 6.571l-1.748 1.429z"/>
                                    </svg>
                                </div>
                                <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4">
                                    "{story.story}"
                                </p>
                                <p className="text-base md:text-lg font-bold text-[#243062]">
                                    - {story.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scale Your Brand with Nivesh Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Scale Your Brand with Nivesh
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {[
                                {
                                    title: 'Brand Visibility',
                                    description: 'Enhance your brand presence with white-label solutions and custom branding options that reflect your professional identity.',
                                },
                                {
                                    title: 'Marketing Support',
                                    description: 'Access to marketing materials, social media templates, and promotional content to help you reach more clients.',
                                },
                                {
                                    title: 'Lead Generation',
                                    description: 'Leverage Nivesh\'s marketing channels and lead generation tools to expand your client base and grow your business.',
                                },
                                {
                                    title: 'Professional Image',
                                    description: 'Present a professional, tech-forward image to clients with a modern platform that showcases your expertise and reliability.',
                                },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-[#243062] mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why MFDs Choose Nivesh Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Why MFDs Choose Nivesh
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Comprehensive Platform',
                                    description: 'Everything you need in one place - from client onboarding to portfolio management, all integrated seamlessly.',
                                },
                                {
                                    title: 'Dedicated Support',
                                    description: 'Get personalized support from our team of experts who understand your business and are committed to your success.',
                                },
                                {
                                    title: 'Competitive Commissions',
                                    description: 'Attractive commission structure with transparent tracking and timely payouts to maximize your earnings.',
                                },
                                {
                                    title: 'Continuous Innovation',
                                    description: 'Regular platform updates and new features based on MFD feedback, ensuring you always have the latest tools.',
                                },
                                {
                                    title: 'Training & Development',
                                    description: 'Ongoing training programs, webinars, and resources to help you stay updated and grow your expertise.',
                                },
                                {
                                    title: 'Trusted by Thousands',
                                    description: 'Join a community of thousands of successful MFDs who trust Nivesh for their business growth and client management.',
                                },
                            ].map((reason, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                        {reason.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Begin? Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 border-2 border-primary/20 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-6 leading-tight">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed">
                                Join Nivesh today and transform your mutual fund distribution business. Start scaling, start growing, start succeeding.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Get Started Now
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.open('https://nivesh.com/en/partner', '_blank')}
                                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GrowYourMutualFund;

