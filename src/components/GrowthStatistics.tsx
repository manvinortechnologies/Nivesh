import React from 'react';

const GrowthStatistics: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
            {/* Top Section - Map and Statistics */}
            <div className="py-20 md:py-32">
                <div className="container-custom">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            We Have Grown From Strength to Strength
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* India Map Illustration */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="https://nivesh.com/87cf2b70a3ba03a3a968e25fe1313a92.webp"
                                    alt="India Map with Nivesh Coverage"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Statistics Cards */}
                        <div className="space-y-6">
                            {/* Partners Card */}
                            <div className="group border-2 border-white/30 rounded-2xl p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">9,210</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Partners across India</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-14 h-14 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Customers Card */}
                            <div className="group border-2 border-white/30 rounded-2xl p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">3,000+</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Customers spread pincodes</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-14 h-14 text-white/90 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Transactions Executed Card */}
                            <div className="group border-2 border-white/30 rounded-2xl p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">47,00,000 +</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Transactions Executed</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-14 h-14 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm-1 14c-2.76 0-5-2.24-5-5H4c0 3.87 3.13 7 7 7v2l4-3-4-3v2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Transaction Value Card */}
                            {/* <div className="group border-2 border-white/30 rounded-2xl p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">₹6,349</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Crore+ Transaction Value</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-14 h-14 text-white/90 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 10a1 1 0 011-1h3a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8zM9 2a1 1 0 011-1h3a1 1 0 011 1v16a1 1 0 01-1 1H10a1 1 0 01-1-1V2zM16 8a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStatistics;
