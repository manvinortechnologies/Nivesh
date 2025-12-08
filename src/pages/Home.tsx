import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Team />
            <Testimonials />
            <CallToAction />
            <FAQSection />
        </>
    );
};

export default Home;
