import { useContext } from "react";
import { FormContext } from "../../../context/FormContext.js";
import InputSelect from "../../Input/InputSelect.jsx";

function InputOrganization({ name }) {
  console.log("render InputOrganization");
  const { handleChange } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  const data = [
    {
      title: "Агент",
      key: 1,
      value: "agent",
    },
    {
      title: "Работник СПЗ",
      key: 2,
      value: "employee",
    },
  ];

  return (
    <>
      <label>Выберите организацию</label>
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

export default InputOrganization;
