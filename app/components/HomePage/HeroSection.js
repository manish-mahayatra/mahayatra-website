<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>

export default function HeroSection() {
    const phoneNumber = "1234567890"; // Replace with the actual phone number
    const message = "Hello! I would like to get in touch.";

    return (
        <>
            <div className="bg-[url('/images/mahayatra-bg.jpeg')] bg-no-repeat bg-center bg-cover shadow-custom-inset">
                <div className="flex justify-center items-center h-[100vh] max-w-screen-xl mx-auto px-4 sm:px-12">
                    {/* Add padding for responsiveness */}
                    <div className="text-center">
                        {/* Aligning all text to the left */}
                        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-white mb-6 font-semibold drop-shadow-4xl transition-all duration-300 hover:outline-1 hover:outline-black font-serif">
                            "From dreams to destinations <br /> we make it happen"
                        </h2>
                        {/* <h2 className="text-2xl sm:text-5xl lg:text-6xl text-white mb-6 font-bold drop-shadow-lg">
                            <span className="text-[#F8B84E] drop-shadow-xl font-bold mx-1">Mahayatra’s</span> 
                            Epic Deals
                        </h2> */}
                        {/* <h2 className="text-xl sm:text-4xl lg:text-5xl mb-8 font-bold text-white drop-shadow-2xl transition-all duration-300 hover:text-[#F8B84E]">
                        </h2> */}
                        <div className="flex justify-center items-center gap-5">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 rounded-xl text-lg bg-[#FAA710] text-white transition-colors duration-300"
                            >
                                Get in touch!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
