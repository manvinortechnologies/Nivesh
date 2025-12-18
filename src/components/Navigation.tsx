import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
    const BASE_URL = 'https://nivesh.com';
    const LANGUAGE_PREFIX = '/en';
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});

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

    const toggleDropdown = (index: number) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const buildUrl = (path: string): string => {
        // Handle external URLs (already full URLs)
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        
        // Handle anchor links
        if (path.startsWith('#')) {
            return path;
        }
        
        // Normalize path
        const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
        
        // Build full URL with language prefix
        return `${BASE_URL}${LANGUAGE_PREFIX}${normalizedPath}`;
    };

    const handleNavigate = (path: string, isExternal?: boolean) => {
        if (isExternal) {
            window.open(path, '_blank', 'noopener,noreferrer');
            return;
        }
        setIsMenuOpen(false);
        setOpenDropdowns({});
        
        if (path.startsWith('#')) {
            // Handle anchor links (scroll to element on current page)
            const element = document.querySelector(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Handle regular navigation with base URL
            const fullUrl = buildUrl(path);
            window.location.href = fullUrl;
        }
    };

    const menuItems = [
        { name: 'Home', path: '/', external: false },
        { name: 'About Us', path: '/about-us', external: false },
        {
            name: 'Products',
            path: '/products',
            external: false,
            dropdown: [
                { name: 'Mutual Funds', path: '/mutual-funds', external: false },
                { name: 'Specialized Investment Fund (SIF)', path: '/specialized-investment-fund', external: false },
                { name: 'Market Linked Debentures (MLD)', path: '/market-linked-debentures', external: false },
                { name: 'Pre-owned Policies', path: '/pre-owned-policies', external: false },
                { name: 'Gift City', path: '/gift-city', external: false },
                { name: 'Unlisted Shares', path: '/unlisted-shares', external: false },
                { name: 'Fixed Deposit', path: '/fixed-deposit', external: false },
                { name: 'PMS', path: '/pms', external: false },
                { name: 'Alternative Investment Fund', path: '/alternative-investment-fund', external: false },
                { name: 'National Pension Scheme', path: '/national-pension-scheme', external: false },
                { name: 'Bond', path: '/bond', external: false },
                { name: 'Loan Against Securities', path: '/loans/loan-against-securities', external: false },
            ],
        },
        {
            name: 'Partner',
            path: '/partner',
            external: false,
            dropdown: [
                { name: 'Partner', path: '/partner', external: false },
                { name: 'Become Mutual Fund Distributors', path: '/partner/become-mutual-fund-distributors', external: false },
                { name: 'Grow Your Mutual Fund', path: '/partner/grow-your-mutual-fund', external: false },
                { name: 'All About AMFI ARN Code', path: '/partner/all-about-amfi-arn-code', external: false },
                { name: 'NISM Certification Exam', path: '/nism-certification-exam', external: false },
            ],
        },
        {
            name: 'Solutions',
            path: '/solutions',
            external: false,
            dropdown: [
                { name: 'For HR - Nivesh Teams', path: '/nivesh-teams', external: false },
                { name: 'Data Security', path: '/data-security', external: false },
                { name: 'Specialized Investment Fund', path: '/specialized-investment-fund', external: false },
            ],
        },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 transform 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            ${scrolled ? 'bg-neutral-100 shadow-lg py-4' : 'bg-neutral-100 lg:bg-transparent py-4 lg:py-6'}`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a 
                            href={buildUrl('/')}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigate('/');
                            }}
                            className="cursor-pointer"
                        >
                            <img src="/logo.png" alt="Nivesh" className="h-6 md:h-8" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <button
                                    onClick={() => !item.dropdown && handleNavigate(item.path, item.external)}
                                    className={`flex items-center gap-1 transition-colors text-sm font-medium py-2 bg-transparent border-none outline-none ${scrolled ? 'text-neutral-700 hover:text-primary' : 'text-neutral-700 hover:text-primary'}`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>

                                {/* Dropdown */}
                                {item.dropdown && (
                                    <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <button
                                                key={subIndex}
                                                onClick={() => handleNavigate(subItem.path, subItem.external)}
                                                className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary bg-transparent border-none outline-none"
                                            >
                                                {subItem.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {/* Login/Register Button */}
                        <a
                            href="https://app.nivesh.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-white rounded-2xl text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
                        >
                            Login/Register
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={`lg:hidden p-2 ${scrolled ? 'text-neutral-900' : 'text-neutral-900'}`}
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
            </div>

            {/* Mobile Menu Overlay & Drawer */}
            {isMenuOpen && (
                <>
                    {/* Backdrop - Full screen with black/20 opacity (left side visible) */}
                    <div
                        className="fixed inset-0 lg:hidden z-40 bg-black/20"
                        onClick={toggleMenu}
                    />
                    
                    {/* Mobile Menu Drawer - Right side, full height */}
                    <div className="fixed top-0 right-0 w-2/3 h-screen lg:hidden z-50 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 shadow-2xl overflow-y-auto animate-slide-in-right border-l-2 border-primary/20">
                        <div className="p-6">
                            {/* Header with gradient */}
                            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 mb-6 -mx-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        
                                        <span className="text-neutral-900 font-bold text-lg">Menu</span>
                                    </div>
                                    <button
                                        onClick={toggleMenu}
                                        className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-200"
                                        aria-label="Close menu"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Menu Items */}
                            {menuItems.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <button
                                        onClick={() => {
                                            if (item.dropdown) {
                                                toggleDropdown(index);
                                            } else {
                                                handleNavigate(item.path, item.external);
                                            }
                                        }}
                                        className="flex items-center justify-between w-full text-left text-neutral-800 hover:text-primary hover:bg-primary/5 transition-all duration-200 text-sm font-medium py-3 px-3 rounded-lg border border-transparent hover:border-primary/20 bg-transparent outline-none"
                                    >
                                        <span className="font-semibold">{item.name}</span>
                                        {item.dropdown && (
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 text-primary ${openDropdowns[index] ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    {item.dropdown && openDropdowns[index] && (
                                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg my-2 py-2 border border-primary/20 shadow-sm">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <button
                                                    key={subIndex}
                                                    onClick={() => handleNavigate(subItem.path, subItem.external)}
                                                    className="block w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-white/50 rounded-md transition-all duration-200 font-medium bg-transparent border-none outline-none"
                                                >
                                                    {subItem.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* Login/Register Button - Mobile */}
                            <a
                                href="https://app.nivesh.com/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={toggleMenu}
                                className="block mt-6 px-4 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-sm font-semibold text-center hover:from-primary-dark hover:to-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Login/Register
                            </a>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navigation;
