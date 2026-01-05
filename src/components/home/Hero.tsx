import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.jpeg";
// import Hero3 from "../../assets/Hero3.jpeg";
// import Hero4 from "../../assets/Hero4.jpeg";
// import Hero5 from "../../assets/Hero5.jpeg";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const headlines = [
    "Upgrade Your Business. Outgrow Your Market.",
    "Want To Grow 5X? We Can Make It Happen.",
    "Built for MFDs Who Refuse to Stay Small.",
    "Stop Distributing. Start Dominating.",
    "Build a High-Growth Advisory Business. Starting Today.",
  ];

  const heroImages = [Hero1, Hero2];

  const subHeadlines = [
    "Smart tech, proactive research, and a premium client experience that puts you ahead of every competitor.",
    "Smart Decisions: Advanced analytics guide your investments using real-time trends.",
    "Seamless Experience: Technology ensures secure and hassle-free investing.",
    "Expert Guidance: Personalized advice to match your financial goals.",
    "Trusted Partner: Complete transparency and robust security for your investments.",
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setCurrentHeadlineIndex(
        (prevIndex) => (prevIndex + 1) % headlines.length
      );
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => {
      clearInterval(headlineInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-neutral-100 overflow-hidden">
      <div className="container-custom relative pt-20 pb-8 md:pt-28 md:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10 lg:col-span-7 order-1">
          <h1 className="font-bold leading-tight text-[#243062] min-h-[140px] md:min-h-[200px]">
            {/* Grow 5X */}
            <span className="block text-3xl sm:text-4xl md:text-6xl">
              Grow 5X..
            </span>

            {/* Smart tech, smarter advisors */}
            <span className="block text-4xl sm:text-3xl md:text-6xl text-primary lowercase md:capitalize">
              smart tech,
            </span>

            <span className="block text-4xl sm:text-3xl md:text-6xl text-primary lowercase md:capitalize">
              smarter advisors
            </span>

            {/* Rotating headline */}
            <div className="mt-3 text-base sm:text-lg md:text-2xl font-light text-gray-600">
              {headlines[currentHeadlineIndex]}
            </div>
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 mb-4 max-w-xl min-h-[84px]">
            {subHeadlines[currentHeadlineIndex]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              variant="primary"
              size="lg"
              className="bg-black text-white text-[14px] hover:bg-neutral-800 border-none shadow-lg flex items-center gap-2"
              onClick={() => navigate('/for-mfds')}
            >
              Existing MFD? Connect with Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-neutral-900 text-neutral-900 hover:bg-neutral-200 flex items-center gap-2"
              onClick={() => window.location.href = 'https://nivesh.com/en/partner/become-mutual-fund-distributors'}
            >
              Become an MFD
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>

          <p className="text-lg text-neutral-600 font-medium">
            Launch your own branded wealth platform in{" "}
            <span className="text-black">minutes</span>, not months.
          </p>
        </div>

        {/* TRUST STRIP */}
        <div className="order-2 lg:order-3 col-span-1 lg:col-span-12">
          <div className="flex flex-wrap justify-start lg:justify-start gap-x-2 gap-y-2 text-sm sm:text-base md:text-lg text-neutral-600 px-2 md:px-0">
            <span>
              Trusted by{" "}
              <span className="font-bold text-neutral-900">10,000+</span>{" "}
              advisors
            </span>
            <span>|</span>
            <span>
              Integrated with{" "}
              <span className="font-bold text-neutral-900">CAMS & KFin</span>
            </span>
            <span>|</span>
            <span>AMFI-compliant</span>
            <span>|</span>
            <span>
              Launch in{" "}
              <span className="font-bold text-neutral-900">1 hour</span>
            </span>
            <span>|</span>
            <span>Zero onboarding cost</span>
          </div>
        </div>

        {/* RIGHT VISUAL / CAROUSEL */}
        <div className="relative flex flex-col justify-center items-center h-[330px] md:h-[430px] w-full lg:col-span-5 order-3 lg:order-2">
          <div className="relative w-full h-full overflow-hidden">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Hero Visual ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>

          {/* INDICATORS */}
          <div className="flex justify-center gap-2 mt-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentImageIndex
                  ? "bg-neutral-900 w-6"
                  : "bg-neutral-300 w-2"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;