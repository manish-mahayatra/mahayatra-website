"use client"
import { useState, useEffect } from "react";
import "./styling/HeroSection.css"

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            title: "Discover Amazing Places",
            subtitle: "Experience the world's most breathtaking destinations"
        },
        {
            image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
            title: "Adventure Awaits",
            subtitle: "Create unforgettable memories with us"
        },
        {
            image: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40",
            title: "Explore Paradise",
            subtitle: "Your dream vacation starts here"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div data-name="hero-carousel" className="hero-carousel">
            {slides.map((slide, index) => (
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
                        <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                        <p className="text-xl mb-8">{slide.subtitle}</p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                            Explore Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
