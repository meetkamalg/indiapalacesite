import React from 'react';
import ContactForm from '../components/ContactForm'; // adjust the path as necessary

export const metadata = {
    title: 'Contact',
    description: 'Reach out to us!',
};

export default function ContactPage() {
    return (
        <div>
            <ContactForm />
        </div>
    );
}
