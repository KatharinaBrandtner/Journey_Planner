// Katharina Brandtner
// two cards

import React from 'react';
import OneCard from "@components/onecard"
import {TwoCardsProps} from "../types/twocards"

 



export default function TwoCards({trips, onDelete}: TwoCardsProps){
  return (
    <div className={`row mb-5`}>
      {trips.map((trip) => (
        <OneCard key={trip.id} trip={trip} onDelete={onDelete}/>
      ))}
      {trips.length === 1 && <div className="col-sm-6 mb-4"></div>} 
    </div>
  );
}
