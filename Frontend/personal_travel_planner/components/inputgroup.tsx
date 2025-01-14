// Katharina Brandtner
// input groups

import React from'react';
import {InputGroupProps}from'@/types/inputgroupprops';
import styles from'../app/page.module.css';

export default function InputGroup({text,type,required,onChange,valueinput,name,placeholder}:InputGroupProps){
  // Pflichtfeld-Sternchen 
  const requiredMark=required?(<span className={`${styles.orange} ${styles.abstandrechts}`}>*</span>):null;

  let inputElement;

  // basierend auf dem Type
  switch(type){
    case'text':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <input type="text" className={`form-control ${styles.formcontrolCustom}`} id={name||text.toLowerCase().replace(' ','-')} name={name||text.toLowerCase().replace(' ','-')} required={!!required} onChange={onChange} value={valueinput}/>
        </>
      );
      break;

    case'number':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <input type="number" className={`form-control ${styles.formcontrolCustom}`} id={name||text.toLowerCase().replace(' ','-')} name={name||text.toLowerCase().replace(' ','-')} required={!!required} onChange={(e)=>{
            if(onChange){
              const value=Math.max(0,parseInt(e.target.value)||0); // Negative Werte verhindern
              onChange({...e,target:{...e.target,value:value.toString()}});
            }
          }} value={valueinput}/>
        </>
      );
      break;

    case'date':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <input placeholder={placeholder||'DD.MM.YYYY'} type="text" className={`form-control ${styles.formcontrolCustom}`} id={name||text.toLowerCase().replace(' ','-')} name={name||text.toLowerCase().replace(' ','-')} required={!!required} onChange={onChange} value={valueinput}/>
        </>
      );
      break;

    case'textarea':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <textarea className={`form-control ${styles.formcontrolCustom}`} value={valueinput as string} rows={1} id={name||text.toLowerCase().replace(' ','-')} name={name||text.toLowerCase().replace(' ','-')} onChange={onChange}></textarea>
        </>
      );
      break;

    case'guide':
      inputElement=(
        <>
          <span className={`input-group-text ${styles.inputgrouptextCustom}`}>{text} {requiredMark}</span>
          <select className={`form-select ${styles.formselectCustom}`} value={valueinput||"no guide yet"} id={name||text.toLowerCase().replace(' ','-')} name={name||text.toLowerCase().replace(' ','-')} onChange={onChange}>
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
    <div className={`input-group mb-3 ${styles.inputgroupCustom}`}>{inputElement}</div>
  );
}
