// Katharina Brandtner
// one table row

import React from 'react';
import Btn from "@components/button";
import { OneCardProps } from "../types/onecardprops";
import styles from "../app/page.module.css";

export default function TableCell({ trip, onDelete }: OneCardProps) {
    const handleDelete = (event: React.MouseEvent) => {
        event.preventDefault();  
        if (confirm('Are you sure you want to delete this trip?')) {
            onDelete(trip.id);  
        }
    };
    const renderCities = () => {
        const cities = [(trip as any).cityone, (trip as any).citytwo, (trip as any).citythree].filter(city => city);
        return cities.length > 0 ? cities.join(', ') : 'Not available';
      };

    return (
        <tr>
            <td>{trip.country}</td>
            <td>{trip.startDate}</td>
            <td>{trip.endDate}</td>
            <td>{renderCities()}</td>
            <td>{trip.guide}</td>
            <td>{trip.comment}</td>
            <td><a href={`/viewOneJourney/${trip.id}`} className={styles.link}>See allone</a></td>
            <td><a className={styles.link} href={`/editJourney/${trip.id}`}>Edit</a></td>
            <td><a className={styles.link} href="#" onClick={handleDelete}>Delete</a></td>
        </tr>
    );
}
