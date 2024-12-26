// Katharina Brandtner
// all cards

"use client";

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TwoCards from "@components/twocards"
 

export default function AllCards() {
  const [trips, setTrips] = useState<
    Array<{
      id: number;
      country: string;
      startDate: string;
      endDate: string;
      city?: string;
      guide: string;
      comment: string;
    }>
  >([]);

  useEffect(() => {
    // Daten von der API laden
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

  // Trips in Gruppen von zwei aufteilen
  const groupedTrips = trips.reduce((acc, trip, index) => {
    if (index % 2 === 0) acc.push([trip]);
    else acc[acc.length - 1].push(trip);
    return acc;
  }, [] as Array<Array<typeof trips[0]>>);

  return (
    <div id="trips-container">
      {groupedTrips.map((group, index) => (
        <TwoCards key={index} trips={group} onDelete={deleteTrip} />
      ))}
    </div>
  );
}
