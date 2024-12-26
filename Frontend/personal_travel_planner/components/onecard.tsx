// Katharina Brandtner
// one card

import React from 'react';
import styles from "../app/page.module.css";
import Btn from "@components/button"
import {OneCardProps} from "../types/onecardprops"




export default function OneCard({trip, onDelete}: OneCardProps){
  const getCountryImage=(country: string)=>{
    const countryImages: {[key: string]: string}={
      germany: 'germany.png',
      hungary: 'hungary.png',
      spain: 'spain.png',
      italy: 'italy.png',
      greece: 'greece.png',
    };
    return `images/${countryImages[country.toLowerCase()] || 'country.png'}`;
  };
  
  const renderCities = () => {
    const cities = [(trip as any).cityone, (trip as any).citytwo, (trip as any).citythree].filter(city => city);
    return cities.length > 0 ? cities.join(', ') : 'Not available';
  };

  return (
    <div className="col-sm-6 mb-4">
      <div className={`card ${styles.card}`}>
        <img className={`card-img-top img-fluid ${styles.cardimgtopCustom}`} src={getCountryImage(trip.country)} alt={trip.country}/>
        <div className={`card-body ${styles.cardbodyCustom}`}>
          <h4 className={`card-title ${styles.cardtitleCustom} ${styles.light}`}>{trip.country}</h4>
          <p className="card-text">
            <span className={`${styles.bold}`}>Startdate:</span> {trip.startDate}<br/>
            <span className={`${styles.bold}`}>Enddate:</span> {trip.endDate}<br/>
            <span className={`${styles.bold}`}>Citys:</span> {renderCities()}<br/>
            <span className={`${styles.bold}`}>Tourguide:</span> {trip.guide}<br/>
            <span className={`${styles.bold}`}>Comment:</span> {trip.comment}<br/>
            <a href={`/viewOneJourney/${trip.id}`} className={styles.link}>See allone</a>
          </p>
          <a href={`/editJourney/${trip.id}`}> 
          
            <Btn text="edit" variant='btn-dark'/>
          </a>
          <a href=''>
            <Btn text="delete" variant='btn-white' onClick={() => onDelete(trip.id)}/>
          </a>
        </div>
      </div>
    </div>
  );
}
