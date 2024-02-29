import { useContext } from "react";
import SpanError from "../../SpanError/SpanError.jsx";
import { FormContext } from "../../../context/FormContext.js";
import Input from "../../Input/Input.jsx";

function InputFIO({name}) {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <Input
        handleChange={handleChangeInput}
        placeholder="ФИО усопшего"       
        required
        minLength="4"
        maxLength="40"
        name={name}
        values={values[name]}
      ></Input>
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputFIO;
