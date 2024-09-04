import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" className="h-full">
                {/* style="background-image: url('/assets/images/contact-bg4.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" */}
                <div className="container">
                    {/* <!-- <h1 className="text-center text-5xl">Contact Us</h1> -->
          <!-- <hr className="h-4 w-full text-orange-400"> --> */}
                    <div className="flex justify-center items-center py-24 h-auto">
                        <div className="border border-gray-300 p-10 sm:py-32 sm:px-24 rounded-3xl text-center shadow-yellow-100 bg-white">
                            <h2 className="text-4xl sm:text-7xl mt-6 mb-16 font-bold text-center text-[#FAA710]">Contact us</h2>
                            <p className="text-gray-800 text-3xl mb-6">Get in touch with us for your customized
                                trip plan!</p>
                            <form className="form" action="https://formspree.io/f/maygdvov" method="POST">
                                <div className="px-2 grid grid-cols-1 sm:grid-cols-2 sm:px-16 gap-6 text-left">
                                    <div className="form-input m-2">
                                        <label htmlFor="name" className="">Your Name</label>
                                        <input name="name" type="text" id="name"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="Rishav Jha" required />
                                    </div>
                                    <div className="form-input m-2">
                                        <label htmlFor="email" className="">Your email</label>
                                        <input name="email" type="email" id="email"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="name@email.com" required />
                                    </div>
                                    <div className="form-input m-2">
                                        <label htmlFor="phone" className="">Your Phone No</label>
                                        <input name="phone" type="text" id="phone"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="+91-1234567890" required />
                                    </div>
                                    <div className="form-input m-2">
                                        <label htmlFor="destination" className="">Destination</label>
                                        <input name="destination" type="text" id="destination"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="Bali" required />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="traveldate" className="">Travel Date</label>
                                        <input name="traveldate" type="date" id="traveldate"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            required />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="daysoftravel" className="">No of Days of Travel</label>
                                        <input name="daysoftravel" type="number" id="daysoftravel"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="4" required />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="noofadults" className="">No of Adults</label>
                                        <input name="noofadults" type="number" id="noofadults"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="2" required />
                                    </div>
                                    <div className="form-input">
                                        <label htmlFor="noofchildren" className="">No of Children</label>
                                        <input name="noofchildren" type="number" id="noofchildren"
                                            className="bg-gray-100 w-full sm:w-96 rounded-md p-4 my-4 outline outline-1 text-2xl outline-[#FAA710]"
                                            placeholder="2" required />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-10">
                                    <button type="submit" className="border bg-[#FAA710] text-white rounded-xl p-5 text-3xl">
                                        Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact