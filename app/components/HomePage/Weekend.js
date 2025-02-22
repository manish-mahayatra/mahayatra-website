import "./styling/Cards.css"

export default function Weekend() {
    const gateways = [
        {
            name: "Mountain Retreat",
            location: "Swiss Alps",
            duration: "2 Days",
            price: "$399",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            highlights: ["Guided Tours", "Luxury Stay", "All Meals"]
        },
        {
            name: "Beach Paradise",
            location: "Maldives",
            duration: "3 Days",
            price: "$599",
            image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb",
            highlights: ["Water Sports", "Spa Access", "Sunset Cruise"]
        },
        {
            name: "City Escape",
            location: "Paris",
            duration: "2 Days",
            price: "$449",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            highlights: ["City Tour", "Museum Pass", "Local Guide"]
        }
    ];

    return (
        <section data-name="weekend-gateway" id="weekend" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Weekend Getaways</h2>
                    <p className="text-lg text-gray-600">Perfect short trips for your weekend break</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gateways.map((gateway, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="relative">
                                <img
                                    src={gateway.image}
                                    alt={gateway.name}
                                    className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                                    <h3 className="text-2xl font-bold text-white">{gateway.name}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                                    <span className="text-gray-600">{gateway.location}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-clock text-blue-600 mr-2"></i>
                                        <span className="text-gray-600">{gateway.duration}</span>
                                    </div>
                                    <span className="text-blue-600 font-bold text-xl">{gateway.price}</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 mb-4">
                                    <div className="space-y-2">
                                        {gateway.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center text-gray-600">
                                                <i className="fas fa-check text-green-500 mr-2"></i>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                                    <span>Book Now</span>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
