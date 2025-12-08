import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 border border-white/10 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {/* Main Heading - White on gradient */}
                    <h1 className="text-white mb-8 leading-tight">
                        <span className="block text-4xl md:text-6xl font-normal mb-2">
                            India's trusted
                        </span>
                        <span className="block text-4xl md:text-6xl font-semibold">
                            Investment Advisory Platform
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto">
                        Review, select, and rebalance your investments effortlessly
                    </p>
                </div>

                {/* App Mockup */}
                <div className="flex justify-center items-center mt-12">
                    <div className="relative">
                        {/* Phone Frame Mockup */}
                        <div className="relative w-72 md:w-80 h-[600px] bg-white rounded-[3rem] shadow-2xl p-3">
                            {/* Screen */}
                            <div className="w-full h-full bg-gradient-to-b from-neutral-50 to-white rounded-[2.5rem] overflow-hidden">
                                {/* Status Bar */}
                                <div className="h-8 bg-neutral-100 flex items-center justify-between px-6 text-xs">
                                    <span>9:41</span>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-3 bg-neutral-400 rounded-sm"></div>
                                        <div className="w-4 h-3 bg-neutral-400 rounded-sm"></div>
                                        <div className="w-4 h-3 bg-neutral-400 rounded-sm"></div>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-neutral-900">Portfolio</div>
                                            <div className="text-xs text-neutral-500">View Performance</div>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white rounded-2xl shadow-lg p-5 mb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs text-neutral-500">Total Investment</span>
                                            <span className="text-lg font-bold text-neutral-900">₹5,24,000</span>
                                        </div>
                                        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-6">
                                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                            </svg>
                                            <span>Invest Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-neutral-900 rounded-b-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
