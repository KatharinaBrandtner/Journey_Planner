// Autor: Katharina Brandtner
import {Request,Response} from 'express';
import {createNewTrip,readALLTrips,updateONETrip,deleteONETrip,readONETrip} from '../services/trip_service';
import validateTripData from '../controllers/date_controller'

//CRUD
// 1. Create (POST)
export const createController = async (req: Request, res: Response): Promise<void> => {
    const errors = validateTripData(req.body);

    if (errors.length > 0) {
        res.status(400).json({ errors }); // 400 = Bad Request
        return;
    }

    try {
        const trip = await createNewTrip(req.body);
        res.status(201).json(trip); // 201 = Created
    } catch (error) {
        res.status(500).json({ error: 'Failed to create trip' });
    }
};

// 2. Read (GET)
//all
export const readController=async(req:Request,res:Response):Promise<void>=>{
  try{
      const trips=await readALLTrips();
      res.status(200).json(trips);
  }catch(error){
      res.status(500).json({error:'Failed to fetch trips'});
  }
};
// one
export const readOneController=async(req:Request,res:Response):Promise<void>=>{
  const{id}=req.params;

  if(!id||id.length!==24){
      res.status(400).json({error:'Invalid or missing trip ID'});
      return;
  }

  try{
      const trip=await readONETrip(id);
      if(!trip){
          res.status(404).json({error:'Trip not found'});
      }else{
          res.status(200).json(trip);
      }
  }catch(error){
      res.status(500).json({error:'Failed to fetch trip'});
  }
};

// 3. Update (PUT)
export const updateController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const errors = validateTripData(req.body);

    if (errors.length > 0) {
        res.status(400).json({ errors }); // 400 = Bad Request
        return;
    }

    try {
        const updatedTrip = await updateONETrip(id, req.body);
        if (!updatedTrip) {
            res.status(404).json({ error: 'Trip not found' });
        } else {
            res.status(200).json(updatedTrip);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update trip' });
    }
};


// 4. Delete (DELETE)
export const deleteController=async(req:Request,res:Response):Promise<void>=>{
  const{id}=req.params;
  try{
      const deleted=await deleteONETrip(id);
      if(!deleted){
          res.status(404).json({error:'Trip not found'});
      }else{
          res.status(204).send();
      }
  }catch(error){
      res.status(500).json({error:'Failed to delete trip'});
  }
};