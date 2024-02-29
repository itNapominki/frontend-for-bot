import { useContext } from "react";
import SpanError from "../../SpanError/SpanError.jsx";
import { FormContext } from "../../../context/FormContext.js";
import Input from "../../Input/Input.jsx";


function InputDateWake({name}) {
  const { handleChange, errors } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
    <label>Дата поминок</label>
      <Input
        handleChange={handleChangeInput}           
        required
        type="date"
        name={name}        
      ></Input>
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputDateWake;
