import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ForMFDs: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-neutral-50">
                <div className="container-custom relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm mb-10">
                        <Link to="/" className="text-primary hover:text-primary-dark transition-colors">
                            Home
                        </Link>
                        <span className="text-neutral-400">/</span>
                        <span className="text-neutral-500">For MFDs</span>
                    </nav>
                    
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#243062] mb-6 leading-tight">
                            Transform your distribution business into a digital wealth brand.
                        </h1>
                        <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Nivesh empowers Mutual Fund Distributors to scale faster, serve better, and evolve beyond transactions — with a digital platform that's fully white-labeled, multi-product, and client-first.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Get Your Free Platform
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="border-2 border-[#243062] text-[#243062] hover:bg-[#243062] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                Book a Demo →
                            </Button>
                        </div>
                        <p className="text-lg md:text-xl font-semibold text-[#243062] mt-8 italic">
                            "Platforms don't replace advisors — they evolve them."
                        </p>
                    </div>
                </div>
            </section>

            {/* Why MFDs Need a Platform Now Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-6 text-center leading-tight">
                            You've built trust. Now build scale.
                        </h2>
                        <div className="space-y-6 mb-8">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                The old way of managing client portfolios — through Excel sheets, emails, and manual updates — limits growth and hurts client engagement.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                Today's investors expect seamless, digital experiences and multi-product portfolios.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                With Nivesh, you can automate operations, expand your offering, and build a brand that grows with you.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl font-bold">✅</span>
                                    <p className="text-base md:text-lg text-neutral-700">Go digital — onboard clients instantly</p>
                                </div>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl font-bold">✅</span>
                                    <p className="text-base md:text-lg text-neutral-700">Expand beyond mutual funds — offer PMS, AIFs, Bonds, and Insurance</p>
                                </div>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl font-bold">✅</span>
                                    <p className="text-base md:text-lg text-neutral-700">Build your brand with your own app and web portal</p>
                                </div>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl font-bold">✅</span>
                                    <p className="text-base md:text-lg text-neutral-700">Deliver transparency and real-time insights</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => {
                                    const element = document.getElementById('features');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                Explore How Nivesh Works →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Changes with Nivesh Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            From manual management to intelligent growth.
                        </h2>
                        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Without Platform</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">With Nivesh</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200">
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Manual data entry</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700 font-semibold">Smart dashboards & automated reporting</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Product selling</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700 font-semibold">Goal-based, advisory-led approach</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">One product (MFs)</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700 font-semibold">Multi-product ecosystem: PMS, AIFs, Bonds, Insurance</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Fragmented tools</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700 font-semibold">One unified platform</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Time spent on ops</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700 font-semibold">More time for client engagement</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold text-[#243062] mt-8 italic">
                            "Let the tech do the work — so you can focus on what matters: your clients."
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Built for MFDs Section */}
            <section id="features" className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Everything you need. Nothing you don't.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">1️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        Digital Onboarding & KYC
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Instant Aadhaar-based onboarding, eSign, and eMandate — faster client activation, zero paperwork.
                                </p>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">2️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        Goal-Based Planning
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Move beyond SIPs — help clients visualize and achieve their financial goals.
                                </p>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">3️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        Multi-Product Access
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Distribute PMS, AIFs, Bonds, MLDs, and Insurance — all on one screen.
                                </p>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">4️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        Portfolio Insights & Analytics
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Track performance, identify trends, and send timely alerts — all under your brand.
                                </p>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">5️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        White-Label Branding
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Your name. Your app. Your identity. Clients always remember who manages their money.
                                </p>
                            </div>
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-2xl font-bold text-primary">6️⃣</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#243062]">
                                        Marketing & Communication Tools
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Get ready creatives, track leads, and run campaigns — directly from your dashboard.
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                View Platform Features →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Growth, Real Stories Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 text-center leading-tight">
                            Advisors who switched to Nivesh are seeing 2x–5x business growth.
                        </h2>
                        <p className="text-base md:text-lg text-neutral-700 mb-8 text-center leading-relaxed">
                            When advisors go digital, their business grows faster, and client satisfaction soars. Hear from those who've made the leap.
                        </p>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 italic">
                                    "Everything runs digitally now — onboarding, reports, and portfolio reviews. My time goes to clients, not admin."
                                </p>
                                <p className="text-sm md:text-base font-semibold text-[#243062]">
                                    — Ankit Jain, MFD from Pune
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-neutral-200">
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 italic">
                                    "Nivesh helped me expand beyond MFs. Now I offer PMS and Bonds too — clients see me as their wealth partner."
                                </p>
                                <p className="text-sm md:text-base font-semibold text-[#243062]">
                                    — Rohit Mehta, MFD from Ahmedabad
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                See All Success Stories →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scale Your Brand with Nivesh Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-6 text-center leading-tight">
                            Your business, your brand — powered by Nivesh.
                        </h2>
                        <div className="space-y-6 mb-8">
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-center">
                                Unlike other platforms that keep your clients under their name, Nivesh helps you build your brand.
                            </p>
                            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-center">
                                Launch your own white-labeled platform and app in just days — so every interaction strengthens your identity and trust.
                            </p>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold text-[#243062] mb-8 italic">
                            "Your clients shouldn't remember who powered the platform — they should remember you."
                        </p>
                        <div className="text-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                Get My White-Label Platform →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why MFDs Choose Nivesh Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Built for MFDs. Backed by experience.
                        </h2>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
                            <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Trusted by 10,000+ advisors across India</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Integrated with CAMS & KFin</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Zero onboarding cost</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Compliant with AMFI & SEBI regulations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Access to PMS, AIF, Bonds, MLDs, and Insurance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">•</span>
                                    <span>Dedicated training & support team for growth</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 border-2 border-primary/20 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                                The future MFD is digital. The platform is Nivesh.
                            </h2>
                            <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed">
                                Join thousands of advisors using Nivesh to scale faster, offer more, and deliver better outcomes for clients.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Get Started Free
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Talk to a Platform Expert →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForMFDs;

