// Katharina Brandtner
// heading


import React from 'react';
import { HeadingStyle } from '@/types/headingprops';
import styles from "../app/page.module.css";

export default function Heading({text, variant='light'}: HeadingStyle){
    return (
        <h1 className={`${styles[variant]}`}>{text}</h1>
    );
}
