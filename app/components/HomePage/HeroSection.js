export default function HeroSection() {
    return (
        <>
            <div className="bg-[url('/images/mahayatra-bg.jpeg')] bg-no-repeat bg-center bg-cover">
                <div className="flex justify-start items-center h-[100vh] max-w-screen-xl mx-auto px-4 sm:px-12">
                    {/* Add padding for responsiveness */}
                    <div className="text-left">
                        {/* Aligning all text to the left */}
                        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold drop-shadow-4xl transition-all duration-300 hover:text-[#F8B84E]">
                            Pack Your Bags!
                        </h2>
                        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold drop-shadow-lg">
                            <span className="text-[#F8B84E] drop-shadow-xl font-bold mx-1">Mahayatra’s</span> 
                            Epic Deals
                        </h2>
                        <h2 className="text-xl sm:text-4xl lg:text-5xl mb-8 font-bold text-white drop-shadow-2xl transition-all duration-300 hover:text-[#F8B84E]">
                            Await Your Next Adventure!
                        </h2>
                        <div className="flex justify-start items-center gap-5">
                            <a href="tel:+919540900810"
                                className="text-white rounded-xl text-lg sm:text-2xl lg:text-3xl py-2 px-3 sm:px-7 lg:px-10 text-center cursor-pointer bg-[#FAA710] transition-all duration-300"
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
