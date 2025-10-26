"use client"
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [carousel, setCarousel] = useState([]);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch("https://loving-compassion-bc81cd979e.strapiapp.com/api/homeimages?populate=*", {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                const formatted = data.data.map((item) => ({
                    name: item.title,
                    description: item.subtitle,
                    image: item.image,
                }));
                setCarousel(formatted);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "919661353905";
        const message = "Hi! I'm interested in exploring travel packages.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const nextSlide = () => {
        setDirection('next');
        setCurrentSlide((prev) => (prev + 1) % carousel.length);
    };

    const prevSlide = () => {
        setDirection('prev');
        setCurrentSlide((prev) => (prev - 1 + carousel.length) % carousel.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (carousel.length === 0) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [carousel.length, currentSlide]);

    if (loading) {
        return (
            <div className="relative h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 font-medium animate-pulse">Loading amazing destinations...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Slides */}
            {carousel.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlide === index
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30"></div>
                </div>
            ))}

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {carousel.map((slide, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${currentSlide === index
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8 absolute'
                                }`}
                        >
                            {/* Title with Animated Underline */}
                            <div className="mb-6 overflow-hidden">
                                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                    }`}>
                                    <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                                        {slide.name}
                                    </span>
                                </h1>
                                <div className={`h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 delay-300 ${currentSlide === index ? 'scale-x-100' : 'scale-x-0'
                                    }`}></div>
                            </div>

                            {/* Description */}
                            <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                {slide.description}
                            </p>

                            {/* CTA Button */}
                            <div className={`transition-all duration-700 delay-400 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                    <svg
                                        className="relative z-10 w-6 h-6 animate-bounce"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span className="relative z-10">Explore Now</span>
                                    <svg
                                        className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Feature Pills */}
                            <div className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 delay-500 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                {['Best Prices', 'Expert Guides', '24/7 Support'].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium"
                                    >
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group z-10"
            >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group z-10"
            >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button> */}

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {carousel.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                                ? 'w-12 h-3 bg-white'
                                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2 text-white/70 animate-bounce">
                <span className="text-xs font-medium rotate-90">Scroll</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}