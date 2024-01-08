'use client'
import React, { useState } from 'react';
import menuData from './menuData';

// Define types for your form state if necessary
interface CateringFormState {
    customerName: string;
    customerPhone: string;
    eventType: string;
    eventDate: string;
    estimatedAttendees: number;
    selections: { [category: string]: string[] };
}
export default function cateringForm() {
    const [formData, setFormData] = useState<CateringFormState>({
        customerName: '',
        customerPhone: '',
        eventType: '',
        eventDate: '',
        estimatedAttendees: 0,
        selections: {},
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) || 0 });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        console.log("Form Data:", formData); // Log the entire formData
    
        const inputDate = new Date(formData.eventDate);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Normalize current date's time part for accurate comparison
    
        console.log("Input Date:", inputDate); // Log the input date
        console.log("Current Date:", currentDate); // Log the current date
    
        // Rest of your validation...
    };
    

    const handleSelectionChange = (category: string, itemName: string, isSelected: boolean) => {
        const updatedSelections = { ...formData.selections };
        if (isSelected) {
            if (!updatedSelections[category]) updatedSelections[category] = [];
            updatedSelections[category].push(itemName);
        } else {
            updatedSelections[category] = updatedSelections[category]?.filter(item => item !== itemName);
        }
        setFormData({ ...formData, selections: updatedSelections });
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-gray-200">
            <div className="w-full max-w-xs p-8 md:max-w-sm lg:max-w-md" style={{ maxWidth: '425px' }}>
                <h2 className="text-center text-2xl font-bold mb-4">Catering Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-300 p-6 rounded-lg">
                    <div className="flex flex-col">
                        <label htmlFor="customerName" className="mb-2">Name:</label>
                        <input
                            id="customerName"
                            type="text"
                            name="customerName"
                            onChange={handleInputChange}
                            value={formData.customerName}
                            placeholder="Name"
                            className="w-full border p-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="customerPhone" className="mb-2">Phone Number:</label>
                        <input
                            id="customerPhone"
                            type="tel"
                            name="customerPhone"
                            onChange={handleInputChange}
                            value={formData.customerPhone}
                            placeholder="Phone Number"
                            className="w-full border p-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="eventType" className="mb-2">Event Type:</label>
                        <input
                            id="eventType"
                            type="text"
                            name="eventType"
                            onChange={handleInputChange}
                            value={formData.eventType}
                            placeholder="Event Type"
                            className="w-full border p-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="eventDate" className="mb-2">Event Date:</label>
                        <input
                            id="eventDate"
                            type="date"
                            name="eventDate"
                            onChange={handleInputChange}
                            value={formData.eventDate}
                            placeholder="Event Date"
                            className="w-full border p-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="estimatedAttendees" className="mb-2">Estimated Number of Attendees:</label>
                        <input
                            id="estimatedAttendees"
                            type="number"
                            name="estimatedAttendees"
                            onChange={handleNumberChange}
                            value={formData.estimatedAttendees}
                            placeholder="Estimated Number of Attendees"
                            className="w-full border p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit Catering Inquiry 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
