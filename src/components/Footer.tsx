import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <img src="/logo.png" alt="Nivesh" className="h-10 mb-6 brightness-0 invert" />
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            India's trusted investment advisory platform. Empowering investors to make smarter financial decisions.
                        </p>
                        <div className="space-y-2 text-sm text-neutral-400">
                            <p>123 Financial District</p>
                            <p>Mumbai, Maharashtra 400001</p>
                            <p>India</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#about" className="text-neutral-400 hover:text-primary transition-colors">
                                    About Us
                                    {/* About Us */}
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-neutral-400 hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="text-neutral-400 hover:text-primary transition-colors">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-neutral-400 hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="text-neutral-400 hover:text-primary transition-colors">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#blog" className="text-neutral-400 hover:text-primary transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-neutral-400 hover:text-primary transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#guides" className="text-neutral-400 hover:text-primary transition-colors">
                                    Investment Guides
                                </a>
                            </li>
                            <li>
                                <a href="#tools" className="text-neutral-400 hover:text-primary transition-colors">
                                    Financial Tools
                                </a>
                            </li>
                            <li>
                                <a href="#support" className="text-neutral-400 hover:text-primary transition-colors">
                                    Support Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-neutral-500 mb-1">Email</p>
                                <a href="mailto:info@nivesh.com" className="text-neutral-400 hover:text-primary transition-colors">
                                    info@nivesh.com
                                </a>
                            </div>
                            <div>
                                <p className="text-neutral-500 mb-1">Support</p>
                                <a href="mailto:support@nivesh.com" className="text-neutral-400 hover:text-primary transition-colors">
                                    support@nivesh.com
                                </a>
                            </div>
                            <div>
                                <p className="text-neutral-500 mb-1">Phone</p>
                                <a href="tel:+911234567890" className="text-neutral-400 hover:text-primary transition-colors">
                                    +91 123 456 7890
                                </a>
                            </div>

                            {/* Social Media */}
                            <div className="pt-4">
                                <p className="text-neutral-500 mb-3">Follow Us</p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Twitter">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download App - QR Code Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold mb-6">Download Our App</h3>
                        <div className="bg-white p-4 rounded-lg inline-block mb-4">
                            {/* QR Code - Using QR Code API */}
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://nivesh.app/download"
                                alt="Download App QR Code"
                                className="w-28 h-28"
                            />
                        </div>
                        <p className="text-sm text-neutral-400 mb-4">
                            Scan to download the Nivesh app
                        </p>

                        {/* App Store Buttons */}
                        <div className="space-y-3">
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 px-4 py-2.5 rounded-lg transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-neutral-400">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 px-4 py-2.5 rounded-lg transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-neutral-400">Get it on</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            <a href="#privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                            <a href="#disclaimer" className="hover:text-primary transition-colors">
                                Disclaimer
                            </a>
                            <a href="#cookies" className="hover:text-primary transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                        <p className="text-center md:text-right">
                            © {currentYear} Nivesh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
