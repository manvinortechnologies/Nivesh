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
                            <div className="group border-2 border-white/30 rounded-2xl p-6 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">9,210</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Partners in 769 cities across India</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-16 h-16 text-white/90 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Customers Card */}
                            <div className="group border-2 border-white/30 rounded-2xl p-6 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">57,789</div>
                                        <div className="text-white/90 group-hover:text-white transition-colors duration-300">Customers spread over 3,000 pincodes</div>
                                    </div>
                                    <div className="ml-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-16 h-16 text-white/90 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Transaction Statistics */}
            <div className="bg-gradient-to-r from-primary-dark to-primary py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Transactions Executed */}
                        <div className="group border-2 border-white/30 rounded-2xl p-8 text-center backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">47,26,525</div>
                            <div className="text-white/90 text-lg group-hover:text-white transition-colors duration-300">Transactions Executed</div>
                        </div>

                        {/* Transaction Icon */}
                        <div className="flex items-center justify-center group cursor-pointer">
                            <div className="w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-full h-full text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                                </svg>
                            </div>
                        </div>

                        {/* Transaction Value */}
                        <div className="group border-2 border-white/30 rounded-2xl p-8 text-center backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">₹6,349</div>
                            <div className="text-white/90 text-lg group-hover:text-white transition-colors duration-300">Crore+ Transaction Value</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStatistics;
