"use client"
import React, { useState, useEffect } from 'react'
import { travelDestinations } from '@/app/data/travelDestinations'

const Trending = () => {

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartIndex(prevIndex => {
                const newIndex = prevIndex + itemsPerPage;
                return newIndex >= travelDestinations.length ? 0 : newIndex;
            });
        }, 3000); // Change cards every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    const currentDestinations = travelDestinations.slice(startIndex, startIndex + itemsPerPage);

    // const translateValue = `translate-x-${startIndex * -100}`;

    return (
        <>
            <section className="trending py-[50px] bg-white" id="trending">
                <div className="container mx-auto">
                    <div className="">
                        <div className="py-5">
                            <h2 className="text-3xl sm:text-5xl font-bold text-[#FFA104] pb-8">Trending Destinations</h2>
                        </div>

                        <div className="overflow-hidden">

                            <div className="flex justify-between items-center flex-wrap p-2">
                                {currentDestinations.map((destination, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[500px] pb-5 bg-white shadow-lg rounded-lg hover:scale-105 hover:transition"
                                    >
                                        <div className="m-4">
                                            <img
                                                className="rounded-xl"
                                                src={`/images/trending/${destination.location.toLowerCase().split(',')[0].replace(/\s+/g, '')}.jpg`}
                                                alt={`${destination.location} image`}
                                            />
                                            <div className="m-4">
                                                <div className="pb-6">
                                                    <h3 className="text-[#191D82] my-2">{destination.location}</h3>
                                                    <h2 className="text-[#05073C] font-medium my-2">{destination.description}</h2>
                                                </div>
                                                <hr className="" />
                                                <div className="flex justify-start items-center text-[#FFA104] pt-2 gap-x-2">
                                                    <p>Learn more</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        className="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trending