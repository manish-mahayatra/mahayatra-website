"use client"
import { useState } from "react";
import Image from "next/image";
// import image from "../../public/images/trending/logo-mahayatra.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav data-name="navbar" className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src="/images/logo.png"
                            width={200}
                            height={50}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Home</a>
                            <a href="#destinations" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Destinations</a>
                            <a href="#weekend" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Weekend Getaways</a>
                            <a href="#gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Gallery</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Contact</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#destinations" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Destinations</a>
                        <a href="#weekend" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Weekend Getaways</a>
                        <a href="#gallery" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Gallery</a>
                        <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
