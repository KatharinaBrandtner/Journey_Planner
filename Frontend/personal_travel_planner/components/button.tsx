// Katharina Brandtner
// button


import React from 'react';
import { ButtonProps } from '@/types/btnprops';
import styles from "../app/page.module.css";

export default function Btn({text, type = 'button', variant='btn-white', onClick,}: ButtonProps) {
  return (
    <button type={type} className={`btn btn-lg ${styles[variant]}`} onClick={onClick}>
      {text} <i className="fa-solid fa-arrow-right-long"></i>
    </button>
  );
}
