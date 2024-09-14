"use client"
import React, { useState, useEffect } from 'react';
import { InternationalDestinations } from '../data/InternationalDropdown';
import { DomesticDestinations } from '../data/DomesticDropdown';
import NavDropdown from './UI/NavDropdown';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            // Change background color after scrolling 50px with transition
            if (position > 50) {
                setNavbarBg('bg-black transition-colors duration-300');
            } else {
                setNavbarBg('bg-transparent transition-colors duration-300');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`${navbarBg} w-full top-0 z-50 fixed transition-all duration-300`}>
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="/images/logo-mahayatra.png" alt="Maha Yatra Logo" className="h-10 lg:h-32 transition-transform duration-300" />
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-lg font-medium text-white">
                            <NavDropdown items={InternationalDestinations} category={"International"} />
                            <NavDropdown items={DomesticDestinations} category={"Domestic"} />
                            <a href="#destination" className="hover:bg-opacity-40 px-3 py-2 rounded-full text-lg transition-colors duration-300">Destinations</a>
                            <a href="#about" className="hover:bg-[#F8B84E] hover:bg-opacity-40 px-3 py-2 rounded-full text-lg transition-colors duration-300">About Us</a>
                            <a href="#contact" className="px-3 py-2 rounded-full text-lg bg-[#FAA710] text-white transition-colors duration-300">Contact Us</a>
                        </div>

                        {/* Hamburger Icon for Mobile */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMobileMenu} className="focus:outline-none z-[1000]">
                                <div className="space-y-1.5">
                                    <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md w-full py-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}>
                    <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-gray-700">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors duration-300">International</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors duration-300">Domestic</a></li>
                        <li><a href="#destination" className="hover:text-indigo-600 transition-colors duration-300">Destinations</a></li>
                        <li><a href="#about" className="hover:text-indigo-600 transition-colors duration-300">About Us</a></li>
                        <li><a href="#contact" className="hover:text-indigo-600 transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
