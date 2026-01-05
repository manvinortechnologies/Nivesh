import React from 'react';
import HeroSection from '../components/about/HeroSection';
import OurStory from '../components/about/OurStory';
import OurTeam from '../components/about/OurTeam';
import Investors from '../components/about/Investors';
import OurPartners from '../components/about/OurPartners';
import Testimonials from '../components/home/Testimonials';

const About: React.FC = () => {
    return (
        <>
            <HeroSection />
            <OurStory />
            <OurTeam />
            <Investors />
            <OurPartners />
            <Testimonials />
        </>
    );
};

export default About;



