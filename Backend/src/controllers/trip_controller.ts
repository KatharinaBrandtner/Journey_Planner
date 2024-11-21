// Autor: Katharina Brandtner 
import {Request,Response} from 'express';
import {createNewTrip,readAllTrips,updateOneTrip,deleteONETrip} from '../services/trip_service';


//CRUD
// 1. Create (POST)
export const createController=async(req:Request,res:Response):Promise<any>=>{
  const {country,startDate,endDate}=req.body;

  if (!country||!startDate||!endDate) {
    return res.status(400).json({error: 'Required fields: Country, startDate and endDate'});
  }

  try{
    const newTrip=await createNewTrip(country,startDate,endDate);
    return res.status(201).json(newTrip);
  }catch(error){
    return res.status(500).json({error: 'Failed to create a new trip'});
  }
};


// 2. Read (GET)
export const readController=async(req:Request,res:Response):Promise<any>=>{
  try{
    const trips=await readAllTrips();
    res.json(trips);
    return
  }catch(error){
    return res.status(500).json({error: 'Failed to show/read all trips'});
  }
};


// 3. Update (PUT)
export const updateController=async(req:Request,res:Response):Promise<any>=>{
  const {id}=req.params; // params um URL-Parameter id aus URL zu holen/speichern
  const {country,startDate,endDate}=req.body;

  const tripId = parseInt(id); //schauen ob id gültige zahö
  if (isNaN(tripId)) {
    return res.status(400).json({error: 'Not the right ID format'});
  }

  try {
    const updatedTrip=await updateOneTrip(parseInt(id),country,startDate,endDate);
    if (!updatedTrip) {
      return res.status(404).json({error: 'Couldnt found Trip with id'});
    }
    res.json(updatedTrip);
    return
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update a specific trip'});
  }
};


// 4. Delete (DELETE)
export const deleteController=async(req:Request,res:Response):Promise<any>=>{
  const {id}=req.params;

  const tripId = parseInt(id);
  if (isNaN(tripId)) {
    return res.status(400).json({error: 'Not the right ID format'});
  }

  try {
    const success=await deleteONETrip(tripId);
    if (!success) {
      return res.status(404).json({error: 'Couldnt find Trip with id'});
    }
    res.status(204).send();
    return
  }catch(error) {
    return res.status(500).json({ error: 'Failed to delete a specific trip'});
  }
};