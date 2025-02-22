import "./styling/Cards.css"

export default function Trending() {
    const destinations = [
        {
            name: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
            price: "$899",
            rating: 4.8,
            reviews: 245
        },
        {
            name: "Santorini, Greece",
            image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
            price: "$1299",
            rating: 4.9,
            reviews: 189
        },
        {
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
            price: "$1499",
            rating: 4.7,
            reviews: 312
        }
    ];

    return (
        <section data-name="trending-destinations" id="destinations" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Destinations</h2>
                    <p className="text-lg text-gray-600">Discover the most popular destinations loved by our travelers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
                                        <span>Book Now</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
