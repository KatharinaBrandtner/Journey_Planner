// Katharina Brandtner
// home

import React from 'react';

import Navbar from "@components/navbar"
import Footer from '@components/footer';
import Header from '@components/header';
import About from '@components/about';
import Number from '@components/number';
import Heading from '@components/heading';
import Journeyform from '@components/journeyform';





export default function Page(){
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Number/>
      
      <div className='container'>
        <Heading text="Add New Journey" variant='light'/>
        <div className="row">
          <div className="col-sm-5">
            <Journeyform/>
          </div>
          <div className="col-sm-7">
            <img src="images/formsimg.png" className="img-fluid" alt="Sydney"/>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};
