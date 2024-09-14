import React from 'react';
import InfiniteSlider from '../UI/InfiniteSlider/InfiniteSlider';

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
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center mb-8 px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">Gallery</h2>
                </div>
                <InfiniteSlider />
            </div>
        </div>
    );
};

export default TravelGuide;
