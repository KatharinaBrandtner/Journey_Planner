"use client";

// Katharina Brandtner
// journey form
import React, { useState } from 'react';
import Btn from "../components/button"
import InputGroup from "../components/inputgroup"

import axios from 'axios';

export default function Journeyform(){
  const [formData, setFormData] = useState({
    country: '',
    startDate: '',
    endDate: '',
    guide: '',
    comment: '',
  });
  
  const handleChange = (name: string, value: string) => {
    console.log('Input changed:', name, value); 
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form data being sent:', formData); 

    if (formData.startDate > formData.endDate) {
      alert('Start date has to be before the end date');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/trips', {
        ...formData,
        guide: formData.guide || 'no guide yet',
        comment: formData.comment || 'no comment',
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Journey created successfully!');
      console.log('Journey created:', response.data);

      // Formular zrücksetzen
      setFormData({
        country: '',
        startDate: '',
        endDate: '',
        guide: '',
        comment: '',
      });
      window.location.reload();
    } catch (error) {
      console.error('Error creating journey:', error);
      alert('Failed to create journey!');
    }
  };

    return (
      <div>
        <form id="tripForm" onSubmit={handleSubmit}>
        <InputGroup text="Country" type="text" required="required"  onChange={(e) => handleChange('country', e.target.value)}/>
        <InputGroup text="Start Date" type="date" date="start" required="required" onChange={(e) => handleChange('startDate', e.target.value)}/>
        <InputGroup text="End Date" type="date" date="end" required="required" onChange={(e) => handleChange('endDate', e.target.value)}/>
        <InputGroup text="Guide" type="guide" onChange={(e) => handleChange('guide', e.target.value)}/>
        <InputGroup text="Comments" type="textarea" onChange={(e) => handleChange('comment', e.target.value)}/>
        <Btn text="Save" variant='btn-dark' type="submit"/>
        </form>
    </div>
    );
};