"use client"
import React, {useState, useEffect} from 'react'
import { InternationalDestinations } from '../data/InternationalDropdown'
import { DomesticDestinations } from '../data/DomesticDropdown'
import NavDropdown from './UI/NavDropdown'

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            // Change background color after scrolling 50px
            if (position > 50) {
                setNavbarBg('bg-black');
            } else {
                setNavbarBg('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="bg-transparent w-full top-0 z-10 fixed">
                <div className="mx-3 px-8">
                    <div className="flex justify-between items-center py-1">
                        <div className="flex items-center">
                            <img src="/images/logo-mahayatra.png" alt="Maha Yatra Logo" className="h-52" />
                        </div>
                        <div
                            className="hidden md:flex items-center space-x-8 text-xl font-medium text-white border border-1 border-white rounded-full p-4">
                            <NavDropdown items={InternationalDestinations} category={"International"} />
                            <NavDropdown items={DomesticDestinations} category={"Domestic"} />
                            <a href="#destination"
                                className="hover:bg-opacity-40 px-3 py-2 rounded-full text-lg">Destinations</a>
                            <a href="#about" className="hover:bg-[#F8B84E] hover:bg-opacity-40 px-3 py-2 rounded-full text-lg">About Us</a>
                            <a href="#contact" className="px-3 py-2 rounded-full text-lg bg-[#FAA710] text-white">Contact Us</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button id="menu-btn" className="focus:outline-none">
                                <div className="hamburger space-y-1.5">
                                    <div className="w-6 h-0.5 bg-gray-700"></div>
                                    <div className="w-6 h-0.5 bg-gray-700"></div>
                                    <div className="w-6 h-0.5 bg-gray-700"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="menu" className="hidden md:hidden">
                    <ul className="flex flex-col items-center space-y-4 text-xl font-medium text-gray-700">
                        <li><a href="#" className="hover:text-indigo-600">International</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Domestic</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Destinations</a></li>
                        <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                        <li><a href="#contact" className="hover:text-indigo-600">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar