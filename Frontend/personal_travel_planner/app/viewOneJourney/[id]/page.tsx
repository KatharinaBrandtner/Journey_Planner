//  Katharina Brandtner
//  view one journey



"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Heading from "@components/heading";
import Btn from "@components/button";
import ViewTripDetails from "@/components/view_trip_details";

const ViewTripPage = () => {
    const params = useParams();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
        return (
            <>
                <Navbar active="none" />
                <div className="container mt-5 text-center">
                    <p className="alert alert-warning">
                        Bitte logge dich ein, um diese Reise anzusehen.
                    </p>
                </div>
                <Footer />
            </>
        );
    }

    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    if (!id) {
        return (
            <>
                <Navbar active="none" />
                <div className="container mt-5 text-center">
                    <p className="alert alert-danger">Trip ID not found!</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar active="none" />
            <div className="container mb-5 mt-5 pt-5">
                <Heading text="View" variant="light" />
                <Heading text="Journey" variant="bold" />
                <ViewTripDetails params={{ id }} />
                <a href="/allJourneys">
                    <Btn text="Go back to all journeys" variant="btn-dark" />
                </a>
            </div>
            <Footer />
        </>
    );
};

export default ViewTripPage;
