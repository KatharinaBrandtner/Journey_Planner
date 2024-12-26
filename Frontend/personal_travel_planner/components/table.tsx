// Katharina Brandtner
// whole table 

"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCell from '@/components/tablerow';

export default function TableJourneys() {
    const [trips, setTrips] = useState<Array<{
        id: number;
        country: string;
        startDate: string;
        endDate: string;
        city?: string;
        guide: string;
        comment: string;
    }>>([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/trips')
            .then((response) => setTrips(response.data))
            .catch((error) => console.error('Error fetching trips:', error));
    }, []);

    const deleteTrip = (tripId: number) => {
        if (confirm('Are you sure you want to delete this trip?')) {
            axios
                .delete(`http://localhost:8000/api/trips/${tripId}`)
                .then(() => {
                    alert('Journey deleted!');
                    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
                })
                .catch((error) => console.error('Error deleting journey:', error));
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>City</th>
                    <th>Guide</th>
                    <th>Comment</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {trips.map((trip) => (
                    <TableCell key={trip.id} trip={trip} onDelete={deleteTrip} />
                ))}
            </tbody>
        </table>
    );
}