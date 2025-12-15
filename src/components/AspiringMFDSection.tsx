import React from 'react';
import Button from './ui/Button';

const AspiringMFDSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-lg font-semibold mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        For Aspiring MFDs
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Start your wealth journey with Nivesh.
                    </h2>
                    <p className="text-lg text-neutral-600">
                        We help you become a Mutual Fund Distributor ... from AMFI certification to your first client.
                    </p>
                </div>

                {/* Step Flow */}
                <div className="relative max-w-5xl mx-auto mb-16">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -translate-y-1/2 hidden md:block z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Get trained and certified</h3>
                            <p className="text-neutral-600 text-sm">
                                Complete AMFI/NISM certification with our expert guidance and study material.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Get your own ARN</h3>
                            <p className="text-neutral-600 text-sm">
                                We assist you in obtaining your AMFI Registration Number (ARN) quickly.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">Launch your business</h3>
                            <p className="text-neutral-600 text-sm">
                                Go live with the Nivesh platform and start onboarding clients immediately.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xl font-medium text-neutral-800 italic mb-8">
                        “From learner to leader...your MFD journey starts here.”
                    </p>
                    <Button variant="primary" size="lg">
                        Become an MFD →
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AspiringMFDSection;
