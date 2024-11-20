// Autor: Katharina Brandtner 
import {Request,Response} from 'express';
import {createNewTrip,readAllTrips,updateOneTrip,deleteONETrip} from '../services/trip_service';


//CRUD
// 1. Create (POST)
export const createController=async(req:Request,res:Response)=>{
  const {country,startDate,endDate}=req.body;

  try{
    const newTrip=await createNewTrip(country,startDate,endDate);
    res.status(201).json(newTrip);
  }catch(error){
    res.status(500).json({error:'Failed to create a new trip'});
  }
};


// 2. Read (GET)
export const readController=async(req:Request,res:Response)=>{
  try{
    const trips=await readAllTrips();
    res.json(trips);
  }catch(error){
    res.status(500).json({error:'Failed to show/read all trips'});
  }
};


// 3. Update (PUT)
export const updateController=async(req:Request,res:Response)=>{
  const {id}=req.params; // params um URL-Parameter id aus URL zu holen/speichern
  const {country,startDate,endDate}=req.body;

  try{
    const updatedTrip=await updateOneTrip(parseInt(id),country,startDate,endDate);
    if(updatedTrip){
      res.json(updatedTrip);
    }
  }catch(error){
    res.status(500).json({error:'Failed to update a specific trip'});
  }
};


// 4. Delete (DELETE)
export const deleteController=async(req:Request,res:Response)=>{
  const {id}=req.params;

  try{
    const success=await deleteONETrip(parseInt(id));
    if(success){
      res.status(204).send();
    }
  }catch(error){
    res.status(500).json({error:'Failed to delete a specific trip'});
  }
};