import React from 'react';
import footer from "../../public/images/footer-img.png"

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-white py-8">

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center border-b border-gray-500 pb-6 mb-6">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <p>Speak to us at <span className="font-bold">+91-8595931276</span></p>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <p>Email us at <span className="font-bold">info@mahayatra.in</span></p>
                    </div>
                    <div className="w-full md:w-auto flex items-center space-x-4">
                        <span className="font-semibold">Follow Us</span>
                        <a href="https://www.instagram.com/maha_yatra?igsh=MXhwdzYyZjFieW56Yw%3D%3D&utm_source=qr" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/MahaYatra.in?mibextid=LQQJ4d" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/mahayatra-journey-beyond-boundaries/" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Address</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">Shop No. 956, Street no 3</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Sadar Bazar, Gurgaon</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Haryana, India</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">122001</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Company</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Travel Guides</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Support</h3>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:underline">Get in Touch</a></li>
                            <li><a href="#" className="text-gray-300 hover:underline">Live Chat</a></li>
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
