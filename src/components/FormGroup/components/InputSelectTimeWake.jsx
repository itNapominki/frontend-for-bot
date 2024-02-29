import { useContext } from "react";
import { FormContext } from "../../../context/FormContext.js";
import Input from "../../Input/Input.jsx";
import SpanError from "../../SpanError/SpanError.jsx";
import InputSelect from "../../Input/InputSelect.jsx";

function InputSelectTimeWake({ name }) {
  const { handleChange, errors, values } = useContext(FormContext);

  const handleChangeInput = (event) => {
    handleChange(event);
  };

  const data = [
    {
      title: "09:00 - 09:30",
      key: 1,
      value: "09:00 - 09:30",
    },
    {
      title: "09:30 - 10:00",
      key: 2,
      value: "09:30 - 10:00",
    },
    {
      title: "10:00 - 10:30",
      key: 3,
      value: "10:00 - 10:30",
    },
    {
      title: "10:30 - 11:00",
      key: 4,
      value: "10:30 - 10:00",
    },


    {
      title: "11:00 - 11:30",
      key: 5,
      value: "11:00 - 11:30",
    },
    {
      title: "11:30 - 12:00",
      key: 6,
      value: "11:30 - 12:00",
    },
    {
      title: "12:00 - 12:30",
      key: 7,
      value: "12:00 - 12:30",
    },
    {
      title: "12:30 - 13:00",
      key: 8,
      value: "12:30 - 13:00",
    },
    {
      title: "13:00 - 13:30",
      key: 9,
      value: "13:00 - 13:30",
    },
    {
      title: "13:30 - 14:00",
      key: 10,
      value: "13:30 - 14:00",
    },
    {
      title: "14:00 - 14:30",
      key: 11,
      value: "14:00 - 14:30",
    },
    {
      title: "14:30 - 15:00",
      key: 12,
      value: "14:30 - 15:00",
    },









    {
      title: "15:00 - 15:30",
      key: 13,
      value: "15:00 - 15:30",
    },
    {
      title: "15:30 - 16:00",
      key: 14,
      value: "15:30 - 16:00",
    },
    {
      title: "16:00 - 16:30",
      key: 15,
      value: "16:00 - 16:30",
    },
    {
      title: "16:30 - 17:00",
      key: 16,
      value: "16:30 - 17:00",
    },
    
    {
      title: "17:00 - 17:30",
      key: 17,
      value: "17:00 - 17:30",
    },
    {
      title: "17:30 - 18:00",
      key: 18,
      value: "17:30 - 18:00",
    },
    
    {
      title: "18:00 - 18:30",
      key: 19,
      value: "18:00 - 18:30",
    },
    {
      title: "18:30 - 19:00",
      key: 20,
      value: "18:30 - 19:00",
    },
    
    {
      title: "19:00 - 19:30",
      key: 21,
      value: "19:00 - 19:30",
    },
    {
      title: "19:30 - 20:00",
      key: 22,
      value: "19:30 - 20:00",
    },



    
    {
      title: "20:00 - 20:30",
      key: 23,
      value: "20:00 - 20:30",
    },
    {
      title: "20:30 - 21:00",
      key: 24,
      value: "20:30 - 21:00",
    },
    
    {
      title: "21:00 - 21:30",
      key: 25,
      value: "21:00 - 21:30",
    },
    {
      title: "21:30 - 22:00",
      key: 26,
      value: "21:30 - 22:00",
    },
    
    
    
    

    
  ];

  return (
    <>
      {/* <Input
        handleChange={handleChangeInput}
        placeholder="Контактное лицо"        
        required
        minLength="4"
        maxLength="20"
        name={name}
        values={values[name]}
      ></Input>
      <SpanError message={errors[name]}></SpanError> */}
      <label>Время поминок</label>
      <InputSelect defaultValue={data[0].value} title="Выберите город" data={data} />
    </>
  );
}

export default InputSelectTimeWake;
