import styles from "./InputOrganization.module.css";
import React, { useContext, useState } from 'react';
import SpanError from "../../SpanError/SpanError";
import { FormContext } from "../../../context/FormContext";

function InputOrganization() {
  const { handleChange, errors } = useContext(FormContext);
  const [selectedValue, setSelectedValue] = useState('agent');

  const handleChangeInput = (event) => {
    handleChange(event);
    setSelectedValue(event.target.value);
  };

  return (<><fieldset className={styles.wrapper}>
      <legend>Выберите организацию:</legend>

      <div>
        <input 
          type="radio" 
          id="agent" 
          name="organization" 
          value="agent" 
          checked={selectedValue === 'agent'} 
          onChange={handleChangeInput}
        />{" "}
        <label htmlFor="agent">Агент</label>
      </div>

      <div>
        <input 
          type="radio" 
          id="employee" 
          name="organization" 
          value="employee" 
          checked={selectedValue === 'employee'} 
          onChange={handleChangeInput}
        />{" "}
        <label htmlFor="employee">Работник СПЗ</label>
      </div>
      
    </fieldset>
    <SpanError message={errors["employee"]}></SpanError></>
    
  );
}

export default InputOrganization;

