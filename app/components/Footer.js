import React from 'react';
import footer from "../../public/images/footer-img.png"

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-white py-8">

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center border-b border-gray-500 pb-6 mb-6">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <p>Speak to our expert at <span className="font-bold">1-800-453-6744</span></p>
                    </div>
                    <div className="w-full md:w-auto flex space-x-4">
                        <span className="font-semibold">Follow Us</span>
                        <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Address</h3>
                        {/* Add address details here */}
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Company</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Tourz Reviews</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Travel Guides</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Data Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Legal</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Support</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">Get in Touch</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Help Center</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Live Chat</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">How it Works</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Policy</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">FAQ</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">T&C</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-500 pt-6 mt-6 text-center">
                    <p className="text-sm">Mahayatra Private Ltd. ©2024 all rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
