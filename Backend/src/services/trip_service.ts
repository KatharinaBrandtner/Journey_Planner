// Autor: Katharina Brandtner

import Trip,{ITrip}from'../models/trip_model';
import validateTripData from '../controllers/date_controller'

// CREATE
export const createNewTrip=async(data:Partial<ITrip>):Promise<ITrip>=>{
    try{
        const trip=new Trip(data);
        return await trip.save(); // Speichert den neuen Trip in der MongoDB
    }catch(error){
        console.error('Error creating trip:',error);
        throw new Error('Failed to create trip');
    }
};

// READ ALL
export const readALLTrips=async():Promise<ITrip[]>=>{
  const trips=await Trip.find().lean(); // laut online: Die lean()-Methode wird verwendet, um einfache JavaScript-Objekte statt vollständiger Mongoose-Dokumente zurückzugeben, was effizienter ist.
  return trips.map(trip=>({
      ...trip,
      id:trip._id.toString(), //Fügt das id-Feld hinzu
  }));
};

// READ ONE
export const readONETrip=async(id:string):Promise<ITrip|null>=>{
  if(!id||id.length!==24){ // weil mongo id immer 24 zeichen
      throw new Error('Invalid or missing ID');
  }

  const trip=await Trip.findById(id).lean(); 
  if(trip){
    trip.id=trip._id.toString(); 
  }
  return trip;
};

// UPDATE
export const updateONETrip=async(id:string,data:Partial<ITrip>):Promise<ITrip|null>=>{
    try{
        return await Trip.findByIdAndUpdate(id,data,{new:true}); // Trip-Daten aktualisieren
    }catch(error){
        console.error('Error updating trip:',error);
        throw new Error('Failed to update trip');
    }
};

// DELETE
export const deleteONETrip=async(id:string):Promise<boolean>=>{
    try{
        const result=await Trip.findByIdAndDelete(id); // Trip löschen
        return!!result; // Gibt true zurück, wenn Trip gelöscht wurde
    }catch(error){
        console.error('Error deleting trip:',error);
        throw new Error('Failed to delete trip');
    }
};
