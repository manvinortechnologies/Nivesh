import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Hero2 from '../../assets/Unlisted_Share.jpeg';

const UnlistedShares: React.FC = () => {
    const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-white">
                <div className="container-custom relative z-10">
                    {/* Breadcrumbs */}
                    <div className="mb-6">
                        <nav className="flex items-center space-x-2 text-sm">
                            <Link to="/" className="text-primary hover:text-primary-dark transition-colors">
                                Home
                            </Link>
                            <span className="text-neutral-400">/</span>
                            <span className="text-neutral-500">Unlisted Shares</span>
                        </nav>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left Column - Content */}
                        <div>
                            <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold text-[#243062] mb-6 leading-tight">
                                How to Buy Unlisted Shares in India | Best Guide by Nivesh
                            </h2>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
                                Looking to tap into high-growth opportunities before companies hit the stock exchange? Discover how to buy unlisted shares in India smartly, safely, and profitably with this complete guide. Understanding the legal guidelines on the tax on unlisted shares in India, selecting the best platform to buy unlisted shares in India, and navigating a secure unlisted shares buying platform are all key steps in this process. On this website, we will provide you with a clear and straightforward understanding of unlisted stocks, without any complex terms, simply and concisely, to guide your decisions. Those stocks are available on the market from brokers, private income, or online platforms. However, medications must be approached with the correct information, challenge, and the appropriate equipment.
                            </p>
                            <div className="flex justify-start">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-[#243062] hover:bg-[#1a2550] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    I am Interested
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <img
                                    src={Hero2}
                                    alt="Unlisted Shares"
                                    className="w-full h-[400px] md:h-[500px] lg:h-[590px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Are Unlisted Shares Section */}
            <section className="py-12 md:py-20 bg-primary/10">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            What Are Unlisted Shares and Why Are Investors Talking About Them?
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-[#243062] leading-relaxed">
                                Unlisted stocks refer to the shares of companies that are not listed on any recognized stock exchange in India, such as the NSE or BSE. Despite being out of the limelight, those shares promise significant possibilities for individuals seeking to invest for long-term profits. Increasing numbers of retail investors have been seeking ways to buy unlisted shares in India, offering high returns, early funding in developing companies, and the opportunity to earn money before the companies are listed.
                            </p>
                            <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                                <ul className="space-y-4 text-base text-neutral-700 leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>Unlisted stocks are traded (OTC), now not on formal stock exchanges.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>Those stocks are usually bought via dealers, agents, or specialised structures.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>The technique may additionally seem complicated, however will become simple with over-the-counter proper understanding.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>Nivesh is one of the leading platform to buy unlisted stocks in India.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>Key steps encompass understanding the over-the-counter marketplace, locating a reliable supply, and judging growth capability.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary font-bold mt-1">•</span>
                                        <span>Unlisted stocks are gaining popularity due to the success stories of groups that started out unlisted and gave excessive IPO returns.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Buy Unlisted Shares Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            How to Buy Unlisted Shares in India Safely and Smartly
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                Many investors want to know how to buy unlisted stocks in India safely. Buying is legal when done through a SEBI-registered dealer or a trusted unlisted shares buying platform. Shares are credited to your demat account, but may take longer than listed stocks.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                                    <h3 className="text-lg font-semibold text-[#243062] mb-3">Avoid Informal Channels</h3>
                                    <p className="text-base text-neutral-700 leading-relaxed">
                                        Avoid informal channels. Choose a regulated unlisted shares buying platform or dealer for secure, transparent transactions. Always check reviews and platform credentials.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                                    <h3 className="text-lg font-semibold text-[#243062] mb-3">Fintech Apps</h3>
                                    <p className="text-base text-neutral-700 leading-relaxed">
                                        Fintech apps are making access easier. The best app to buy unlisted shares in India offers a user-friendly interface, security, financial data, and seamless demat integration.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 md:col-span-2">
                                    <h3 className="text-lg font-semibold text-[#243062] mb-3">Expert Guidance</h3>
                                    <p className="text-base text-neutral-700 leading-relaxed">
                                        Learn how to buy unlisted shares in India through reliable platforms. Nivesh offers expert guidance, helping you invest smartly in unlisted shares.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Platforms and Apps Matter Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            Why Platforms and Apps Matter in the Unlisted Shares Market
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                As online investment grows, it's critical to have the best app to buy unlisted shares in India. These apps provide access to unique offers, investor know-how, and business performance data. A strong app notifies you when a sale has been executed. The best unlisted shares buying platform should offer full transparency on fees, tax impact, company history, and expected listing timelines. Knowing how to buy unlisted shares in India from such platforms builds confidence in making smart investments.
                            </p>
                            <div className="bg-white rounded-lg p-8 border border-neutral-200">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-base text-neutral-700 leading-relaxed">
                                            Staying updated via a reliable unlisted shares buying platform or app is very useful.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-base text-neutral-700 leading-relaxed">
                                            It is not enough to know how to buy unlisted shares in India — knowing where to buy them is key.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-base text-neutral-700 leading-relaxed">
                                            So, each time you are asked how to buy unlisted shares in India, maintain it threefold: a right platform, proper tax information, and stable evaluation. With the best app to buy unlisted shares in India, you get get right of entry to to early-stage groups and opportunities earlier than with masses. With Nivesh, discover actual, unlisted funding opportunities and build your portfolio before corporations reach the IPO level. Make clever picks with professional help.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-primary-dark/10">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg p-8 border-2 border-primary text-center">
                            <p className="text-xl md:text-2xl font-bold text-[#243062] mb-6">
                                Do you need to invest before the crowd? Join Nivesh today and gain exclusive access to trusted, unlisted percentage deals, tax guidance, and build your portfolio with truth.
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="bg-[#243062] hover:bg-[#1a2550] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Join Nivesh Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#243062] mb-10 md:mb-12 text-center leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 md:space-y-5">
                            {[
                                {
                                    question: 'Q1. How to shop for unlisted stocks in India quite simply?',
                                    answer: 'Use a safe, unlisted stocks buying website or a SEBI-accepted dealer.',
                                },
                                {
                                    question: 'Q2. Which app is nice for buying unlisted shares in India?',
                                    answer: 'Use apps like Nivesh that are easy, cozy, and offer hazard-free services.',
                                },
                                {
                                    question: 'Q3. Is it safe to buy unlisted shares?',
                                    answer: 'Sure, if sold through appropriate platforms and after proper research.',
                                },
                                {
                                    question: 'Q4. Can I preserve unlisted shares in my demat account?',
                                    answer: 'Yes, you can maintain unlisted shares in your regular demat account.',
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
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

            {/* Final CTA Section */}
            <section className="relative py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Invest in Unlisted Shares?
                        </h2>
                        <p className="text-base md:text-lg text-white/90 mb-8">
                            Discover high-growth opportunities before companies hit the stock exchange.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => window.open('https://app.nivesh.com', '_blank')}
                            className="bg-white hover:bg-neutral-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            I am Interested
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UnlistedShares;

