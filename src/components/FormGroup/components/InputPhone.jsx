import { useContext } from "react";
import Input from "../../Input/Input.jsx";
import SpanError from "../../SpanError/SpanError";
import { FormContext } from "../../../context/FormContext";

function InputPhone({name}) {
    const { handleChange, errors } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <Input
        placeholder="Телефон 89013337722"
        handleChange={handleChangeInput}
        name={name}
        type="tel"
        pattern="[0-9]{11}"
        required
      ></Input>
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputPhone;
