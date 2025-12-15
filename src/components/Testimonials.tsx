import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import Favicon from '../assets/Favicon.png';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    imageUrl: string;
    rating: number;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150; // Character limit for preview
    const shouldTruncate = testimonial.content.length > maxLength;

    return (
        <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
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
            <div className={`flex-grow mb-6 relative ${isExpanded ? 'overflow-y-auto max-h-60 pr-2' : ''}`}>
                <p className="text-lg text-neutral-700 italic leading-relaxed">
                    "{isExpanded ? testimonial.content : `${testimonial.content.slice(0, maxLength)}${shouldTruncate ? '...' : ''}`}
                </p>
                {shouldTruncate && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-primary font-semibold text-sm mt-2 hover:underline focus:outline-none"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 border-t border-neutral-100 pt-4 mt-auto">
                <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full bg-neutral-100 object-contain"
                />
                <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
            </div>
        </Card>
    );
};

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: 'Rajesh Panwar',
            role: 'Partner',
            content: 'I was running a Vodafone outlet. Due to dengue, I couldn’t work for a month because of which I didn’t get any payout in that period. I realized that even if I continue to work in the same business for the next 10 years, I could fall into the same situation. Hence, I was looking for a business that can secure my future. At this time, I met Nivesh.com and learned about Mutual Funds. I understood that once I could build a sizeable AUM, I would continue to earn a trial commission even if I am unable to work at some point in the future. Today, thanks to Nivesh.com, I have achieved fast-paced growth and can boast of having the highest number of clients with them.',
            imageUrl: Favicon,
            rating: 5,
        },
        {
            name: 'Abhimanyu Nehra',
            role: 'Partner',
            content: 'Abhimanyu has been an entrepreneur in the hospitality and real estate sectors based out of Delhi NCR. He had been thinking about the need of taking other asset classes to his clients, as he realized over-exposure to one asset class could pose a significant risk to him and his customers. He was aware of Mutual Funds but was not sure of how to get started. After coming in touch with Nivesh.com, he carefully evaluated the option of dealing with Nivesh.com versus directly with mutual funds and clearly saw the benefit of being part of a larger platform and great leverage of technology that Nivesh.com offered. He then spent some time trying to understand the basics of mutual fund investing and also obtained an AMFI Registration Number (ARN). Since then, he has been able to help his customers diversify into mutual funds in a much simpler manner leveraging the state of the art technology. He is clear that he is into this for the long term.',
            imageUrl: Favicon,
            rating: 5,
        },
        {
            name: 'Sunil Kumar Mittal',
            role: 'Partner (Haryana)',
            content: 'I used to spend most of my time on paperwork and servicing. Now that I have partnered with Nivesh, I\'m just focusing on expanding my business.',
            imageUrl: Favicon,
            rating: 5,
        },
        {
            name: 'Rahul A Gupta',
            role: 'Partner',
            content: 'My AUM has grown and my clients can place orders from anywhere through Nivesh digital platform. They also provide us with training that helps us in upgrading our knowledge.',
            imageUrl: Favicon,
            rating: 5,
        },
        {
            name: 'Mukesh Singh',
            role: 'Partner',
            content: 'Nivesh\'s application has multiple products, indeed very user-friendly, and has all the features the client requires',
            imageUrl: Favicon,
            rating: 5,
        },
        {
            name: 'Yashwant Gupta',
            role: 'Partner',
            content: 'From traveling in buses to Jaipur and haggling with Mutual Funds companies for collecting clients’ statements to sitting in the comfort of my home and managing all the transactions in a few clicks on my phone, I have come a long way All thanks to Nivesh. There was a time when I was forced to stop the SIPs of my hard-earned customers as it was impossible to service them given the paperwork that required a lot of commuting and expenses. For every customer’s KYC, I had to go to a cybercafé, pay Rs 10 and get a printout. Then the choice of funds was a complex issue. To make it worse, it was a herculean task to track my brokerage as it was coming from various places. Nivesh came as a one-stop solution for all the problems and made investing a cake walk for me and my customers',
            imageUrl: Favicon,
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
                        <TestimonialCard key={index} testimonial={testimonial} />
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
