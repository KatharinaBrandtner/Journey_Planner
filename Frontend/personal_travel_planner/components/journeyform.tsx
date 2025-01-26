// Katharina Brandtner
// all cards

"use client"

import React,{useEffect,useState}from"react"
import axiosInstance from"@components/axios"
import TwoCards from"@components/twocards"

export default function AllCards(){
    const[trips,setTrips]=useState<Array<{
        id:number
        country:string
        startDate:string
        endDate:string
        city?:string
        guide:string
        comment:string
    }>>([])
    const[error,setError]=useState<string|null>(null)

    useEffect(()=>{
        const fetchTrips=async()=>{
            try{
                const response=await axiosInstance.get("/trips")
                setTrips(response.data)
            }catch(err:any){
                console.error("Error fetching trips:",err)
                setError(
                    err.response?.status===401
                        ?"Unauthorized! Please log in to view journeys."
                        :"Failed to load trips. Please try again."
                )
            }
        }
        fetchTrips()
    },[])

    const deleteTrip=async(tripId:number)=>{
        if(confirm("Are you sure you want to delete this trip?")){
            try{
                await axiosInstance.delete(`/trips/${tripId}`)
                alert("Journey deleted!")
                setTrips(prevTrips=>prevTrips.filter(trip=>trip.id!==tripId))
            }catch(err){
                console.error("Error deleting journey:",err)
                alert("Failed to delete journey.")
            }
        }
    }

    const groupedTrips=trips.reduce((acc,trip,index)=>{
        if(index%2===0)acc.push([trip])
        else acc[acc.length-1].push(trip)
        return acc
    },[]as Array<Array<typeof trips[0]>>)

    return(
        <div id="trips-container">
            {groupedTrips.map((group,index)=>(
                <TwoCards key={index} trips={group} onDelete={deleteTrip}/>
            ))}
        </div>
    )
}
