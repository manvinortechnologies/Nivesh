import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import InvestmentProducts from '../components/InvestmentProducts';
import BenefitsSection from '../components/BenefitsSection';
import TechHumanSection from '../components/TechHumanSection';
import GrowthStatistics from '../components/GrowthStatistics';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <InvestmentProducts />
            <BenefitsSection />
            <TechHumanSection />
            <GrowthStatistics />
            <Team />
            <Testimonials />
            <CallToAction />
            <FAQSection />
        </>
    );
};

export default Home;
