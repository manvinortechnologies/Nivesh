import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import POPImage from '../../assets/POP.webp';

const PreOwnedPolicies: React.FC = () => {
    const [openBenefits, setOpenBenefits] = useState<{ [key: number]: boolean }>({ 0: true }); // First one open by default

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleBenefit = (index: number) => {
        setOpenBenefits((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-white">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-5xl font-bold text-[#243062] mb-6 leading-tight">
                                Pre-Owned Policies: Unlock Value from Existing Insurance Policies
                            </h2>
                            
                            <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
                                Pre-owned policies offer a unique opportunity to unlock value from existing life insurance policies. Whether you're looking to sell your policy or invest in a pre-owned policy, Nivesh provides expert guidance and seamless transactions to help you maximize returns and optimize your financial portfolio.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Explore Options
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.open('https://nivesh.com/en/products', '_blank')}
                                    className="border-2 border-[#243062] text-[#243062] hover:bg-[#243062] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - POP Image */}
                        <div className="relative z-10">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={POPImage}
                                    alt="Pre-Owned Policies"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What are Pre-Owned Policies Section */}
            <section className="py-12 md:py-20 bg-primary/10">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            What are Pre-Owned Policies?
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-transparent">
                                <p className="text-base md:text-lg text-[#243062] leading-relaxed">
                                    Pre-owned policies, also known as life settlement policies, are existing life insurance policies that can be sold or transferred to a third party. These policies allow policyholders to unlock the value of their life insurance policies before maturity, providing liquidity and financial flexibility. Investors can purchase these policies at a discounted rate, offering potential returns based on the policy's terms and the insured's life expectancy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits for Investors Section */}
            <section className="py-12 md:py-20 bg-[#243062]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-8 md:mb-12 leading-tight">
                            Key Benefits for Investors
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Reduced Lock-in',
                                    description: 'Since the policy has already run for a few years, you step in closer to its payout horizon.',
                                },
                                {
                                    title: 'Compounded Growth',
                                    description: 'Pre-owned policies offer the benefit of compounded growth as the policy has already accumulated value over time, providing investors with enhanced returns compared to new policies.',
                                },
                                {
                                    title: 'Predictable Returns',
                                    description: 'With policies that have been in force for several years, investors can better predict returns based on historical performance and policy terms, reducing uncertainty.',
                                },
                                {
                                    title: 'Tax-Shielded Income',
                                    description: 'Pre-owned policies can provide tax advantages, with potential tax-shielded income benefits depending on policy structure and jurisdiction, optimizing after-tax returns.',
                                },
                                {
                                    title: 'Secondary Market Advantage',
                                    description: 'Investing in the secondary market for life insurance policies provides access to discounted policies and unique investment opportunities not available in primary markets.',
                                },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleBenefit(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-transparent border-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors duration-200"
                                    >
                                        <h3 className="text-lg md:text-xl font-bold text-[#243062] pr-4">
                                            {benefit.title}
                                        </h3>
                                        <svg
                                            className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                                                openBenefits[index] ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openBenefits[index] && (
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal for Investors Who Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            Ideal for Investors Who:
                        </h2>
                        <div className="space-y-4">
                            <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Want safe, tax-efficient investment options with moderate but reliable returns.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Prefer shorter tenures instead of locking funds for decades.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Aim to diversify portfolios with guaranteed or bonus-based instruments.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Look for low-risk alternatives to FDs, bonds, or savings schemes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works as a Tax-Efficient Investment Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Why It Works as a Tax-Efficient Investment
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Section 80C Deduction
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Premiums paid after transfer can qualify for deductions (subject to limits).
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Tax-Free Returns
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Maturity and death benefits (conditions apply) may be exempt under Section 10(10D).
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Lower Effective Cost
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Since you enter midway, your effective yield may be higher than starting a new policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Benefits of Pre-Owned Policies
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: 'For Policy Sellers',
                                    description: 'Sell your existing life insurance policy to receive immediate cash value, providing liquidity when you need it most. This is especially beneficial if your financial needs have changed or you no longer require the coverage.',
                                },
                                {
                                    title: 'For Investors',
                                    description: 'Invest in pre-owned policies at discounted rates, offering potential returns based on policy terms. This provides an alternative investment opportunity with potential for attractive returns.',
                                },
                                {
                                    title: 'Portfolio Diversification',
                                    description: 'Pre-owned policies offer a unique asset class for portfolio diversification, providing exposure to insurance-linked investments that are not directly correlated with traditional markets.',
                                },
                                {
                                    title: 'Professional Guidance',
                                    description: 'Expert valuation and guidance throughout the transaction process, ensuring you make informed decisions and maximize value from your policy or investment.',
                                },
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            How Pre-Owned Policies Work
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                            For Policy Sellers:
                                        </h3>
                                        <ol className="list-decimal list-inside space-y-3 text-base md:text-lg text-neutral-700">
                                            <li>Contact Nivesh to evaluate your policy and determine its market value</li>
                                            <li>Submit necessary documentation and policy details for assessment</li>
                                            <li>Receive a valuation and offer for your policy</li>
                                            <li>Complete the transaction and receive cash value for your policy</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                            For Investors:
                                        </h3>
                                        <ol className="list-decimal list-inside space-y-3 text-base md:text-lg text-neutral-700">
                                            <li>Browse available pre-owned policies through Nivesh platform</li>
                                            <li>Review policy details, terms, and valuation reports</li>
                                            <li>Select policies that match your investment criteria</li>
                                            <li>Complete purchase and manage your policy portfolio</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Considerations Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            Important Considerations
                        </h2>
                        <div className="space-y-4">
                            <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Always verify the premium schedule to ensure affordability.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Check the remaining tenure—shorter tenures often provide quicker liquidity.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Ensure proper endorsement and documentation for legal ownership.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3 font-bold">•</span>
                                    <span>Tax benefits depend on compliance with current Income Tax laws—consult a tax advisor for clarity.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted by The Policy Exchange Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 leading-tight">
                            Trusted by The Policy Exchange
                        </h2>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                We bring you these opportunities in partnership with The Policy Exchange—a pioneer in facilitating transparent, verified, and investor-friendly pre-owned policy transfers. With their expertise, you get access to thoroughly vetted policies, making your investment journey safe and rewarding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Banner Section */}
            <section className="py-12 md:py-16 bg-primary/10">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#243062] leading-tight">
                                Smarter Investment. Tax-efficient Growth. Pre-owned Policies by The Policy Exchange.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            

           
        </div>
    );
};

export default PreOwnedPolicies;

