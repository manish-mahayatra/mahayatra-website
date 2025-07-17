"use client"
import { useState, useEffect } from "react";

export default function Testimonials() {

    const [testimonial, setTestimonial] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {   
        const fetchDestinations = async () => {
            try {
                const res = await fetch("https://loving-compassion-bc81cd979e.strapiapp.com/api/reviews?populate=*", {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                    },
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                const formatted = data.data.map((item) => ({
                    name: item.name,
                    location: item.location,
                    comment: item.description,
                    avatar: `https://loving-compassion-bc81cd979e.strapiapp.com/${item.profile?.url}`,
                }));
                setTestimonial(formatted);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    return (
        <section data-name="testimonials" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">What Our Travelers Say</h2>
                <p className="section-subtitle">Real experiences from our satisfied customers</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonial.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.comment}</p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
