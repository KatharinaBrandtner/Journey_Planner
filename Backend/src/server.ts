// Autor: Katharina Brandtner 
import express,{Express,Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import tripRoutes from './routes/trip_routes';
import authRoutes from './routes/auth_routes';

import cors from 'cors';
import mongoose from 'mongoose';

//express Einrichten
dotenv.config();
const app:Express=express();
const PORT:number=Number(process.env.PORT)||8084;

// Middleware
app.use(
    cors({
      origin: "http://localhost:3000", // Erlaube das Frontend
      methods: "GET,POST,PUT,DELETE", // Erlaube diese Methoden
      allowedHeaders: "Content-Type,Authorization", // Erlaube Content-Type und Authorization
      credentials: true, // Erlaube Cookies und Auth-Daten
    })
  );
//Statische Dateien aus dem public-Verzeichnis laden/anzeigen
//app.use(express.static('public'));
app.use(bodyParser.json()); //Fügt Body-Parser hinzu, um JSON-Daten in req.body zu speichern i guess

//Logger der bei jeder Anfrage ausgeführt wird
app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Weiterleitung an die nächste Middleware oder Route
});

// Routen
// app.use('/api/trips',tripRoutes); //Leitet Anfragen an /api/trips an die Trip-Routes weiter
app.use('/api',tripRoutes); //Leitet Anfragen an /api/trips an die Trip-Routes weiter
app.use('/api/auth', authRoutes); // zum login/registrieren
// Error-Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', message: err.message });
});

//Server starten
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});


// mongo db
mongoose.connect(process.env.MONGO_URI || '').then(()=>{ //hab die Mongo_URI in meiner .env die in gitignore ist, ich hoffe das klappt wenn Sie ihre eigene Datenbank anhängen?
    console.log('MongoDB connected!');
}).catch((error:any)=>{
    console.log(error);
});