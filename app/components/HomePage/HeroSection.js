"use client"
import { useState, useEffect } from "react";
import "./styling/HeroSection.css"

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch("http://localhost:1337/api/homeimages?populate=*");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                const formatted = data.data.map((item) => ({
                    name: item.title,
                    description: item.subtitle,
                    image: item.image,
                }));
                console.log(formatted)
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
        // Replace this with your company's WhatsApp number
        const phoneNumber = "919661353905"; // Format: country code + number (e.g., 91 for India)
        const message = "Hi! I'm interested in exploring travel packages.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // const slides = [
    //     {
    //         image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    //         title: "Discover Amazing Places",
    //         subtitle: "Experience the world's most breathtaking destinations"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    //         title: "Adventure Awaits",
    //         subtitle: "Create unforgettable memories with us"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
    //         title: "Explore Paradise",
    //         subtitle: "Your dream vacation starts here"
    //     }
    // ];



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carousel.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [carousel.length]);

    return (
        <div data-name="hero-carousel" className="hero-carousel">
            {carousel.map((slide, index) => (
                <div
                    key={index}
                    className="carousel-slide"
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        opacity: currentSlide === index ? 1 : 0
                    }}
                >
                    <div className="carousel-overlay"></div>
                    <div className="carousel-content">
                        <h2 className="text-5xl font-bold mb-4">{slide.name}</h2>
                        <p className="text-xl mb-8">{slide.description}</p>
                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto gap-x-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 464 488">
                                <path fill="currentColor" d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z"></path>
                            </svg>
                            Explore Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
