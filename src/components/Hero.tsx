import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.jpeg';
import Hero3 from '../assets/Hero3.jpeg';
import Hero4 from '../assets/Hero4.jpeg';
import Hero5 from '../assets/Hero5.jpeg';

const Hero: React.FC = () => {
    const headlines = [
        "Upgrade Your Business. Outgrow Your Market.",
        "Want To Grow 5X? We Can Make It Happen.",
        "Built for MFDs Who Refuse to Stay Small.",
        "Stop Distributing. Start Dominating.",
        "Build a High-Growth Advisory Business. Starting Today."
    ];

    const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5];

    const subHeadlines = [
        "Smart tech, proactive research, and a premium client experience that puts you ahead of every competitor.",
        "Smart Decisions: Advanced analytics guide your investments using real-time trends.",
        "Seamless Experience: Technology ensures secure and hassle-free investing.",
        "Expert Guidance: Personalized advice to match your financial goals.",
        "Trusted Partner: Complete transparency and robust security for your investments."
    ];

    const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const headlineInterval = setInterval(() => {
            setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        }, 3000);

        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 4000);

        return () => {
            clearInterval(headlineInterval);
            clearInterval(imageInterval);
        };
    }, [headlines.length, heroImages.length]);

    return (
        <section className="relative min-h-screen bg-neutral-100 overflow-hidden">
            {/* Background Animation/Gradient - Removed dark overlay for light theme */}
            {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div> */}

            <div className="container-custom relative pt-20 pb-8 md:pt-28 md:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Content */}
                <div className="z-10 lg:col-span-7">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight min-h-[160px] md:min-h-[200px] transition-all duration-500 ease-in-out text-[#243062]">
                        Grow 5X.. <br />
                        <span className="text-primary">smart tech, smarter advisors</span>
                        <div className="text-xl md:text-2xl mt-2 font-light text-neutral-700">
                            {headlines[currentHeadlineIndex]}
                        </div>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-700 mb-2 max-w-xl min-h-[84px] transition-all duration-500 ease-in-out">
                        {subHeadlines[currentHeadlineIndex]}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <Button variant="primary" size="lg" className="bg-black text-white hover:bg-neutral-800 border-none shadow-lg flex items-center gap-2">
                        Existing MFD? Connect with Us
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Button>
                        <Button variant="outline" size="lg" className="border-neutral-900 text-neutral-900 hover:bg-neutral-200 flex items-center gap-2">
                            Become an MFD
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Button>
                    </div>

                    <p className="text-lg text-neutral-600 font-medium mb-2">
                        Launch your own branded wealth platform in days, not months.
                    </p>


                </div>

                {/* Right Visual - Image Carousel */}
                <div className="relative flex flex-col justify-center items-center h-[330px] md:h-[430px] w-full lg:col-span-5">
                    <div className="relative w-full h-full overflow-hidden mr-2">
                        {heroImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Hero Visual ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>
                    
                    {/* Carousel Indicators - Below Image */}
                    <div className="flex justify-center gap-2 mt-4">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-neutral-900 w-6' : 'bg-neutral-300 w-2'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Strip */}
                <div className="col-span-1 lg:col-span-12 pt-2 md:pt-1">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-2 text-sm sm:text-base md:text-lg text-neutral-600 px-2 md:px-0">
                        <span>Trusted by <span className="font-bold text-neutral-900">10,000+</span> advisors</span>
                        <span className="hidden md:inline">|</span>
                        <span>Integrated with <span className="font-bold text-neutral-900">CAMS & KFin</span></span>
                        <span className="hidden md:inline">|</span>
                        <span>AMFI-compliant</span>
                        <span className="hidden md:inline">|</span>
                        <span>Launch in <span className="font-bold text-neutral-900">1 hour</span></span>
                        <span className="hidden md:inline">|</span>
                        <span>Zero onboarding cost</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
