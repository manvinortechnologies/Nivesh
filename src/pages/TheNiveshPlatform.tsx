import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const TheNiveshPlatform: React.FC = () => {
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
                            <span className="text-neutral-500">The Nivesh Platform</span>
                        </nav>
                    
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm md:text-lg text-primary font-semibold mb-6 uppercase tracking-wide">
                            One digital platform. Every wealth solution. Backed by research, intelligence, and trust.
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#243062] mb-8 leading-tight">
                            One platform. Smarter wealth management.
                        </h1>
                        <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                            From Mutual Funds to PMS, AIFs, Bonds, and Insurance — Nivesh empowers you with data-driven research, intelligent recommendations, and a seamless digital platform to grow your clients and your brand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Book a Demo
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => {
                                    const element = document.getElementById('features');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="border-2 border-[#243062] text-[#243062] hover:bg-[#243062] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                            >
                                Explore Features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unified Product Ecosystem Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            From investments to protection — deliver holistic solutions effortlessly.
                        </h2>
                        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Product</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">What It Means for You</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Client Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200">
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Mutual Funds</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Access curated schemes & recommendations powered by proprietary scoring</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Smarter SIPs, aligned to goals</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">PMS</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Connect clients to premium portfolio managers</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Personalized, high-alpha solutions</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">AIFs</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Unlock advanced strategies for qualified investors</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Diversified, growth-oriented exposure</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Bonds & MLDs</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Offer stable, fixed-income alternatives</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Balance risk and reward</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Life & Health Insurance</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Add protection and peace of mind</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">True financial wellness</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold text-[#243062] mt-8 italic">
                            All products. One login. Intelligent diversification.
                        </p>
                    </div>
                </div>
            </section>

            {/* Proprietary Research & Advisory Intelligence Section */}
            <section id="features" className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 text-center leading-tight">
                            Research that empowers real advice.
                        </h2>
                        <p className="text-base md:text-lg text-neutral-700 mb-8 text-center leading-relaxed">
                            Nivesh's in-house research engine helps you go beyond selling — to advising with confidence.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Fund Scoring Model
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Data-backed mutual fund scoring across performance, risk, and consistency.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Portfolio Construction
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Goal-based, asset-allocated model portfolios tailored to client profiles.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Portfolio Review Engine
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Automated health checks and alerts to identify rebalancing needs.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-[#243062] mb-4">
                                    Insights Dashboard
                                </h3>
                                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                                    Actionable signals to help MFDs proactively engage clients.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20 text-center">
                            <p className="text-lg md:text-xl font-semibold text-[#243062] italic">
                                Transform from distributor to trusted wealth strategist.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisor Tools & Capabilities Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Simplify operations. Amplify relationships.
                        </h2>
                        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Capability</th>
                                            <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200">
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Digital Onboarding & KYC</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Seamless client activation, paperless and compliant</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Goal Planning & Tracking</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Interactive goal planner with real-time progress charts</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Portfolio Reports & Analytics</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Rich visuals that clients love and trust</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Multi-Product Transactions</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">One-click execution across MF, PMS, Bonds & Insurance</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">White-label App & Dashboard</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Offer your clients a premium experience under your brand</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50 transition-colors">
                                            <td className="px-6 py-5 text-lg md:text-xl font-bold text-[#243062]">Marketing & CRM Tools</td>
                                            <td className="px-6 py-5 text-sm md:text-base text-neutral-700">Campaign templates, client alerts, and engagement tracking</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-center text-xl md:text-2xl font-bold text-[#243062] mt-8 italic">
                            Let tech handle the heavy lifting — you focus on advice and growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* White-label Advantage Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Your brand. Powered by Nivesh.
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                                <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Launch your own branded mobile app and client portal — no coding, no infrastructure cost.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Clients invest, track, and interact with you — not a third-party name.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Build visibility, trust, and long-term stickiness.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-center text-xl md:text-2xl font-bold text-[#243062] italic">
                                Because clients remember brands, not backends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security, Compliance & Reliability Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            Built on trust. Backed by compliance.
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
                                <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>AMFI-registered, SEBI-compliant framework</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Integrated with BSE StAR MF and NSE systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>End-to-end encryption and secure data hosting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Multi-layer verification for every transaction</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>99.9% uptime and continuous monitoring</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20 text-center">
                                <p className="text-lg md:text-xl font-semibold text-[#243062] italic">
                                    Your clients' trust is your biggest asset — and our highest priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Support & Partnership Section */}
            <section className="py-12 md:py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-8 md:mb-12 text-center leading-tight">
                            You grow. We grow with you.
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                                <ul className="space-y-4 text-base md:text-lg text-neutral-700">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Dedicated partner success team</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Marketing and client acquisition support</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Continuous platform enhancements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1 font-bold">•</span>
                                        <span>Access to industry insights and advisor communities</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-center text-xl md:text-2xl font-bold text-[#243062] italic">
                                Your growth story is built into our roadmap.
                            </p>
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
                                Discover a smarter way to grow your wealth business.
                            </h2>
                            <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed">
                                Manage every client, every product, and every insight — from one intelligent platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Book a Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => window.open('https://app.nivesh.com', '_blank')}
                                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold"
                                >
                                    Talk to Our Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TheNiveshPlatform;

