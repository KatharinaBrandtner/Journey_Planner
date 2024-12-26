// Katharina Brandtner
// view one journey

"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Heading from '@components/heading';
import Btn from '@components/button';
import ViewTripDetails from '@/components/view_trip_details'; 

const ViewTripPage = () => {
    
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    if (!id) {
        return <div>Oh noTrip ID not found!</div>;
    }

    return (
        <>
            <Navbar active="none" />
            <div className="container mb-5 mt-5 pt-5">
                <Heading text="View" variant="light" />
                <Heading text="Journey" variant="bold" />
                <ViewTripDetails  params={{ id }} />
                <a href="/allJourneys"><Btn text="go back to all journeys" variant='btn-dark'/></a>
            </div>
            <Footer />
        </>
    );
};

export default ViewTripPage;
