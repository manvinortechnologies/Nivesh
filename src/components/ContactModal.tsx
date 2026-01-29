import React, { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        keepUpdated: 'yes',
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            keepUpdated: e.target.value,
        }));
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            phone: '',
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return !newErrors.name && !newErrors.phone;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission here
            console.log('Form submitted:', formData);
            // You can add API call here
            alert('Thank you! We will contact you soon.');
            onClose();
            // Reset form
            setFormData({
                name: '',
                phone: '',
                keepUpdated: 'yes',
            });
        }
    };

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto animate-in fade-in zoom-in duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-600 hover:text-neutral-900 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Modal Content */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-[#243062] mb-6 pr-8">
                        Get in Touch with our Wealth Experts
                    </h2>

                    {/* Name Input */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all ${
                                errors.name
                                    ? 'border-red-500'
                                    : 'border-green-500/50 focus:border-green-600'
                            }`}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>

                    {/* Phone Input */}
                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Your 10 digit Phone Number"
                            maxLength={10}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all ${
                                errors.phone
                                    ? 'border-red-500'
                                    : 'border-green-500/50 focus:border-green-600'
                            }`}
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                    </div>

                    {/* Contact Preferences Section */}
                    <div className="mb-6 p-4 border-2 border-green-500/50 rounded-lg bg-green-50/50">
                        <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                            We will contact you to give you updated information on investment options via WhatsApp, Email, SMS, phone.
                        </p>

                        {/* Radio Buttons */}
                        <div className="space-y-3">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="keepUpdated"
                                    value="yes"
                                    checked={formData.keepUpdated === 'yes'}
                                    onChange={handleRadioChange}
                                    className="w-5 h-5 text-green-600 border-2 border-green-500/50 focus:ring-2 focus:ring-green-500/20 cursor-pointer accent-green-600"
                                />
                                <span className="ml-3 text-sm md:text-base text-neutral-700">
                                    Yes, keep me updated
                                </span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="keepUpdated"
                                    value="no"
                                    checked={formData.keepUpdated === 'no'}
                                    onChange={handleRadioChange}
                                    className="w-5 h-5 text-green-600 border-2 border-green-500/50 focus:ring-2 focus:ring-green-500/20 cursor-pointer accent-green-600"
                                />
                                <span className="ml-3 text-sm md:text-base text-neutral-700">
                                    No, I prefer no updates
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#243062] hover:bg-[#1a2550] text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;

