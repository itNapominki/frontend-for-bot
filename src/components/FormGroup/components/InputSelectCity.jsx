import { useContext } from "react";
import { FormContext } from "../../../context/FormContext.js";
import InputSelect from "../../Input/InputSelect.jsx";

function InputSelectCity({ name }) {
  const { handleChange } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  const data = [
    {
      title: "Москва",
      key: 1,
      value: "Москва",
    },
    {
      title: "МО",
      key: 2,
      value: "МО",
    },
    {
      title: "СПб",
      key: 3,
      value: "СПб",
    },
    {
      title: "ЛО",
      key: 4,
      value: "ЛО",
    },
    {
      title: "НН",
      key: 5,
      value: "НН",
    },
  ];

  return (
    <>
      <label>Город</label>
      <InputSelect
        handleChange={handleChangeInput}
        name={name}
        defaultValue={data[0].value}
        title="Выберите город"
        data={data}
      />
    </>
  );
}

export default InputSelectCity;
