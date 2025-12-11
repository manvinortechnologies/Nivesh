import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    imageUrl: string;
    rating: number;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: 'Rajesh Kumar',
            role: 'Financial Advisor',
            content: 'I grew my client base 4x within a year—Nivesh gave me the tools and confidence.',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
            rating: 5,
        },
        {
            name: 'Priya Sharma',
            role: 'Mutual Fund Distributor',
            content: 'Everything runs digitally now—I focus on advice, not admin.',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            rating: 5,
        },
        {
            name: 'Amit Patel',
            role: 'Wealth Manager',
            content: 'My own app! My clients love the experience.',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
            rating: 5,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        Advisors across India are <br />
                        <span className="text-primary">scaling faster with Nivesh.</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-lg text-neutral-700 mb-6 italic leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                                <img
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full bg-neutral-100"
                                />
                                <div>
                                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:border-primary hover:text-primary">
                        Read Success Stories →
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
