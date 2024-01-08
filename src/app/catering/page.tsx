import React from 'react';
import CateringForm from '../components/CateringForm';

export const metadata = {
    title: 'Catering',
    description: 'Catering for any event!',
};

export default function CateringPage() {
    return (
        <div>
            <CateringForm />
        </div>
    );
}
