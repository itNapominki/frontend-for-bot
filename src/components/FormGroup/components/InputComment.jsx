import { useContext } from "react";
import SpanError from "../../SpanError/SpanError.jsx";
import { FormContext } from "../../../context/FormContext.js";
import InputTextArea from "../../Input/InputTextArea.jsx";

function InputComment({ name }) {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <InputTextArea
        handleChange={handleChangeInput}
        placeholder="Комментарий"
        name={name}
      />
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InputComment;
