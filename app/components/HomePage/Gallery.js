export default function Gallery() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
            caption: "Mountain View"
        },
        {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            caption: "Beach Sunset"
        },
        {
            url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220",
            caption: "City Lights"
        },
        {
            url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
            caption: "Ocean Paradise"
        },
        {
            url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7",
            caption: "Desert Safari"
        },
        {
            url: "https://images.unsplash.com/photo-1442483221814-59f7d8b22739",
            caption: "Forest Adventure"
        }
    ];

    return (
        <section data-name="gallery" id="gallery" className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Travel Gallery</h2>
                <p className="section-subtitle">Glimpses of amazing moments from our travelers</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium">{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
