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
        <svg className="w-14 h-14 text-white/90 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
