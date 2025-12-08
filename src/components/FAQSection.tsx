import React, { useState } from 'react';

interface FAQ {
    question: string;
    answer: string | string[];
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
            name: 'Product Overview',
            faqs: [
                {
                    question: 'How can Nivesh help me?',
                    answer: [
                        'Selecting top-performing investment opportunities',
                        'Reviewing your portfolio to see what\'s working well (and what\'s not)',
                        'Understanding when to exit underperforming funds and invest in stronger funds',
                    ],
                },
                {
                    question: 'How do I start using Nivesh?',
                    answer: 'Getting started with Nivesh is simple. Sign up for an account, complete your investor profile, and our platform will recommend personalized investment strategies based on your goals and risk tolerance.',
                },
                {
                    question: 'Can I track all my investments on Nivesh?',
                    answer: 'Yes! Nivesh provides a comprehensive dashboard where you can track all your investments in real-time, view performance metrics, and get insights into your portfolio allocation.',
                },
                {
                    question: 'Can I invest directly through Nivesh?',
                    answer: 'Absolutely. Nivesh allows you to invest directly in mutual funds, stocks, and other investment instruments through our secure platform with just a few clicks.',
                },
            ],
        },
        {
            name: 'Features & Plans',
            faqs: [
                {
                    question: 'What features does Nivesh offer?',
                    answer: 'Nivesh offers portfolio management, real-time analytics, expert advisory, automated rebalancing, tax optimization, and personalized investment recommendations.',
                },
                {
                    question: 'Are there different pricing plans?',
                    answer: 'Yes, we offer flexible pricing plans to suit different investor needs - from basic portfolio tracking to premium advisory services with dedicated support.',
                },
                {
                    question: 'Is there a free trial available?',
                    answer: 'Yes! We offer a 30-day free trial with access to all premium features so you can experience the full power of Nivesh before committing.',
                },
            ],
        },
        {
            name: 'Security & Compliance',
            faqs: [
                {
                    question: 'Is my data secure on Nivesh?',
                    answer: 'Absolutely. We use bank-level encryption and security measures to protect your data. All transactions are secured with SSL/TLS encryption and we never share your personal information.',
                },
                {
                    question: 'Is Nivesh SEBI registered?',
                    answer: 'Yes, Nivesh is registered with SEBI (Securities and Exchange Board of India) and complies with all regulatory requirements for investment advisory services.',
                },
                {
                    question: 'How is my investment protected?',
                    answer: 'Your investments are held in your name with regulated depositories. Nivesh does not hold custody of your funds - we only provide advisory and execution services.',
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
                                    {Array.isArray(faq.answer) ? (
                                        <ul className="space-y-2">
                                            {faq.answer.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-relaxed">{faq.answer}</p>
                                    )}
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
