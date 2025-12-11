import React from 'react';
import Hero from '../components/Hero';
import MFDRevolution from '../components/MFDRevolution';
import Features from '../components/Features';
import ExistingMFDSection from '../components/ExistingMFDSection';
import AspiringMFDSection from '../components/AspiringMFDSection';
import GrowthStatistics from '../components/GrowthStatistics';
import Testimonials from '../components/Testimonials';
import BenefitsSection from '../components/BenefitsSection';
import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <MFDRevolution />
            <Features />
            <ExistingMFDSection />
            <AspiringMFDSection />
            <GrowthStatistics />
            <Testimonials />
            <BenefitsSection />
            <CallToAction />
            <FAQSection />
        </>
    );
};

export default Home;
