import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: React.ReactNode;
}

interface FAQCategory {
    name: string;
    faqs: FAQ[];
}

const FAQSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories: FAQCategory[] = [
        {
            name: 'Partner Program',
            faqs: [
                {
                    question: 'How can I Become a Nivesh Partner?',
                    answer: (
                        <>
                            <p className="mb-4">You will have to be a Nivesh partner with an AMFI-registered Mutual Fund Distributor Registration Number (ARN) if you want to become a Nivesh Partner. For ARN holders, you can begin immediately via simple empanelment.</p>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
                {
                    question: 'What are the Charges for Becoming a Nivesh Partner?',
                    answer: (
                        <>
                            <p className="mb-2">The price varies whether you have an ARN or not:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>ARN Holders</strong> – No charges. Free</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Non-ARN Holders</strong> – ₹2950 for NISM training (if opted). Alternatively, you can study and pass the NISM exam on your own to get your ARN without this charge.</span>
                                </li>
                            </ul>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
                {
                    question: 'Does Nivesh Charge any Renewal Fees?',
                    answer: (
                        <>
                            <p className="mb-4">No. There is no renewal charge for Nivesh. Getting associated with Nivesh is free every year.</p>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
                {
                    question: 'How do I register on Nivesh Mutual Fund software?',
                    answer: (
                        <>
                            <p className="mb-4">Simply, login to <a href="https://nivesh.com/en/partner" className="text-primary hover:underline">https://nivesh.com/en/partner</a> and complete the registration form. After you apply, someone from Team Nivesh will reach out to you and assist you in the onboarding.</p>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
            ],
        },
        {
            name: 'Products & Services',
            faqs: [
                {
                    question: 'What are the Products Which a Nivesh Partner can Access?',
                    answer: (
                        <>
                            <p className="mb-2">As a licensed partner, you’ll be able to provide:</p>
                            <ul className="space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> Mutual Funds</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> Fixed Deposits</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> Peer-to-Peer (P2P) Lending</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> AIF (Alternative Investment Funds)</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> Portfolio Management Services (PMS)</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> NPS (National Pension System)</li>
                                <li className="flex items-center gap-2"><span className="text-primary">•</span> Corporate Bonds</li>
                            </ul>
                            <p className="mb-4">Here Comes Nivesh one of the Best Mutual Fund Distributor Platforms in India, which enables you to address every single client with varying financial requisites.</p>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
                {
                    question: 'Do I Have to Pay for Additional Services Offered by Nivesh?',
                    answer: (
                        <>
                            <p className="mb-4">No. All Nivesh Partners' use of platform services, including Signatory Partner Desk and Client Desk access, is provided free of charge.</p>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
            ],
        },
        {
            name: 'Platform Features',
            faqs: [
                {
                    question: 'What are the features provided by Nivesh Mutual Fund Software?',
                    answer: (
                        <>
                            <p className="mb-2">There are multiple benefits available with Nivesh Mutual Fund Software like:</p>
                            <p className="mb-2">Nivesh Mutual Fund Software is loaded with Powerful features and everything you need as an AMFI-registered Mutual Fund Distributor to grow your business with ease.</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> All financial products on one digital platform</li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> 100% paperless transactions</li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> No hidden charges</li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Auto-generated reports: portfolio, capital gains, cash flow</li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Business tools: calculators, planners, model portfolios</li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Digital content for client engagement via WhatsApp, Facebook & more</li>
                            </ul>
                            <a href="https://nivesh.com/en/partner" className="text-primary font-medium hover:underline">Click here to join Nivesh</a>
                        </>
                    ),
                },
                {
                    question: 'What are benefits of using Nivesh Mutual Fund Software?',
                    answer: (
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> 24*7 available portal</li>
                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Dedicated relationship managers to manage path for success</li>
                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Portfolio reviews and restructuring as per client's requirements</li>
                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Paperless experience for both distributors and clients</li>
                            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Transform offline office to virtual office</li>
                        </ul>
                    ),
                },
            ],
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-neutral-900 text-white mb-4">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        Frequently asked
                        <br />
                        questions
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveCategory(index);
                                setOpenIndex(0);
                            }}
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${activeCategory === index
                                ? 'bg-primary text-white'
                                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {categories[activeCategory].faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-neutral-800 rounded-lg overflow-hidden"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800 transition-colors"
                            >
                                <span className="text-lg font-medium pr-8">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-neutral-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
