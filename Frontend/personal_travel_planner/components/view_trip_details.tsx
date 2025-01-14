// Katharina Brandtner
// View One Trip: Details einer Reise anzeigen

"use client";

import React,{useEffect,useState}from'react';
import axios from'axios';
import InputGroup from'@/components/inputgroup';
import {ViewTripDetailsProps}from'@/types/tripdetailprops';

export default function ViewTripDetails({params}:ViewTripDetailsProps){
    const{id}=params;

    // State für die Trip-Daten
    const[trip,setTrip]=useState({
        country:'',
        startDate:'',
        endDate:'',
        guide:'',
        comment:'',
        cityone:'',
        numbercityone:'',
        citytwo:'',
        numbercitytwo:'',
        citythree:'',
        numbercitythree:'',
    });

    const[error,setError]=useState('');

    useEffect(()=>{
        if(!id){
            setError('Trip ID is undefined');
            return;
        }

        axios
            .get(`http://localhost:8000/api/trips/${id}`)
            .then((response)=>{
                const tripData=response.data;
                setTrip({
                    ...tripData,
                    cityone:tripData.cityone||'',
                    numbercityone:tripData.numbercityone||'',
                    citytwo:tripData.citytwo||'',
                    numbercitytwo:tripData.numbercitytwo||'',
                    citythree:tripData.citythree||'',
                    numbercitythree:tripData.numbercitythree||'',
                });
            })
            .catch((error)=>{
                console.error('Error fetching trip:',error);
                setError('Failed to load trip data.');
            });
    },[id]);

    return(
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
