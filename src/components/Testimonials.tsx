import React from 'react';
import Card from './ui/Card';

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
            role: 'Entrepreneur',
            content: 'Nivesh transformed my approach to investing. The personalized advice and real-time analytics have helped me grow my portfolio by 35% in just one year.',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
            rating: 5,
        },
        {
            name: 'Priya Sharma',
            role: 'Software Engineer',
            content: 'As a beginner investor, I was overwhelmed by options. Nivesh made it simple with expert guidance and a user-friendly platform. Highly recommended!',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            rating: 5,
        },
        {
            name: 'Amit Patel',
            role: 'Business Owner',
            content: 'The transparency and low fees are unmatched. I finally found a platform I can trust with my hard-earned money. Great service and returns!',
            imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
            rating: 5,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-neutral-900 mb-6 leading-tight">
                        <span className="block text-4xl md:text-5xl font-normal mb-2">
                            What Our Clients
                        </span>
                        <span className="block text-4xl md:text-5xl font-semibold text-primary">
                            Say
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Join thousands of satisfied investors who trust Nivesh with their financial future
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="h-full flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-primary"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-neutral-600 mb-6 italic leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full bg-neutral-100"
                                />
                                <div>
                                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
