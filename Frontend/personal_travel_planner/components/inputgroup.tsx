// Katharina Brandtner
// Flexible InputGroup-Komponente

import React from 'react';
import { InputGroupProps } from '@/types/inputgroupprops';
import styles from '../app/page.module.css';

export default function InputGroup({text, type, date, required, onChange, valueinput, name}: InputGroupProps){
  const requiredMark=required? (
    <span className={`${styles.orange} ${styles.abstandrechts}`}>*</span>
  ): null
  
  let inputElement;
  switch (type){
    case 'text':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>
            {text} {requiredMark}
          </span>
          <input type="text" className={`form-control ${styles.formcontrolCustom}`} id={name || text.toLowerCase().replace(' ', '-')} name={name || text.toLowerCase().replace(' ', '-')} required={!!required} onChange={onChange} value={valueinput} />
        </>
      );
      break;

    case 'number':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>
            {text} {requiredMark}
          </span>
          <input type="number" className={`form-control ${styles.formcontrolCustom}`} id={name || text.toLowerCase().replace(' ', '-')} name={name || text.toLowerCase().replace(' ', '-')} required={!!required} onChange={onChange} value={valueinput} />
        </>
      );
      break;

    case 'date':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <input type="date" value={valueinput instanceof Date ? valueinput.toISOString().split('T')[0] : valueinput} className={`form-control ${styles.formcontrolCustom}`} id={`${date}-date`} name={`${date}-date`} required={!!required} onChange={onChange} />
        </>
      );
      break;

    case 'textarea':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <textarea className={`form-control ${styles.formcontrolCustom}`} value={valueinput as string} rows={1} id="comment" name="comment" onChange={onChange}></textarea>
        </>
      );
      break;

    case 'guide':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <select className={`form-select ${styles.formselectCustom}`} value={valueinput as string} id="guide" name="guide" onChange={onChange}>
            <option value="no guide yet">no guide yet</option>
            <option value="Luca Esposito (HUN)">Luca Esposito (HUN)</option>
            <option value="Elias Constantinou (IT)">Elias Constantinou (IT)</option>
            <option value="Massimo Rossi (ESP)">Massimo Rossi (ESP)</option>
            <option value="Mark Haller (GER)">Mark Haller (GER)</option>
          </select> 
        </>
      );
      break;

    default:
      inputElement=null;
  }

  return(
      <div className={`input-group mb-3 ${styles.inputgroupCustom}`}>
        {inputElement}
      </div>
  );
}
