"use client";
import React, { useState } from 'react';
import { adventureDestinations } from '@/app/data/adventureDestinations';
import EnquiryModal from '../UI/EnquiryModal/EnquiryModal'; // Import the modal component

const Adventures = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState('');
    const itemsPerPage = 3;
    const maxIndex = adventureDestinations.length - itemsPerPage;

    const handleNext = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex + itemsPerPage;
            return newIndex > maxIndex ? 0 : newIndex;
        });
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - itemsPerPage;
            return newIndex < 0 ? maxIndex : newIndex;
        });
    };

    const currentDestinations = adventureDestinations.slice(startIndex, startIndex + itemsPerPage);

    const handleEnquireNow = (place) => {
        setSelectedDestination(place); // Set the selected destination
        setIsModalOpen(true); // Open the modal
    };

    return (
        <>
            <section className="trending py-[50px] bg-white" id="trending">
                <div className="container max-w-screen-xl mx-auto relative">
                    <div className="">
                        <div className="py-5">
                            <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">
                                Discover Thrilling Outdoor Adventures
                            </h2>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex flex-wrap justify-center gap-6 transition-transform duration-500 ease-in-out">
                                {currentDestinations.map((destination, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] mb-5 bg-white shadow-lg rounded-lg hover:scale-105 hover:transition"
                                    >
                                        <div className="m-4">
                                            <img
                                                className="rounded-xl"
                                                src={destination.image}
                                                alt={`${destination.location} image`}
                                            />
                                            <div className="m-4">
                                                <div className="pb-6">
                                                    <h3 className="text-[#191D82] my-2">{destination.place}</h3>
                                                    <h2 className="text-[#05073C] font-medium my-2">
                                                        {destination.description.split(' ').slice(0, 8).join(' ')}{destination.description.split(' ').length > 8 ? '...' : ''}
                                                    </h2>
                                                </div>
                                                <hr className="" />
                                                <div
                                                    className="flex justify-start items-center text-[#FFA104] pt-2 gap-x-2 cursor-pointer"
                                                    onClick={() => handleEnquireNow(destination.place)} // Open modal on click
                                                >
                                                    <p>Enquire Now</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                                        className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                        >
                            &#8249; {/* Left arrow symbol */}
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                        >
                            &#8250; {/* Right arrow symbol */}
                        </button>
                    </div>
                </div>
            </section>

            {/* Enquiry Modal */}
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} destination={selectedDestination} />
        </>
    );
}

export default Adventures;
