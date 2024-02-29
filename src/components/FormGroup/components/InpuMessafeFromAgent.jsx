import { useContext } from "react";
import SpanError from "../../SpanError/SpanError.jsx";
import { FormContext } from "../../../context/FormContext.js";
import InputTextArea from "../../Input/InputTextArea.jsx";

function InpuMessafeFromAgent({ name }) {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  return (
    <>
      <InputTextArea
        handleChange={handleChangeInput}
        placeholder="Укажите номер по какому заказу хотете написать агенту"
        required
        name={name}
      />
      <SpanError message={errors[name]}></SpanError>
    </>
  );
}

export default InpuMessafeFromAgent;
