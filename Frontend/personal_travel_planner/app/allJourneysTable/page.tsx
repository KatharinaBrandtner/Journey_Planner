// Katharina Brandtner
// Table view

import React from 'react';
import Navbar from "@components/navbar";
import Footer from '@components/footer';
import Heading from '@components/heading';
import TableJourneys from '@components/table';
import styles from "../page.module.css";

export default function Page() {
    return (
        <>
             <Navbar active='allJourneys'/>
            <br />
            <br />
            <br />

            <div className='container mb-5'>
                <Heading text="All" variant='light' />
                <Heading text="Journeys" variant='bold' />
                <a href='/allJourneys' className={styles.link}>View as card</a>
            </div>
            <div className="container" id="trips-container">
                <TableJourneys/>
            </div>

            <Footer />
        </>
    );
};
