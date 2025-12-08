import React, { useState } from 'react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Investment Advisory', href: '#advisory' },
        { name: 'Power App', href: '#app' },
        { name: 'Calculators', href: '#calculators' },
        { name: 'Blogs', href: '#blogs' },
    ];

    return (
        <nav className="fixed w-full bg-transparent z-50">
            <div className="container-custom py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Nivesh" className="h-8 md:h-10 brightness-0 invert" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block text-white hover:text-white/80 transition-colors text-sm font-medium py-3 border-b border-white/10 last:border-0"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
