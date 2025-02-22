import "./styling/Cards.css"

export default function Monthly() {
    const destinations = [
        {
            month: "January",
            place: "Swiss Alps",
            description: "Perfect for winter sports and scenic beauty",
            image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e",
            activities: ["Skiing", "Snowboarding", "Hiking"]
        },
        {
            month: "February",
            place: "Venice, Italy",
            description: "Experience the famous carnival",
            image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
            activities: ["Carnival", "Gondola Rides", "Art Tours"]
        },
        {
            month: "March",
            place: "Tokyo, Japan",
            description: "Cherry blossom season at its peak",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
            activities: ["Cherry Viewing", "Temple Visits", "Food Tours"]
        }
    ];

    return (
        <section data-name="monthly-destinations" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Destinations of the Month</h2>
                    <p className="text-lg text-gray-600">Best places to visit in different months of the year</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="relative">
                                <img
                                    src={dest.image}
                                    alt={dest.place}
                                    className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full font-medium">
                                    {dest.month}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.place}</h3>
                                <p className="text-gray-600 mb-4">{dest.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {dest.activities.map((activity, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                                <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 group-hover:translate-x-2 flex items-center">
                                    Learn More
                                    <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
