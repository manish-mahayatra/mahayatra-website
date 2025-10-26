"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (sectionId) => {
        const currentPath = window.location.pathname;

        // If not on home page, redirect to home with hash
        if (currentPath !== '/') {
            window.location.href = `/${sectionId}`;
        } else {
            // If already on home page, smooth scroll to section
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Close mobile menu
        setIsOpen(false);
    };


    const asianDestinations = [
        "Bali", "Dubai", "Thailand", "Singapore - Malaysia",
        "Vietnam", "Sri Lanka", "Nepal", "Andaman Island"
    ];

    const domesticDestinations = [
        "Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand", "Sikkim",
        "Kerala", "Goa", "Coorg", "Ooty", "Gujarat", "Rajasthan", "Golden Triangle"
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2'
            : 'bg-white/90 backdrop-blur-sm shadow-md py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center group">
                        <a href="/" className="relative">
                            <Image src="/images/logo.png" alt="Logo" height={40} width={300} />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {/* Destinations Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(true)}
                            onMouseLeave={() => setActiveDropdown(false)}
                        >
                            <button className="flex items-center gap-2 text-gray-800 font-semibold hover:text-blue-600 px-4 py-2 rounded-lg text-base transition-all duration-300 hover:bg-blue-50 group">
                                Destinations
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mega Dropdown Menu */}
                            <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] transition-all duration-300 ${activeDropdown
                                ? 'opacity-100 visible translate-y-0'
                                : 'opacity-0 invisible -translate-y-4'
                                }`}>
                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                                        {/* Asian Destinations */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-4 text-blue-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-bold text-lg">Asia</span>
                                            </div>
                                            <div className="space-y-1">
                                                {asianDestinations.map((dest, index) => (
                                                    <a
                                                        key={index}
                                                        href="#"
                                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 transition-all duration-200 group text-gray-700 hover:text-blue-600"
                                                        style={{ animationDelay: `${index * 50}ms` }}
                                                    >
                                                        <svg className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                        <span className="text-sm font-medium">{dest}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Domestic Destinations */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-4 text-purple-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="font-bold text-lg">Domestic</span>
                                            </div>
                                            <div className="space-y-1">
                                                {domesticDestinations.map((dest, index) => (
                                                    <a
                                                        key={index}
                                                        href="#"
                                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-purple-50 transition-all duration-200 group text-gray-700 hover:text-purple-600"
                                                        style={{ animationDelay: `${index * 50}ms` }}
                                                    >
                                                        <svg className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                        <span className="text-sm font-medium">{dest}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Menu Items */}
                        {[
                            { name: 'Packages', href: '#packages' },
                            { name: 'Gallery', href: '#gallery' },
                            { name: 'About Us', href: '#about' },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(item.href);
                                }}
                                className="relative text-gray-800 font-semibold hover:text-blue-600 px-4 py-2 rounded-lg text-base transition-all duration-300 hover:bg-blue-50 group"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
                            </a>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="/contact"
                            className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-100">
                    <a onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('#destinations');
                    }} href="#destinations" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2">
                        Destinations
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('#packages');
                    }} href="#packages" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2">
                        Packages
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('#gallery');
                    }} href="#gallery" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2">
                        Gallery
                    </a>
                    <a onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('#about');
                    }} href="#about" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2">
                        About Us
                    </a>
                    <a href="/contact" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-lg text-base font-medium text-center transition-all duration-300 hover:shadow-lg hover:scale-105 mt-4">
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
}