// Katharina Brandtner
// journey form
import React from 'react';
import Btn from "../components/button"
import InputGroup from "../components/inputgroup"
 
export default function Journeyform(){
    return (
      <div>
        <form id="tripForm">
        <InputGroup text="Country" type="text" required="required" />
        <InputGroup text="Start Date" type="date" date="start" required="required" />
        <InputGroup text="End Date" type="date" date="end" required="required" />
        <InputGroup text="Guide" type="guide" />
        <InputGroup text="Comments" type="textarea" />
        <Btn text="Save" variant='btn-dark' type="submit"/>
        </form>
    </div>
    );
};


        