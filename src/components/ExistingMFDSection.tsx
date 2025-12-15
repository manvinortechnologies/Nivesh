import React from 'react';
import Button from './ui/Button';
import DashboardImg from '../assets/dashboard_webImg.jpeg';
import DashboardMobile from '../assets/dashboard_mobile.webp';

const ExistingMFDSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-lg font-semibold mb-6">
                            For Existing MFDs
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Transform Your Practice Into A <span className="text-primary">Digital Wealth Brand.</span>
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
                                “Platforms don’t replace advisors...they evolve them.”
                            </p>
                        </div>

                        <Button variant="primary" size="lg">
                            Get My Free Platform →
                        </Button>
                    </div>

                    {/* Right Visual */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform rotate-6"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white px-12 md:px-16 lg:px-24">
                            {/* Mobile dashboard preview - left */}
                            <div className="absolute left-2 bottom-2 flex flex-col items-center z-10">
                                <img
                                    src={DashboardMobile}
                                    alt="Nivesh Mobile Dashboard Interface (iOS)"
                                    className="w-28 md:w-40 lg:w-28 rounded-xl shadow-lg border border-neutral-200 bg-white"
                                />
                                <span className="mt-1 text-xs font-medium text-neutral-600">iOS</span>
                            </div>

                            {/* Mobile dashboard preview - right */}
                            <div className="absolute right-2 bottom-2 flex flex-col items-center z-10">
                                <img
                                    src={DashboardMobile}
                                    alt="Nivesh Mobile Dashboard Interface (Android)"
                                    className="w-28 md:w-40 lg:w-28 rounded-xl shadow-lg border border-neutral-200 bg-white"
                                />
                                <span className="mt-1 text-xs font-medium text-neutral-600">Android</span>
                            </div>

                            {/* Web dashboard */}
                            <div className="flex flex-col items-center">
                                <img
                                    src={DashboardImg}
                                    alt="Nivesh Dashboard Interface"
                                    className="w-full h-auto object-cover"
                                />
                                <span className="mt-2 text-sm font-medium text-neutral-700">Web</span>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        {/* <div className="absolute -right-6 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-xl">💰</span>
                                </div>
                                <div>
                                    <div className="text-xs text-neutral-500">Commission Received</div>
                                    <div className="text-sm font-bold text-green-600">+ ₹45,000</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExistingMFDSection;
