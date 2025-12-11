import React from 'react';

const BenefitsSection: React.FC = () => {
    const benefits = [
        "No upfront cost for joining Nivesh",
        "Seamless integration with top R&TAs and AMCs",
        "Dedicated RM",
        "Clean, intuitive UI",
        "Scalable, compliant, and always up-to-date"
    ];

    return (
        <section className="py-20 md:py-32 bg-neutral-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                            Why Choose Nivesh
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
                            Built for MFDs. <br />
                            <span className="text-primary">Designed for growth.</span>
                        </h2>

                        <ul className="space-y-6 mb-12">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-lg text-neutral-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Visual - Partner Logos */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                        <div className="text-center mb-8">
                            <h3 className="text-lg font-semibold text-neutral-900">Trusted Partners</h3>
                            <p className="text-sm text-neutral-500">Integrated with leading AMCs & R&TAs</p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 items-center opacity-100">
                            {/* Placeholders for Logos */}
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-blue-600">CAMS</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-teal-600">KFintech</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-blue-800">HDFC MF</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-blue-500">SBI MF</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-orange-600">ICICI Pru</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-rose-700">Axis MF</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-red-600">Kotak MF</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-red-700">Nippon</div>
                            <div className="h-12 bg-white border border-black rounded flex items-center justify-center text-xs font-bold text-gray-600">+40 More</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
