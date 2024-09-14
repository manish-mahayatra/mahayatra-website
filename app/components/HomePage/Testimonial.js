import React from 'react';

const testimonials = [
    {
        title: 'Absolutely Amazing!',
        content: "Bali was beyond what I expected. From the beaches to the culture, everything was breathtaking. Can't wait to visit again!",
        name: 'Mahesh Bhairwa.',
    },
    {
        title: 'A Soulful Experience',
        content: "Rishikesh was the perfect escape. The mix of adventure and spirituality gave me a whole new perspective. Loved every moment of it!",
        name: 'Rishav Jha.',
    },
    {
        title: 'A Luxe Vacation',
        content: "Dubai was like stepping into a futuristic world. The skyline, the shopping, and the nightlife—everything was just top-notch!",
        name: 'Ritu Panchal.',
    },
];


const Testimonial = () => {
    return (
        <div className="bg-[#FFF6F5] py-16">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">What our Travelers are saying</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md max-w-xs text-left mx-auto sm:mx-0"
                    >
                        <h3 className="text-lg font-bold mb-2 text-[#FFA104]">{testimonial.title}</h3>
                        <p className="text-gray-700 mb-4">{testimonial.content}</p>
                        <p className="font-semibold text-[#FFA104]">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
