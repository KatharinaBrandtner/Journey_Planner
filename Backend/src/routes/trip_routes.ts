// Autor: Katharina Brandtner 
import {Router} from 'express'; 
import {createController,readController,updateController,deleteController} from '../controllers/trip_controller';

const router=Router();

// Routen definieren
router.post('/',createController);
router.get('/',readController); ///erarbeitet GET-Anfragen auf /api/trips und ruft die getTrips-Funktion im Controller auf
router.put('/:id',updateController);
router.delete('/:id',deleteController);

export default router; //exportieren des Routers, damit er in der server.ts verwendet werden kann, um die Anfragen zu verbinden