// // Autor: Katharina Brandtner 
import {createController,readController,updateController,deleteController,readOneController} from '../controllers/trip_controller';

import express from "express";
import { verifyToken } from "../middlewares/auth_middleware";

const router = express.Router();

router.post("/trips", verifyToken, createController);
router.get("/trips", verifyToken, readController);
router.get("/trips/:id", verifyToken, readOneController);
router.put("/trips/:id", verifyToken, updateController);
router.delete("/trips/:id", verifyToken, deleteController);

export default router;