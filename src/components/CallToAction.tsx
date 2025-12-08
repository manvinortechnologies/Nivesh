import React from 'react';
import Button from './ui/Button';

const CallToAction: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-neutral-50">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Heading - Normal + Bold accent pattern */}
                    <h2 className="text-neutral-900 mb-12 leading-tight">
                        <span className="block text-4xl md:text-5xl font-normal mb-2">
                            Ready to take control of your
                        </span>
                        <span className="block text-4xl md:text-5xl font-semibold text-primary">
                            financial future?
                        </span>
                    </h2>

                    {/* Single CTA */}
                    <div className="flex justify-center mb-12">
                        <Button variant="primary" size="lg" className="px-14 py-4 text-lg">
                            Get Started Today
                        </Button>
                    </div>

                    {/* Social proof text */}
                    <p className="text-lg text-neutral-600">
                        Join over 10,000 investors building wealth with Nivesh
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
