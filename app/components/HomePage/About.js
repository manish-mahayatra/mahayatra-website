import React from 'react'

const About = () => {
    return (
        <>
            <section className="bg-white">
                <div
                    className="container mx-auto bg-[#EB662B] bg-opacity-10 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-2/3 p-6">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#FFA104] my-6">Why choose Mahayatra !</h1>
                        <p className="mb-6 text-gray-700 mx-6 font-light">
                            Welcome to Maha Yatra, where we craft unforgettable journeys. Explore the diverse landscapes of India and
                            enchanting destinations like Bali, Nepal, Thailand. Let us be your guide to immersive travel experiences,
                            blending
                            cultural richness and scenic beauty into personalized adventures.
                        </p>
                        <div className="space-y-4 mx-6">
                            <div className="flex items-start">
                                <div className="text-yellow-500 mr-4">
                                    {/* <!-- Icon for Ultimate flexibility --> */}
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#FFA104] w-16">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-bold text-2xl text-[#05073C]">Ultimate flexibility</h2>
                                    <p className="text-gray-600">Tailor your journey with our customizable tour plans—crafted to match your
                                        preferences, creating a unique adventure just for you.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="text-yellow-500 mr-4">
                                    {/* <!-- Icon for Memorable experiences --> */}
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#FFA104] w-16">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-bold text-2xl text-[#05073C]">Memorable experiences</h2>
                                    <p className="text-gray-600">Your unforgettable journey begins here with our exceptional tour guides—your key
                                        to
                                        unparalleled travel experiences.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="text-yellow-500 mr-4">
                                    {/* <!-- Icon for Affordable pricing --> */}
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[#FFA104] w-16">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-bold text-2xl text-[#05073C]">Affordable pricing</h2>
                                    <p className="text-gray-600">Enjoy unbeatable affordability with our best-friendly prices—creating memorable
                                        experiences without breaking the bank.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                        <img src="/images/aboutimage.png" alt="Travelers" className="w-[600px]" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About