'use client'

import React, { useState } from 'react';

type FormData = {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    message: string;
};

export default function contactForm() {
    const [formData, setFormData] = useState<FormData>({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents the default form submit action

        // Validate form data here
        if (!formData.fname.trim() || !formData.lname.trim()) {
            alert("First name and last name are required!");
            return; 
        }

        if (!formData.email.trim() ){
            alert("Email is required!");
            return; 
        }

        const words = formData.message.trim().split(/\s+/);
        if (words.length === 0 || words.length < 10) {
            alert("The message must not be empty and must be at least 10 words long!");
            return; 
        }

        // If validation is successful, handle the submission
        // This could be sending data to a server, logging it, etc.
        console.log("Form Submitted:", formData);
        
        alert("Form submitted successfully!"); // Provide user feedback
        setFormData({

            fname: '',
            lname: '',
            email: '',
            phone: '',
            message: '',
        })
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-gray-200">
            <div className="w-full max-w-xs p-8 md:max-w-sm lg:max-w-md" style={{maxWidth: '425px'}}>
                <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-300 p-6 rounded-lg">
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full border p-2"
                        required
                    />
                    <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full border p-2"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (optional)"
                        className="w-full border p-2"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border p-2"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Your Message"
                        className="w-full border p-2"
                        required
                    ></textarea>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}
