// Katharina Brandtner
// edit form

"use client";

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import InputGroup from '@/components/inputgroup';
import Btn from '@/components/button';


export default function EditTripForm({params}: {params: {id: string}}){
    const {id}=params;
    const router=useRouter();

    const [trip, setTrip] = useState({
        country: '',
        startDate: '',
        endDate: '',
        guide: '',
        comment: '',
        cityone: '',
        numbercityone: '',
        citytwo: '',
        numbercitytwo: '',
        citythree: '',
        numbercitythree: '',
    });

    const [error, setError]=useState('');

    useEffect(() => {
        // Fetch existing trip data
        axios
            .get(`http://localhost:8000/api/trips/${id}`)
            .then((response) => {
                setTrip({
                    ...response.data,
                    cityone: response.data.cityone || '',
                    numbercityone: response.data.numbercityone || '',
                    citytwo: response.data.citytwo || '',
                    numbercitytwo: response.data.numbercitytwo || '',
                    citythree: response.data.citythree || '',
                    numbercitythree: response.data.numbercitythree || '',
                });
            })
            .catch((error) => {
                console.error('Error fetching trip:', error);
                setError('Failed to load trip data.');
            });
    }, [id]);

    const handleChange=(e:any) => {
        const {name, value}=e.target;
        setTrip((prevTrip) => ({
            ...prevTrip,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setError('');
        
          
        // Update trip data
        axios
            .put(`http://localhost:8000/api/trips/${id}`, trip)
            .then(() => {
                alert('Trip updated successfully!');
                router.push('/allJourneys');
            })
            .catch((error) => {
                console.error('Error updating trip:', error);
                setError('Failed to update trip. Please try again.');
            });
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-5">
                        <InputGroup
                            text="Country"
                            type="text"
                            required="required"
                            onChange={handleChange}
                            valueinput={trip.country}
                        />
                        <InputGroup
                            text="Start Date"
                            type="date"
                             required="required"
                            date="start"
                            onChange={handleChange}
                            valueinput={trip.startDate}
                        />
                        <InputGroup
                            text="End Date"
                            type="date"
                            required="required"
                            date="end"
                            onChange={handleChange}
                            valueinput={trip.endDate}
                        />
                        <InputGroup
                            text="Guide"
                            type="guide"
                            onChange={handleChange}
                            valueinput={trip.guide}
                        />
                        <InputGroup
                            text="Comments"
                            type="textarea"
                            onChange={handleChange}
                            valueinput={trip.comment}
                        />
                    </div>
                    <div className="col-sm-7">
                        <img src="/images/formsimg.png" className="img-fluid" alt="Journey" />
                    </div>
                </div>

                <h2 className="light">Cities</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <InputGroup
                            text="City One"
                            type="text"
                            name="cityone"
                            valueinput={trip.cityone}
                            onChange={handleChange}
                        />
                        <InputGroup
                            text="Length of Stay (days)"
                            type="number"
                            name="numbercityone"
                            valueinput={trip.numbercityone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <InputGroup
                            text="City Two"
                            type="text"
                            name="citytwo"
                            valueinput={trip.citytwo}
                            onChange={handleChange}
                        />
                        <InputGroup
                            text="Length of Stay (days)"
                            type="number"
                            name="numbercitytwo"
                            valueinput={trip.numbercitytwo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <InputGroup
                            text="City Three"
                            type="text"
                            name="citythree"
                            valueinput={trip.citythree}
                            onChange={handleChange}
                        />
                        <InputGroup
                            text="Length of Stay (days)"
                            type="number"
                            name="numbercitythree"
                            valueinput={trip.numbercitythree}
                            onChange={handleChange}
                        />
                    </div>
                    
                </div>

                <Btn text="Save Changes" variant='btn-dark' type="submit"/>
                <Btn text="Don't Save" variant='btn-white' onClick={() => router.push('/allJourneys')}/>
                
            </form>
        </div>
    );
}
