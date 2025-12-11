import React from 'react';
import Button from './ui/Button';

const ExistingMFDSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            For Existing MFDs
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Transform your practice into a <span className="text-primary">digital wealth brand.</span>
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-neutral-600">Free up your time for client acquisition</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-neutral-600">Stop managing clients through WhatsApp and spreadsheets</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-neutral-600">Accelerate client onboarding to minutes</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-neutral-600">Reduce your expenses on software and people</p>
                            </div>
                        </div>

                        <p className="text-xl font-medium text-neutral-800 mb-8">
                            With Nivesh, automate your backend, strengthen client trust, and grow 10x faster.
                        </p>

                        <div className="bg-neutral-50 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                            <p className="text-lg font-medium text-neutral-800 italic">
                                “Platforms don’t replace advisors—they evolve them.”
                            </p>
                        </div>

                        <Button variant="primary" size="lg">
                            Get My Free Platform →
                        </Button>
                    </div>

                    {/* Right Visual */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
                            {/* Dashboard Mockup */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-sm text-neutral-500">Total AUM</div>
                                    <div className="text-2xl font-bold text-neutral-900">₹12.5 Cr</div>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                    +18% this month
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-32 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent"></div>
                                    <svg className="w-full h-full text-primary" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <path d="M0 40 L0 30 Q 20 10 40 25 T 80 20 T 100 5 V 40 Z" fill="currentColor" opacity="0.2" />
                                        <path d="M0 30 Q 20 10 40 25 T 80 20 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                                        <div className="text-xs text-neutral-500 mb-1">Active Clients</div>
                                        <div className="text-lg font-bold">142</div>
                                    </div>
                                    <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                                        <div className="text-xs text-neutral-500 mb-1">SIP Book</div>
                                        <div className="text-lg font-bold">₹25L</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-xl">💰</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500">Commission Received</div>
                                        <div className="text-sm font-bold text-green-600">+ ₹45,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExistingMFDSection;
