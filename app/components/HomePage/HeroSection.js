
export default function HeroSection () {
    return (
        <>
            <div className="content  bg-[url('/images/home-bg-almaty.jpg')] bg-no-repeat bg-center bg-cover">

                <div className="flex justify-center items-center h-[100vh]">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-7xl text-white mb-6 font-bold flex drop-shadow-lg">"Pack Your Bags! <span
                            className="text-[#F8B84E] drop-shadow-xl font-bold mx-1">Mahayatra’s</span> Epic Deals
                        </h2>
                        <h2 className="mb-8 text-2xl sm:text-7xl font-bold text-white drop-shadow-lg">Await Your Next Adventure!"</h2>
                        <div className="flex justify-center items-center gap-5">
                            <a href="tel:+919540900810"
                                className="text-white font-large rounded-xl text-4xl py-3 px-7 text-center cursor-pointer bg-[#FAA710]"
                            >Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
