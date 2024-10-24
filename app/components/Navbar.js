"use client"
import React, { useState, useEffect } from 'react';
import { InternationalDestinations } from '../data/InternationalDropdown';
import { DomesticDestinations } from '../data/DomesticDropdown';
import NavDropdown from './UI/NavDropdown';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
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

    // Function to toggle the modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`${navbarBg} w-full top-0 z-50 fixed transition-all duration-300`}>
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="/images/logo-mahayatra.png" alt="Maha Yatra Logo" className="h-10 lg:h-28 transition-transform duration-300" />
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-lg font-medium text-white">
                            <a href="#destination" className="hover:bg-opacity-40 px-3 py-2 rounded-full text-lg transition-colors duration-300">International</a>
                            <a href="#destination" className="hover:bg-opacity-40 px-3 py-2 rounded-full text-lg transition-colors duration-300">Domestic</a>
                            <a href="#about" className="hover:bg-[#F8B84E] hover:bg-opacity-40 px-3 py-2 rounded-full text-lg transition-colors duration-300">About Us</a>
                            <button
                                onClick={toggleModal}
                                className="px-3 py-2 rounded-full text-lg bg-[#FAA710] text-white transition-colors duration-300"
                            >
                                Contact Us
                            </button>
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
                    className={`lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md w-full py-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-gray-700">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors duration-300">International</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors duration-300">Domestic</a></li>
                        <li><a href="#about" className="hover:text-indigo-600 transition-colors duration-300">About Us</a></li>
                        <li><a href="#contact" className="hover:text-indigo-600 transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] transition-opacity duration-300">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 shadow-lg transform transition-transform duration-300 scale-100">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                            />
                            <input
                                type="text"
                                placeholder="Number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                            />
                            <input
                                type="text"
                                placeholder="Destination"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                            />
                            <div className="flex flex-col gap-4">
                                <label>Starting Date</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                                />
                                <label>Ending Date</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAA710]"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#FAA710] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
