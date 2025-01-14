// Autor: Katharina Brandtner
import mongoose from 'mongoose';

export interface ITrip { 
    country: string;
    startDate: string;
    endDate: string;
    guide?: string;
    comment?: string;
    cityone?: string;
    numbercityone?: number;
    citytwo?: string;
    numbercitytwo?: number;
    citythree?: string;
    numbercitythree?: number;

    _id: string; //  MongoDB-Feld
    id?: string; // Manuelles `id`-Feld
}
const TripSchema=new mongoose.Schema<ITrip>({
    country:{type:String,required:true},
    startDate:{type:String,required:true},
    endDate:{type:String,required:true},
    guide:{type:String,default:'no guide yet'},
    comment:{type:String,default:'no comment'},
    cityone:{type:String,default:''},
    numbercityone:{type:Number,default:0},
    citytwo:{type:String,default:''},
    numbercitytwo:{type:Number,default:0},
    citythree:{type:String,default:''},
    numbercitythree:{type:Number,default:0}
});

export default mongoose.model<ITrip>("Trip", TripSchema);

//const Trip = model<ITrip>("Trip", TripSchema)
