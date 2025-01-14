"use client";

// Katharina Brandtner
// Journey Form: Formular zur Erstellung einer Reise

import React,{useState}from'react';
import Btn from'../components/button';
import InputGroup from'../components/inputgroup';
import axios from'axios';

export default function Journeyform(){
    // State für Formulardaten
    const[formData,setFormData]=useState({
        country:'',
        startDate:'',
        endDate:'',
        guide:'',
        comment:'',
    });

    // Ändern eines Feldes im Formular
    const handleChange=(name:string,value:string)=>{
        setFormData(prev=>({
            ...prev,
            [name]:value,
        }));
    };

    // Absenden des Formulars
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();

        // Überprüfen, ob Startdatum vor Enddatum liegt
        if(!isStartDateBeforeEndDate(formData.startDate,formData.endDate)){
            return; // Validierung fehlgeschlagen
        }

        try{
            const response=await axios.post(
                'http://localhost:8000/api/trips',
                {
                    ...formData,
                    guide:formData.guide||'no guide yet', 
                    comment:formData.comment||'no comment', 
                },
                {
                    headers:{
                        'Content-Type':'application/json',
                    },
                }
            );

            alert('Journey created successfully!');
            console.log('Journey created:',response.data);

            // Formular zurücksetzen
            setFormData({
                country:'',
                startDate:'',
                endDate:'',
                guide:'',
                comment:'',
            });
        }catch(error){
            console.error('Error creating journey:',error);
            alert('Failed to create journey!');
        }
    };

    return(
        <div>
            <form id="tripForm"onSubmit={handleSubmit}>
                <InputGroup text="Country"type="text"required="required"onChange={(e)=>handleChange('country',e.target.value)}/>
                <InputGroup placeholder="DD.MM.YYYY"text="Start Date"type="text"required="required"onChange={(e)=>handleChange('startDate',e.target.value)}/>
                <InputGroup placeholder="DD.MM.YYYY"text="End Date"type="text"required="required"onChange={(e)=>handleChange('endDate',e.target.value)}/>
                <InputGroup text="Guide"type="guide"onChange={(e)=>handleChange('guide',e.target.value)}valueinput={formData.guide}/>
                <InputGroup text="Comments"type="textarea"onChange={(e)=>handleChange('comment',e.target.value)}/>
                <Btn text="Save"variant="btn-dark"type="submit"/>
            </form>
        </div>
    );
}

//Datumswerte das korrekte Format DD.MM.YYYY hatte davor ja input feld date aber da gabs dann bei mongodb diese dumme formatierung und das hat mich zu viele nerven gekostet tbh
function isStartDateBeforeEndDate(startDate:string,endDate:string):boolean{
    const dateRegex=/^\d{2}\.\d{2}\.\d{4}$/;

    // Logik für Datum eingabe
    if(!dateRegex.test(startDate)){alert('Start date must be in the format DD.MM.YYYY.');return false;}
    if(!dateRegex.test(endDate)){alert('End date must be in the format DD.MM.YYYY.');return false;}

    const[startDay,startMonth,startYear]=startDate.split('.').map(Number);
    const[endDay,endMonth,endYear]=endDate.split('.').map(Number);

    // Gültigkeitsprüfung von Tagen und Monaten
    if(startDay<1||startDay>31||startMonth<1||startMonth>12){alert('Start date must be a valid date.');return false;}
    if(endDay<1||endDay>31||endMonth<1||endMonth>12){alert('End date must be a valid date.');return false;}

    const start=new Date(startYear,startMonth-1,startDay);
    const end=new Date(endYear,endMonth-1,endDay);

    if(start>end){alert('Start date must be before the end date.');return false;}

    return true;
}
