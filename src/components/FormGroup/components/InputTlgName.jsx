import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import Input from "../../Input/Input";
import SpanError from "../../SpanError/SpanError";

function InputTlgName() {
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
        name="tlgName"
        required
      ></Input>
      <SpanError message={errors["tlgName"]}></SpanError>
    </>
  );
}

export default InputTlgName;
