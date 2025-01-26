"use client";

// Katharina Brandtner
// Edit form
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/components/axios"; 
import InputGroup from "@/components/inputgroup";
import Btn from "@/components/button";

export default function EditTripForm({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();

  const [trip, setTrip] = useState({
    country: "",
    startDate: "",
    endDate: "",
    guide: "",
    comment: "",
    cityone: "",
    numbercityone: "",
    citytwo: "",
    numbercitytwo: "",
    citythree: "",
    numbercitythree: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/trips/${id}`) 
      .then((response) => {
        setTrip({
          ...response.data,
          cityone: response.data.cityone || "",
          numbercityone: response.data.numbercityone || "",
          citytwo: response.data.citytwo || "",
          numbercitytwo: response.data.numbercitytwo || "",
          citythree: response.data.citythree || "",
          numbercitythree: response.data.numbercitythree || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching trip:", error);
        if (error.response?.status === 401) {
          setError("Unauthorized! Please log in to edit this journey.");
        } else {
          setError("Failed to load trip data.");
        }
      });
  }, [id]);

  const handleChange = (name: string, value: string) => {
    setTrip((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateTrip(trip);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // Trip-Daten aktualisieren
    axiosInstance
      .put(`/trips/${id}`, trip) 
      .then(() => {
        alert("Trip updated successfully!");
        router.push("/allJourneys");
      })
      .catch((error) => {
        console.error("Error updating trip:", error);
        if (error.response?.status === 401) {
          setError("Unauthorized! Please log in to edit this journey.");
        } else {
          setError("Failed to update trip. Please try again.");
        }
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          <div className="col-sm-5">
            <InputGroup
              text="Country"
              type="text"
              required="required"
              name="country"
              onChange={(e) => handleChange("country", e.target.value)}
              valueinput={trip.country}
            />
            <InputGroup
              text="Start Date"
              type="text"
              required="required"
              placeholder="DD.MM.YYYY"
              name="startDate"
              onChange={(e) => handleChange("startDate", e.target.value)}
              valueinput={trip.startDate}
            />
            <InputGroup
              text="End Date"
              type="text"
              required="required"
              placeholder="DD.MM.YYYY"
              name="endDate"
              onChange={(e) => handleChange("endDate", e.target.value)}
              valueinput={trip.endDate}
            />
            <InputGroup
              text="Guide"
              type="guide"
              name="guide"
              onChange={(e) => handleChange("guide", e.target.value)}
              valueinput={trip.guide}
            />
            <InputGroup
              text="Comments"
              type="textarea"
              name="comment"
              onChange={(e) => handleChange("comment", e.target.value)}
              valueinput={trip.comment}
            />
          </div>
          <div className="col-sm-7">
            <img
              src="/images/formsimg.png"
              className="img-fluid"
              alt="Journey"
            />
          </div>
        </div>

        <h2 className="light">Cities</h2>
        <div className="row">
          <div className="col-sm-4">
            <InputGroup
              text="City One"
              type="text"
              name="cityone"
              valueinput={trip.cityone}
              onChange={(e) => handleChange("cityone", e.target.value)}
            />
            <InputGroup
              text="Length of Stay (days)"
              type="number"
              name="numbercityone"
              valueinput={trip.numbercityone}
              onChange={(e) => handleChange("numbercityone", e.target.value)}
            />
          </div>
          <div className="col-sm-4">
            <InputGroup
              text="City Two"
              type="text"
              name="citytwo"
              valueinput={trip.citytwo}
              onChange={(e) => handleChange("citytwo", e.target.value)}
            />
            <InputGroup
              text="Length of Stay (days)"
              type="number"
              name="numbercitytwo"
              valueinput={trip.numbercitytwo}
              onChange={(e) => handleChange("numbercitytwo", e.target.value)}
            />
          </div>
          <div className="col-sm-4">
            <InputGroup
              text="City Three"
              type="text"
              name="citythree"
              valueinput={trip.citythree}
              onChange={(e) => handleChange("citythree", e.target.value)}
            />
            <InputGroup
              text="Length of Stay (days)"
              type="number"
              name="numbercitythree"
              valueinput={trip.numbercitythree}
              onChange={(e) => handleChange("numbercitythree", e.target.value)}
            />
          </div>
        </div>
        <Btn text="Save Changes" variant="btn-dark" type="submit" />
        <Btn
          text="Don't Save"
          variant="btn-white"
          onClick={() => router.push("/allJourneys")}
        />
      </form>
    </div>
  );
}

function validateTrip(trip:any):string[]{
    const errors:string[]=[];
    const{startDate,endDate,numbercityone,numbercitytwo,numbercitythree}=trip;

    // Logik für Datum eingabe
    const dateRegex=/^\d{2}\.\d{2}\.\d{4}$/;
    if(!dateRegex.test(startDate)){errors.push('Start date must be in the format DD.MM.YYYY.');}
    if(!dateRegex.test(endDate)){errors.push('End date must be in the format DD.MM.YYYY.');}

     const[startDay,startMonth,startYear]=startDate.split('.').map(Number);
     const[endDay,endMonth,endYear]=endDate.split('.').map(Number);

     if(startDay<1||startDay>31||startMonth<1||startMonth>12){errors.push('Start date must be a valid date.');}
     if(endDay<1||endDay>31||endMonth<1||endMonth>12){errors.push('End date must be a valid date.');}

     const start=new Date(startYear,startMonth-1,startDay);
     const end=new Date(endYear,endMonth-1,endDay);

     if(start>end){errors.push('Start date must be before the end date.');}

     // Logik für Gesamtdauer bei Citys 
     const totalTripDays=Math.ceil((end.getTime()-start.getTime())/(1000*60*60*24))+1; // +1 für den Starttag
     const totalCityDays=[numbercityone,numbercitytwo,numbercitythree]
         .map((days)=>parseInt(days,10)||0)
         .reduce((acc,curr)=>acc+curr,0);

     if(totalCityDays>totalTripDays){errors.push(`The total number of days (${totalCityDays}) exceeds the trip duration (${totalTripDays} days). Please adjust the city stays.`);}

     return errors;
}
