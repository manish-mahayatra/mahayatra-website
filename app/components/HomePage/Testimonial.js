import React from 'react';

const testimonials = [
    {
        title: 'Great Work',
        content: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
        name: 'Courtney Henry',
        role: 'Web Designer',
        imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        title: 'Great Work',
        content: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
        name: 'Courtney Henry',
        role: 'Web Designer',
        imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        title: 'Great Work',
        content: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
        name: 'Courtney Henry',
        role: 'Web Designer',
        imgSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
];

const Testimonial = () => {
    return (
        <div className="bg-[#FFF6F5] py-16">
            <h2 className="text-center text-2xl font-semibold mb-10">What our Travelers are saying</h2>
            <div className="flex justify-center space-x-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md max-w-xs text-center"
                    >
                        <h3 className="text-lg font-bold mb-2">{testimonial.title}</h3>
                        <p className="text-gray-700 mb-4">{testimonial.content}</p>
                        <div className="flex items-center justify-center">
                            <img
                                src={testimonial.imgSrc}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-2"
                            />
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-16 mt-10 text-center">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-2xl font-bold">16M</div>
            </div>
            <div className="flex justify-center space-x-16 mt-2 text-center text-gray-600">
                <div>1000+ reviews on TripAdvisor. Certificate of Excellence</div>
                <div>Happy Customers</div>
            </div>
        </div>
    );
};

export default Testimonial;
