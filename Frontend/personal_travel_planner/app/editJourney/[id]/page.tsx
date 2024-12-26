// Katharina Brandtner
// edit one

"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Heading from '@components/heading';
import EditTripForm from '@components/editforms'; 

export default function EditTripPage() {
    
     const params = useParams();
     const id = Array.isArray(params.id) ? params.id[0] : params.id; //sonst fehlermeldung bei id params zeugs

    if (!id) {
        return <div>Oh noTrip ID not found!</div>; 
    }

    return (
        <>
            <Navbar active="none" />
            <div className="container mt-5 mb-5 pt-5">
                <Heading text="Edit" variant="light" />
                <Heading text="Journey" variant="bold" />
                <EditTripForm params={{ id }} />
            </div>
            <Footer />
        </>
    );
};
