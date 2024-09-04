import React from 'react';

const travelGuides = [
    {
        date: 'April 06 2023',
        author: 'Ali Tufan',
        title: 'Kenya vs Tanzania Safari: The Better African Safari Experience',
        imgSrc: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        category: 'Trips',
    },
    {
        date: 'April 07 2023',
        author: 'Emily Johnson',
        title: 'Exploring the Serengeti: A Wildlife Adventure',
        imgSrc: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        category: 'Trips',
    },
    {
        date: 'April 08 2023',
        author: 'Maxwell Rhodes',
        title: 'Into the Wild: An Unforgettable Safari Journey',
        imgSrc: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        category: 'Trips',
    },
];

const TravelGuide = () => {
    return (
        <div className="py-[50px] bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8 px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">Travel Guide</h2>
                    <a href="#" className="text-[#FFA104] text-2xl font-light">See all</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 px-4">
                    {travelGuides.map((guide, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="relative">
                                <img src={guide.imgSrc} alt={guide.title} className="w-full h-48 object-cover" />
                                <span className="absolute top-2 left-2 bg-white text-orange-600 text-xs font-medium px-2 py-1 rounded-full">Trips</span>
                            </div>
                            <div className="p-4">
                                <div className="text-xs text-gray-500 mb-1">{guide.date}  By <span className="font-semibold">{guide.author}</span></div>
                                <h3 className="text-lg font-semibold text-gray-800">{guide.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelGuide;
