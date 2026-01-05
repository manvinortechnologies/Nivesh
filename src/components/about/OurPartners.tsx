import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Partner1Logo from './images/partner1.svg';
import Partner2Logo from './images/partner2.svg';
import Partner3Logo from './images/partner3.svg';
import Partner4Logo from './images/partner4.svg';
import Partner5Logo from './images/partner5.svg';
import Partner6Logo from './images/partner6.svg';

interface Partner {
    name: string;
    logo?: string;
    description: string;
    link?: string;
}

const OurPartners: React.FC = () => {
    const navigate = useNavigate();
    
    const partners: Partner[] = [
        {
            name: 'PNB Housing Finance Ltd.',
            logo: Partner1Logo,
            description: 'Know More About PNB Housing Finance Ltd.',
            link: '/fixed-deposit/pnb-housing-finance-ltd',
        },
        {
            name: 'HDFC Limited',
            logo: Partner2Logo,
            description: 'Know More About HDFC Limited',
            link: '/fixed-deposit/hdfc-ltd',
        },
        {
            name: 'ICICI Home Finance Company Ltd',
            logo: Partner3Logo,
            description: 'Know More About ICICI Home Finance Company Ltd',
            link: '/fixed-deposit/icici-home-finance-co-ltd',
        },
        {
            name: 'Shriram Transport Finance Limited',
            logo: Partner4Logo,
            description: 'Know More About Shriram Transport Finance Limited',
            link: '/fixed-deposit/shriram-transport-finance-company-ltd',
        },
        {
            name: 'Bajaj Finance Limited',
            logo: Partner5Logo,
            description: 'Know More About Bajaj Finance Limited',
            link: '/fixed-deposit/bajaj-finance-ltd',
        },
        {
            name: 'Mahindra Finance Limited',
            logo: Partner6Logo,
            description: 'Know More About Mahindra Finance Limited',
            link: '/fixed-deposit/mahindra-finance-limited',
        },
    ];

    return (
        <section className="py-12 md:py-24 bg-neutral-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#243062] mb-4 leading-tight">
                        Our Partners
                    </h2>
                    <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
                        Trusted partners who help us deliver exceptional financial solutions
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-neutral-100 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1"
                        >
                            {/* Logo Container */}
                            <div className="mb-4 flex items-center justify-center h-28 md:h-36  rounded-xl p-2 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300">
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                        <span className="text-2xl font-bold text-primary">
                                            {partner.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Company Name */}
                            <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                                {partner.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-neutral-600 mb-6 leading-relaxed min-h-[3rem]">
                                {partner.description}
                            </p>

                            {/* More Button */}
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => {
                                    if (partner.link) {
                                        if (partner.link.startsWith('http')) {
                                            window.open(partner.link, '_blank', 'noopener,noreferrer');
                                        } else {
                                            navigate(partner.link);
                                        }
                                    }
                                }}
                                className="w-full group-hover:scale-105 transition-transform duration-300"
                            >
                                More
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartners;

