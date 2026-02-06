import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import ContactModal from '@/components/modals/ContactModal';
import LASImage from '../../assets/LAS.png';
import { fetchFAQs, type FAQ } from '../../services/api';

const LoanAgainstSecurities: React.FC = () => {
    const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loadingFaqs, setLoadingFaqs] = useState(true);
    const [activeTab, setActiveTab] = useState<'advantages' | 'suitability' | 'taxation' | 'safety'>('advantages');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch FAQs from API
    useEffect(() => {
        const loadFAQs = async () => {
            try {
                setLoadingFaqs(true);
                const allFaqs = await fetchFAQs();
                // Filter FAQs by category "loan-against-securities"
                const filteredFaqs = allFaqs.filter(faq => {
                    const category = faq.category?.toLowerCase() || '';
                    return category === 'loan-against-securities' || 
                           category === 'loan against securities' ||
                           category.includes('loan-against-securities');
                });
                setFaqs(filteredFaqs);
            } catch (error) {
                console.error('Error loading FAQs:', error);
                setFaqs([]);
            } finally {
                setLoadingFaqs(false);
            }
        };

        loadFAQs();
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const features = [
        {
            title: 'Prevailing interest rates',
            description: 'Loan Against Securities interest rates are generally lower than personal loans or credit cards. The rates depend on the type of securities pledged, their value, and market conditions. If interest rates are falling, you may benefit from lower borrowing costs.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            title: 'Loan Tenure',
            description: 'The tenure of Loan Against Securities can vary based on the type of securities and lender policies. Longer tenures provide more flexibility in repayment, while shorter tenures may offer better interest rates. The value of your securities determines the maximum loan amount you can avail.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Credit quality',
            description: 'The quality and type of securities you pledge significantly impact the loan terms. High-quality securities like blue-chip stocks, government bonds, and mutual funds typically get better loan-to-value ratios and lower interest rates. Lenders assess the credit quality of your securities portfolio to determine loan eligibility.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-20 md:pt-24 pb-12 md:pb-20 bg-gradient-to-br from-primary/10 via-white to-primary/5">
                <div className="container-custom">
                    <div className="max-w-7xl mx-auto">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center space-x-2 text-sm mb-6">
                            <Link to="/" className="text-primary hover:text-primary-dark transition-colors">
                                        Home
                                    </Link>
                            <span className="text-neutral-400">/</span>
                            <span className="text-neutral-500">Loan Against Securities</span>
                        </nav>

                        <div className="grid lg:grid-cols-[40%_60%] gap-6 md:gap-6 items-start">
                            <div className="lg:pr-6">
                                <h2 className="md:hidden text-2xl sm:text-3xl font-bold text-[#243062] mb-4 leading-tight">
                                    Loan Against Securities with Nivesh
                                </h2>
                                <h1 className="hidden md:block text-4xl md:text-5xl lg:text-6xl font-bold text-[#243062] mb-4 md:mb-4 leading-tight">
                                    Loan Against Securities with Nivesh
                                </h1>
                                <p className="text-base md:text-lg text-neutral-700 mb-6 md:mb-8 leading-relaxed">
                                    To strengthen your portfolio's risk-return profile, Loan Against Securities allows you to unlock the value of your investments without selling them. If you are looking to get a loan against your securities, go with Nivesh.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-[#243062] hover:bg-[#1a2550] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        I am Interested
                                    </Button>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <img
                                    src={LASImage}
                                    alt="Loan Against Securities"
                                    className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Features
                        </h2>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-[#243062] mb-3">{feature.title}</h3>
                                            <p className="text-base text-neutral-700 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            How it works?
                        </h2>
                        <div className="bg-white rounded-lg p-8 border border-neutral-200 space-y-6">
                            <div>
                                <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                    Loan Against Securities is a secured loan where you pledge your investments (stocks, mutual funds, bonds) as collateral to get funds. There are two main methods:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-primary/10 rounded-lg p-4">
                                        <h4 className="font-semibold text-[#243062] mb-2">Through Your Broker</h4>
                                        <p className="text-sm text-neutral-700">Apply through your stockbroker or financial institution where you hold your securities.</p>
                                    </div>
                                    <div className="bg-primary/10 rounded-lg p-4">
                                        <h4 className="font-semibold text-[#243062] mb-2">Through Banks/NBFCs</h4>
                                        <p className="text-sm text-neutral-700">Apply directly with banks or Non-Banking Financial Companies that offer this facility.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                    Borrowers need to be aware of two primary aspects: Loan-to-Value (LTV) ratio and interest rates. LTV ratio determines how much loan you can get against your securities' value. Typically, lenders offer 50-70% of the market value of your securities as loan. Interest rates are usually lower than personal loans and are calculated on the outstanding loan amount.
                                </p>
                                <p className="text-base text-neutral-700 leading-relaxed">
                                    The loan amount depends on the value of your securities. If the value of your pledged securities falls below a certain threshold (margin call), you may need to provide additional securities or repay part of the loan. You continue to own your securities and can benefit from any appreciation, while using them as collateral for immediate liquidity needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Benefits of Loan Against Securities
                        </h2>
                        <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                            <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                Loan Against Securities offers several advantages for investors who need liquidity without selling their investments. This facility allows you to unlock the value of your portfolio while maintaining ownership of your securities.
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                You can use various types of securities including equity shares, mutual funds, bonds, and government securities. The loan can be used for various purposes like business expansion, personal expenses, or investment opportunities, providing flexibility in fund utilization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invest in Bonds Section with Tabs */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Loan Against Securities
                        </h2>
                        
                        {/* Tab Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <button
                                onClick={() => setActiveTab('advantages')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    activeTab === 'advantages'
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                            >
                                Advantages
                            </button>
                            <button
                                onClick={() => setActiveTab('suitability')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    activeTab === 'suitability'
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                            >
                                Suitability
                            </button>
                            <button
                                onClick={() => setActiveTab('taxation')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    activeTab === 'taxation'
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                            >
                                Taxation
                            </button>
                            <button
                                onClick={() => setActiveTab('safety')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    activeTab === 'safety'
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                            >
                                Is it safe
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-lg p-8 border border-neutral-200">
                            {activeTab === 'advantages' && (
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-xl font-semibold text-[#243062] mb-3">No Need to Sell Investments:</h5>
                                        <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                            Loan Against Securities allows you to access funds without selling your investments. You continue to own your securities and can benefit from any appreciation in their value while using them as collateral.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-[#243062] mb-3">Lower Interest Rates:</h5>
                                        <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                            Interest rates on Loan Against Securities are typically lower than personal loans, credit cards, or unsecured loans. Since your securities act as collateral, lenders offer competitive rates.
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold text-[#243062] mb-3">Quick Processing:</h5>
                                        <p className="text-base text-neutral-700 leading-relaxed">
                                            Loan Against Securities can be processed quickly, often within 24-48 hours, as the securities are already in your demat account. Minimal documentation is required compared to traditional loans.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'suitability' && (
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-base text-neutral-700 leading-relaxed">
                                            Loan Against Securities is suitable for investors who need immediate liquidity but don't want to sell their investments. It's ideal for those who have a substantial portfolio of securities and require funds for short to medium-term needs.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'taxation' && (
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                            Interest paid on Loan Against Securities is generally tax-deductible if the loan is used for business or investment purposes. However, if used for personal expenses, the interest may not be deductible. It's advisable to consult with a tax advisor for specific tax implications based on your usage.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'safety' && (
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-base text-neutral-700 leading-relaxed mb-4">
                                            Loan Against Securities is considered relatively safe as it's a secured loan backed by your investments. However, you should be aware of margin calls if the value of your securities falls significantly. It's important to maintain adequate margin and monitor your portfolio value regularly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 md:py-20 bg-primary/10">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#243062] mb-2">9,134</div>
                                <div className="text-sm md:text-base text-neutral-700">Partners in 772 cities across India</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#243062] mb-2">58,505</div>
                                <div className="text-sm md:text-base text-neutral-700">Customers spread over 3,000 pincodes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#243062] mb-2">48,54,650</div>
                                <div className="text-sm md:text-base text-neutral-700">Transactions Executed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#243062] mb-2">Rs. 6,478</div>
                                <div className="text-sm md:text-base text-neutral-700">Crore- Transaction Value</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        {loadingFaqs ? (
                            <div className="text-center py-12">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                <p className="mt-4 text-neutral-600">Loading FAQs...</p>
                            </div>
                        ) : faqs.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-neutral-600">No FAQs available at the moment.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={faq.id} className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-100 transition-colors"
                                        >
                                            <span className="font-semibold text-[#243062] pr-4">{faq.question}</span>
                                            <span className={`text-primary transition-transform ${openFaqs[index] ? 'rotate-180' : ''}`}>
                                                <svg
                                                    className="w-5 h-5"
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
                                            </span>
                                        </button>
                                        {openFaqs[index] && (
                                            <div className="px-6 py-4 border-t border-neutral-200">
                                                {faq.answer && (
                                                    <div className="text-base text-neutral-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pageSource="Loan Against Securities" />
        </div>
    );
};

export default LoanAgainstSecurities;

