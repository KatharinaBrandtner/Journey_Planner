// Autor: Katharina Brandtner 
import {Trip} from '../models/trip_interface';

let trips_list:Trip[]=[];



//create
export const createNewTrip=async(country:string,startDate:string,endDate:string,guide:string,comment:string):Promise<Trip>=>{
  try{
      const newTrip:Trip={
      id:trips_list.length+1,
      country,
      startDate,
      endDate,
      guide,
      comment
    };
    trips_list.push(newTrip); 
    return newTrip;
  }catch(error){
    console.error('Error in createNewTrip:', error);
    throw error; 
  }
};



// read
export const readALLTrips=async():Promise<Trip[]>=>{
  return trips_list; 
};
export const readONETrip=async(id:number):Promise<Trip|null>=>{ 
  const trip=trips_list.find(trip=>trip.id===id); 
  return trip||null; // Gibt die Reise zurück oder null, wenn sie nicht gefunden wurde 
};


// update
export const updateONETrip=async(id:number,country:string,startDate:string,endDate:string,guide?:string, comment?:string):Promise<Trip|null>=>{
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
  if (guide) {
    trips_list[tripIndex].guide=guide;
  }
  if (comment) {
    trips_list[tripIndex].comment=comment;
  }
  return trips_list[tripIndex];
};



// delete
export const deleteONETrip=async(id:number):Promise<boolean>=>{
  const tripIndex=trips_list.findIndex((trip)=>trip.id===id); 
  if(tripIndex===-1){
    return false; // Trip nicht gefunden
  }
  trips_list.splice(tripIndex,1); // Trip löschen
  return true;
};