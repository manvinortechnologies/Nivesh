import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
    const headlines = [
        "Upgrade Your Business. Outgrow Your Market.",
        "Want To Grow 5X? We Can Make It Happen.",
        "Built for MFDs Who Refuse to Stay Small.",
        "Stop Distributing. Start Dominating.",
        "Build a High-Growth Advisory Business. Starting Today."
    ];

    const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#E63946] via-[#ff8a80] to-white overflow-hidden">
            {/* Background Animation/Gradient */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <div className="container-custom relative pt-32 pb-20 md:pt-40 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="z-10">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 min-h-[160px] md:min-h-[200px] transition-all duration-500 ease-in-out text-white">
                        Grow 5X.. <br />
                        <span className="text-black">smart tech, smarter advisors</span>
                        <div className="text-2xl md:text-3xl mt-4 font-light text-white/90">
                            {headlines[currentHeadlineIndex]}
                        </div>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                        Smart tech, proactive research, and a premium client experience that puts you ahead of every competitor.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button variant="primary" size="lg" className="bg-black text-red-500 hover:bg-neutral-100 border-none shadow-lg">
                            Supercharge Your Business
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                            Become an MFD →
                        </Button>
                    </div>

                    <p className="text-sm text-white/80 font-medium mb-8">
                        Launch your own branded wealth platform in days, not months.
                    </p>

                    {/* Trust Strip */}
                    <div className="border-t border-white/20 pt-6">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-white/80">
                            <span>Trusted by 10,000+ advisors</span>
                            <span className="hidden md:inline">|</span>
                            <span>Integrated with CAMS & KFin</span>
                            <span className="hidden md:inline">|</span>
                            <span>AMFI-compliant</span>
                            <span className="hidden md:inline">|</span>
                            <span>Launch in 1 hour</span>
                            <span className="hidden md:inline">|</span>
                            <span>Zero onboarding cost</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual - Wealth Tree Concept */}
                <div className="relative flex justify-center items-center h-[500px]">
                    {/* Central Node */}
                    <div className="relative z-20 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(230,57,70,0.3)] animate-pulse-slow border-4 border-white/50">
                        <div className="text-center">
                            <div className="text-primary font-bold text-lg">Your Brand</div>
                            <div className="text-xs text-neutral-500">You</div>
                        </div>
                    </div>

                    {/* Orbiting Nodes */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {/* Node 1: MF */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            MF
                        </div>
                        {/* Node 2: PMS */}
                        <div className="absolute top-1/4 right-0 translate-x-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            PMS
                        </div>
                        {/* Node 3: AIF */}
                        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            AIF
                        </div>
                        {/* Node 4: Bonds */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            Bonds
                        </div>
                        {/* Node 5: Insurance */}
                        <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            Insurance
                        </div>
                        {/* Node 6: Loans (Optional/Extra) */}
                        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-20 h-20 bg-primary text-white border-2 border-white rounded-full flex items-center justify-center font-semibold text-sm shadow-xl transform hover:scale-110 transition-transform">
                            Loans
                        </div>
                    </div>

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                        <circle cx="50%" cy="50%" r="150" fill="none" stroke="#E63946" strokeWidth="1" strokeDasharray="10 10" />
                        <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#E63946" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#E63946" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="80%" y2="65%" stroke="#E63946" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#E63946" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="#E63946" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="20%" y2="35%" stroke="#E63946" strokeWidth="1" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
