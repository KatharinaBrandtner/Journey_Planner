// Autor: Katharina Brandtner 
import express,{Express,Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import tripRoutes from './routes/trip_routes';

//express Einrichten
dotenv.config();
const app:Express=express();
const PORT:number=Number(process.env.PORT)||8084;

//Statische Dateien aus dem public-Verzeichnis laden/anzeigen
app.use(express.static('public'));
app.use(bodyParser.json()); //Fügt Body-Parser hinzu, um JSON-Daten in req.body zu speichern i guess

app.use('/api/trips',tripRoutes); //Leitet Anfragen an /api/trips an die Trip-Routes weiter

//Logger der bei jeder Anfrage ausgeführt wird
app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Weiterleitung an die nächste Middleware oder Route
});

//Server starten
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});