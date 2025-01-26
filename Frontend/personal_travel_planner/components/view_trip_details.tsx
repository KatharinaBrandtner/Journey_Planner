

"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@components/axios"; 
import InputGroup from "@/components/inputgroup";
import { ViewTripDetailsProps } from "@/types/tripdetailprops";

export default function ViewTripDetails({ params }: ViewTripDetailsProps) {
    const { id } = params;

    // State für die Trip-Daten
    const [trip, setTrip] = useState({
        country: "",
        startDate: "",
        endDate: "",
        guide: "",
        comment: "",
        cityone: "",
        numbercityone: "",
        citytwo: "",
        numbercitytwo: "",
        citythree: "",
        numbercitythree: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setError("Trip ID is undefined");
            setLoading(false);
            return;
        }

        const fetchTrip = async () => {
            try {
                const response = await axiosInstance.get(`/trips/${id}`);
                const tripData = response.data;

                setTrip({
                    ...tripData,
                    cityone: tripData.cityone || "",
                    numbercityone: tripData.numbercityone || "",
                    citytwo: tripData.citytwo || "",
                    numbercitytwo: tripData.numbercitytwo || "",
                    citythree: tripData.citythree || "",
                    numbercitythree: tripData.numbercitythree || "",
                });
            } catch (err: any) {
                console.error("Error fetching trip:", err);
                setError(
                    err.response?.status === 401
                        ? "Unauthorized! Please log in to view this trip."
                        : "Failed to load trip data."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchTrip();
    }, [id]);

    if (loading) {
        return <div>Loading trip details...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
             {error&&<div className="alert alert-danger">{error}</div>}

             <div>
                 <div className="row">
                     <div className="col-sm-5">
                         <InputGroup text="Country"type="text"valueinput={trip.country}/>
                         <InputGroup text="Start Date"type="date"valueinput={trip.startDate}/>
                         <InputGroup text="End Date"type="date"valueinput={trip.endDate}/>
                         <InputGroup text="Guide"type="guide"valueinput={trip.guide}/>
                         <InputGroup text="Comments"type="textarea"valueinput={trip.comment}/>
                     </div>
                     <div className="col-sm-7">
                         <img src="/images/formsimg.png"className="img-fluid"alt="Journey"/>
                     </div>
                 </div>

                 <h2 className="light">Cities</h2>
                 <div className="row">
                     <div className="col-sm-4">
                         <InputGroup text="City One"type="text"valueinput={trip.cityone}/>
                         <InputGroup text="Length of Stay (days)"type="number"valueinput={trip.numbercityone}/>
                     </div>
                     <div className="col-sm-4">
                         <InputGroup text="City Two"type="text"valueinput={trip.citytwo}/>
                         <InputGroup text="Length of Stay (days)"type="number"valueinput={trip.numbercitytwo}/>
                     </div>
                     <div className="col-sm-4">
                         <InputGroup text="City Three"type="text"valueinput={trip.citythree}/>
                         <InputGroup text="Length of Stay (days)"type="number"valueinput={trip.numbercitythree}/>
                     </div>
                 </div>
             </div>
         </div>
    );
}
