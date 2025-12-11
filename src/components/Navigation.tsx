import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled (for background)
            setScrolled(currentScrollY > 20);

            // Determine visibility (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down & past threshold -> Hide
            } else {
                setIsVisible(true);  // Scrolling up or at top -> Show
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        {
            name: 'Products',
            href: '#products',
            dropdown: ['Mutual Funds', 'PMS', 'AIF', 'Bonds', 'Insurance']
        },
        {
            name: 'Partner',
            href: '#partner',
            dropdown: ['Become a Partner', 'Partner Login', 'Resources']
        },
        {
            name: 'Solutions',
            href: '#solutions',
            dropdown: ['Wealth Management', 'Family Office', 'Tax Planning']
        },
        { name: 'Blog', href: '#blog' },
        { name: 'NFOs', href: '#nfos' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 transform 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            ${scrolled ? 'bg-primary shadow-lg py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-4xl font-medium text-white tracking-tight font-serif">nivesh</span>
                        {/* <img src="/logo.png" alt="Nivesh" className="h-8 md:h-10 brightness-0 invert" /> */}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <a
                                    href={item.href}
                                    className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm font-medium py-2"
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {/* Dropdown */}
                                {item.dropdown && (
                                    <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-white"
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
                    <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <a
                                    href={item.href}
                                    className="block text-neutral-800 hover:text-primary transition-colors text-sm font-medium py-3 border-b border-neutral-100 last:border-0"
                                >
                                    {item.name}
                                </a>
                                {item.dropdown && (
                                    <div className="pl-4 bg-neutral-50 rounded-md mb-2">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
