// EnquiryModal.js
import React, { useState } from 'react';

const EnquiryModal = ({ isOpen, onClose, destination }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        destination: destination || '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., save data to Airtable)
        console.log(formData);
        onClose(); // Close the modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className="w-[400px] md:w-[500px] fixed inset-0 flex items-center justify-center mx-auto z-50">
            <div className="absolute inset-0" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-5 z-10">
                <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 mb-2 w-full"
                    />
                    <button type="submit" className="bg-[#FAA710] text-white py-2 px-4 rounded">
                        Submit
                    </button>
                    <button type="button" onClick={onClose} className="ml-2 text-gray-600">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryModal;
