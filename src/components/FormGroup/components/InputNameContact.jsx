import { useContext } from "react";
import { FormContext } from "../../../context/FormContext.js";
import Input from "../../Input/Input.jsx";
import SpanError from "../../SpanError/SpanError.jsx";

function InputNameContact({name}) {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <Input
        handleChange={handleChangeInput}
        placeholder="Контактное лицо"        
        required
        minLength="4"
        maxLength="20"
        name={name}
        values={values[name]}
      ></Input>
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputNameContact;
