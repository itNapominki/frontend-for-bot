import { useContext } from "react";
import Input from "../../Input/Input";
import SpanError from "../../SpanError/SpanError";
import { FormContext } from "../../../context/FormContext";

function InputName() {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <Input
        handleChange={handleChangeInput}
        placeholder="Ваше имя"
        required
        minLength="4"
        maxLength="20"
        name="name"
        values={values["name"]}
      ></Input>
      <SpanError message={errors["name"]}></SpanError>
    </>
  );
}

export default InputName;
