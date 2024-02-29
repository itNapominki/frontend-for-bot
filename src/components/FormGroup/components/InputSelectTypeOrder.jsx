import { useContext } from "react";
import { FormContext } from "../../../context/FormContext.js";
import InputSelect from "../../Input/InputSelect.jsx";

function InputSelectTypeOrder({ name }) {
  const { handleChange } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  const data = [
    {
      title: "Поминки",
      key: 1,
      value: "wake",
    },
    {
      title: "Банкет",
      key: 2,
      value: "feast",
    },
  ];

  return (
    <>
      <label>Тип заказа</label>
      <InputSelect
        handleChange={handleChangeInput}
        defaultValue={data[0].value}
        title="Тип заказа"
        name={name}
        data={data}
      />
    </>
  );
}

export default InputSelectTypeOrder;
