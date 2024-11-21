// Autor: Katharina Brandtner 
import {Trip} from '../models/trip_interface';

let trips_list:Trip[]=[];

export const createNewTrip=async(country:string,startDate:string,endDate:string):Promise<Trip>=>{
  try{
      const newTrip:Trip={
      id:trips_list.length+1,
      country,
      startDate,
      endDate,
    };
    trips_list.push(newTrip); 
    return newTrip;
  }catch(error){
    console.error('Error in createNewTrip:', error);
    throw error; 
  }
};

export const readAllTrips=async():Promise<Trip[]>=>{
  return trips_list; 
};

export const updateOneTrip=async(id:number,country:string,startDate:string,endDate:string):Promise<Trip|null>=>{
  const tripIndex=trips_list.findIndex((trip)=>trip.id===id); //weil js wenn kein element gefunden wird -1 ausgibt
  if(tripIndex===-1){ // nicht das "-1" also string zurück gegeben wird dann wäre es mit == richtig
    return null; // Trip nicht gefunden
  }
  if (country) {
    trips_list[tripIndex].country=country;
  }
  if (startDate) {
    trips_list[tripIndex].startDate=startDate;
  }
  if (endDate) {
    trips_list[tripIndex].endDate=endDate;
  }
  return trips_list[tripIndex];
};

export const deleteONETrip=async(id:number):Promise<boolean>=>{
  const tripIndex=trips_list.findIndex((trip)=>trip.id===id); 
  if(tripIndex===-1){
    return false; // Trip nicht gefunden
  }
  trips_list.splice(tripIndex,1); // Trip löschen
  return true;
};