export default function Footer() {
    return (
        <footer data-name="footer" className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
            </div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Wave decoration at top */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
                <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Logo and Description */}
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/12.png"
                                width="350"
                                height="50"
                                alt="Logo"
                                className="blend"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Create unforgettable memories with us.
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center space-x-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        </div>

                        {/* Newsletter signup */}
                        <div className="space-y-3">
                            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Stay Updated</h5>
                            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-colors duration-300 group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-5 py-3 text-white placeholder-gray-400 outline-none text-sm"
                                />
                                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3 text-white font-medium transition-all duration-300 transform group-hover:scale-105">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Contact Us
                            </h4>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 mb-1">Address</p>
                                    <span className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        Shop No. 956, Gali No. 3, Sadar Bazar, Gurugram, Haryana
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <a href="mailto:admin@mahayatra.in" className="text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
                                        admin@mahayatra.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                                    <div className="space-y-1">
                                        <a href="tel:+919540900810" className="block text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
                                            +91-9540900810
                                        </a>
                                        <a href="tel:+918595931276" className="block text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
                                            +91-8595931276
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Follow Us
                            </h4>
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61565831885734&mibextid=LQQJ4d" target="_blank" className="group relative w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 border border-white/10 hover:border-transparent transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 224 432" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                    <path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"></path>
                                </svg>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            </a>

                            <a href="https://www.instagram.com/mahayatra_tourerz?igsh=MXhwdzYyZjFieW56Yw%3D%3D&utm_source=qr" target="_blank" className="group relative w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border border-white/10 hover:border-transparent transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/50" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                    <path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"></path>
                                </svg>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            </a>

                            <a href="https://www.linkedin.com/company/mahayatra-journey-beyond-boundaries" target="_blank" className="group relative w-14 h-14 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 border border-white/10 hover:border-transparent transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 432 432" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                    <path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"></path>
                                </svg>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            </a>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Stay connected with us on social media for the latest updates and travel inspiration.
                        </p>

                        {/* Quick Links */}
                        <div className="pt-4">
                            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h5>
                            <div className="grid grid-cols-2 gap-3">
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 group">
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>About Us</span>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 group">
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>Destinations</span>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 group">
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>Gallery</span>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 group">
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>Contact</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="relative pt-8 mt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; 2025 MahaYatra. All rights reserved.
                        </p>

                        <div className="flex items-center space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:underline underline-offset-4">
                                Privacy Policy
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:underline underline-offset-4">
                                Terms of Service
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:underline underline-offset-4">
                                Cookie Policy
                            </a>
                        </div>
                    </div>

                    {/* Back to top button */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="absolute right-0 -top-6 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/70 transform hover:-translate-y-1 transition-all duration-300 group"
                        aria-label="Back to top"
                    >
                        <svg className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -30px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                @keyframes floatDelayed {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(-30px, 30px) scale(0.9);
                    }
                    66% {
                        transform: translate(20px, -20px) scale(1.1);
                    }
                }

                @keyframes floatSlow {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(15px, 15px) scale(1.05);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: floatDelayed 25s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: floatSlow 30s ease-in-out infinite;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out both;
                }
            `}</style>
        </footer>
    );
}