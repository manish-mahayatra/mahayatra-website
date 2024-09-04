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
        setDisplayedDestinations(quarterlyDestinations[selectedQuarter].slice(0, 4));
    }, [selectedQuarter]);

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

    const handleButtonClick = (quarter) => {
        setSelectedQuarter(quarter);
        setCurrentIndex(0); // Reset to the start of the list
    };


    return (
        <>
            <section className="py-[50px] bg-white" id="trending">
                <div className="container mx-auto">
                    <div className="py-5">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">Discover a New Destination Every Month</h2>
                    </div>
                    <div className="flex justify-evenly items-center mx-auto mb-4">
                        <button
                            onClick={() => handleButtonClick('Jan-Mar')}
                            className={`btn-quarter ${selectedQuarter === 'Jan-Mar' && 'bg-gray-200'} bg-gray-300 text-[#1B1464] font-bold py-2 px-16 text-left rounded-full flex justify-start items-center gap-4`}>
                            Jan - Mar
                        </button>
                        <button
                            onClick={() => handleButtonClick('Apr-Jun')}
                            className={`btn-quarter ${selectedQuarter === 'Apr-Jun' && 'bg-gray-200'} bg-gray-300 text-[#1B1464] font-bold py-2 px-16 rounded-full  flex justify-start items-center gap-4`}>
                            Apr - Jun
                        </button>
                        <button
                            onClick={() => handleButtonClick('Jul-Sep')}
                            className={`btn-quarter ${selectedQuarter === 'Jul-Sep' && 'bg-gray-200'} bg-gray-300 text-[#1B1464] font-bold py-2 px-16 rounded-full  flex justify-start items-center gap-4`}>
                            Jul - Sep
                        </button>
                        <button
                            onClick={() => handleButtonClick('Oct-Dec')}
                            className={`btn-quarter ${selectedQuarter === 'Oct-Dec' && 'bg-gray-200'} bg-gray-300 text-[#1B1464] font-bold py-2 px-16 rounded-full  flex justify-start items-center gap-4`}>
                            Oct - Dec
                        </button>
                    </div>
                    <div ref={containerRef} id="card-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-transform duration-700 ease-in-out">
                        {displayedDestinations.map((destination, index) => (
                            <div key={index} className="w-[300px] pb-5 bg-white shadow-lg rounded-lg hover:scale-105 hover:transition">
                                <div className="m-4">
                                    <img
                                        className="rounded-xl"
                                        src={`/images/monthly/${destination?.location?.toLowerCase().split(',')[0].replace(/\s+/g, '')}.jpg`}
                                        alt={`${destination.location} image`}
                                    />
                                    <div className="m-4">
                                        <div className="pb-6">
                                            <h3 className="text-[#191D82] my-2">{destination.location}</h3>
                                            <h2 className="text-[#05073C] font-medium my-2">{destination.description}</h2>
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