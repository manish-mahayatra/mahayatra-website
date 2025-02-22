export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            location: "New York, USA",
            comment: "Amazing experience! The team made our vacation truly unforgettable. Will definitely book again!",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        },
        {
            name: "Michael Chen",
            location: "Singapore",
            comment: "Professional service and great attention to detail. Everything was perfectly organized.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        {
            name: "Emma Wilson",
            location: "London, UK",
            comment: "Fantastic destinations and competitive prices. The customer service was exceptional!",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        }
    ];

    return (
        <section data-name="testimonials" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">What Our Travelers Say</h2>
                <p className="section-subtitle">Real experiences from our satisfied customers</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
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
