"use client"
import { useState, useEffect } from "react";
import "./styling/Cards.css"

export default function Monthly() {
   
    const [destination, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch("http://localhost:1337/api/monthlies?populate=*");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                const formatted = data.data.map((item) => ({
                    name: item.title,
                    price: `From ₹${item.startingFrom}`,
                    description: item.shortDescription,
                    image: `http://localhost:1337${item.image?.url}`, // Ensure full URL
                    rating: 4.8, // default since your API doesn’t have this
                    reviews: 127 // default too
                }));
                setDestinations(formatted);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            // If we've reached the end of the original set
            if (nextIndex >= destination.length) {
                // Immediately reset to the start of the duplicate set
                return 0;
            }
            return nextIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex - 1;
            // If we've reached the start
            if (nextIndex < 0) {
                // Jump to the end of the original set
                return destination.length - 1;
            }
            return nextIndex;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading destinations...</div>;
    }

    return (

         <section data-name="trending-destinations" id="destinations" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Destinations of the Month</h2>
                    <p className="text-lg text-gray-600">Best places to visit in different months of the year</p>
                </div>

                <div className="carousel-container">
                    <button
                        className="carousel-button prev"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div className="carousel-wrapper"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                            width: `${(destination.length / 3) * 100}%`
                        }}>
                        {destination.map((dest, index) => (
                            <div key={index}
                                className="destination-card">
                                <div className="relative">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                                        <span className="text-blue-600 font-semibold">{dest.price}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.name}</h3>
                                    <div className="flex items-center mb-4">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className="fas fa-star text-sm"></i>
                                            ))}
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600">{dest.rating} ({dest.reviews} reviews)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="w-full bg-[#FAA710] text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                                            <span>Book Now</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-button next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <div className="carousel-dots">
                        {Array.from({ length: Math.max(destination.length - 2, 0) }).map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
