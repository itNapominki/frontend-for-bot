import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import Input from "../../Input/Input.jsx";
import SpanError from "../../SpanError/SpanError";

function InputTlgName({name}) {
    const { handleChange, errors } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <Input
        handleChange={handleChangeInput}
        placeholder="Телеграмм (начиная с @)"
        pattern="^@.*"
        minLength="4"
        maxLength="20"
        name={name}
        required
      ></Input>
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputTlgName;
