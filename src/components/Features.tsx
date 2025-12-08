import React from 'react';

interface Feature {
    badge: string;
    title: string;
    description: string;
    preview: React.ReactNode;
}

const Features: React.FC = () => {
    const features: Feature[] = [
        {
            badge: 'PORTFOLIO TRACKING',
            title: 'Compare your portfolio against key market benchmarks',
            description: '',
            preview: (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Chart Preview */}
                    <div className="mb-4">
                        <div className="flex gap-4 mb-4">
                            <div className="bg-blue-50 rounded-lg p-3 flex-1">
                                <div className="text-xs text-blue-600 mb-1">My Portfolio</div>
                                <div className="text-sm font-semibold text-blue-600">▲ 23.35%</div>
                                <div className="text-xs text-neutral-500">₹6,34,602</div>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-3 flex-1">
                                <div className="text-xs text-orange-600 mb-1">NIFTY 50</div>
                                <div className="text-sm font-semibold text-orange-600">▲ 12.55%</div>
                                <div className="text-xs text-neutral-500">₹4,42,603</div>
                            </div>
                        </div>

                        {/* Chart Lines Visualization */}
                        <div className="h-40 relative">
                            <svg className="w-full h-full" viewBox="0 0 300 100">
                                {/* Blue line (Portfolio) */}
                                <path
                                    d="M 0 80 Q 50 60 100 55 T 200 30 T 300 15"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="2"
                                />
                                {/* Orange line (NIFTY) */}
                                <path
                                    d="M 0 85 Q 50 70 100 65 T 200 50 T 300 45"
                                    fill="none"
                                    stroke="#F97316"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        {/* Time Period Buttons */}
                        <div className="flex gap-2 mt-4 justify-center">
                            {['1D', '1W', '1M', '3M', '6M', '1Y'].map((period, i) => (
                                <button
                                    key={i}
                                    className={`px-3 py-1 rounded text-xs font-medium ${period === '6M'
                                            ? 'bg-neutral-900 text-white'
                                            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            badge: 'REGULAR FUND ALERTS',
            title: 'Track exactly how much your Regular funds are costing you',
            description: '',
            preview: (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Fund Card */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <div className="font-semibold text-neutral-900 mb-1">Balanced Small Cap Fund</div>
                                    <div className="text-sm text-neutral-500">Equity / Small Cap</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-neutral-900">₹3,44,000</div>
                                    <div className="text-xs text-neutral-500">₹3,00,000</div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-3">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                    ✓ In direct-F
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                                    Regular
                                </span>
                            </div>

                            <div className="mt-3 text-xs text-red-600 font-medium">
                                ₹7,08* paid in extra commissions ↗
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            badge: 'MONTHLY REPORTS',
            title: 'Get a clear view of any shifts in your portfolio',
            description: '',
            preview: (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Report Cards */}
                    <div className="space-y-3">
                        <div className="border border-neutral-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-neutral-900">Balanced Advantage Fund</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-orange-50 text-orange-600 font-medium">
                                    ↗ Off-track
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600 font-medium">
                                    ↑ On track
                                </span>
                            </div>
                            <div className="text-xs text-neutral-500 mt-2">Level Up ↗</div>
                        </div>

                        <div className="border border-neutral-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-neutral-900">Direct Growth Fund</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600 font-medium">
                                    ↑ In-form
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-600 font-medium">
                                    ⚠ Out-of-form
                                </span>
                            </div>
                            <div className="text-xs text-neutral-500 mt-2">Level Down ↘</div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container-custom">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-primary tracking-wide">
                                        {feature.badge}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight mb-6">
                                    {feature.title}
                                </h3>
                                {feature.description && (
                                    <p className="text-lg text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                )}
                            </div>

                            {/* Preview */}
                            <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                {feature.preview}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
