"use client"
import React, { useState, useEffect, useRef } from 'react';
import { quarterlyDestinations } from '@/app/data/quarterlyDestinations';
import { TbMasksTheater } from "react-icons/tb";
import { PiBowlFood } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";
import { PiMountains } from "react-icons/pi";


const Monthly = () => {

    const [selectedQuarter, setSelectedQuarter] = useState('Jan-Mar');
    const [displayedDestinations, setDisplayedDestinations] = useState(quarterlyDestinations['Jan-Mar']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const destinations = quarterlyDestinations[selectedQuarter];
                const newIndex = (prevIndex + 4) % destinations.length;
                setDisplayedDestinations(destinations.slice(newIndex, newIndex + 4));
                containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                return newIndex;
            });
        }, 3000); // Adjust the delay as needed

        return () => clearInterval(intervalId);
    }, [selectedQuarter]);


    return (
        <>
            <section className="py-[50px] bg-white" id="trending">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="py-5">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">Discover a New Destination Every Month</h2>
                    </div>
                    <div ref={containerRef} id="card-container" className="flex flex-wrap justify-center gap-6 transition-transform duration-500 ease-in-out">
                        {displayedDestinations.map((destination, index) => (
                            <div key={index} className="w-[300px] pb-5 bg-white shadow-lg rounded-lg hover:scale-105 hover:transition">
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
                                        <div className="flex justify-between items-center text-[#FFA104] pt-2">
                                            <p>4 Days</p>
                                            <p className="text-[#FFA104]">From $100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Monthly