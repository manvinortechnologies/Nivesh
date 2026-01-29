import React from 'react';

interface Statistic {
    value: string;
    label: string;
}

const Statistics: React.FC = () => {
    const statistics: Statistic[] = [
        {
            value: '9,186',
            label: 'Partners in 776 cities across India',
        },
        {
            value: '58,886',
            label: 'Customers spread over 3,000 pincodes',
        },
        {
            value: '49,15,512',
            label: 'Transactions Executed',
        },
        {
            value: 'Rs. 6,529',
            label: 'Crore- Transaction Value',
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#243062] to-[#1a2550]">
            <div className="container-custom">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                            >
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-white/90 leading-relaxed">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;

