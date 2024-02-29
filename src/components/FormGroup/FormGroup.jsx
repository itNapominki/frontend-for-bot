import InputName from "./components/InputName";
import InputOrganization from "./components/InputOrganization";
import InputPhone from "./components/InputPhone";
import InputTlgName from "./components/InputTlgName";
import { FormContext } from "../../context/FormContext";
import InputNameContact from "./components/InputNameContact";
import InputSelectCity from "./components/InputSelectCity";
import InputSelectTypeOrder from "./components/InputSelectTypeOrder";
import InputFIO from "./components/InputFIO";
import InputDateLeft from "./components/InputDateLeft";
import InputDateWake from "./components/InputDateWake";
import InputSelectTimeWake from "./components/InputSelectTimeWake";
import InputComment from "./components/InputComment";
import { useFormWithValidation, useTelegram } from "../../utils";
import Button from "../Button/Bitton";
import VidgetSubmitForm from "../VidgetSubmitForm/VidgetSubmitForm";
import InpuMessafeFromAgent from "./components/InpuMessafeFromAgent";
import InputIdAgent from "./components/InputIdAgent";

function FormGroup(props) {
  const { values, handleChange, errors, isValid, isVisibleSpanError } =
    useFormWithValidation({initial: props.initial});

  const { onClose } = useTelegram(values, isValid);

  return (
    <FormContext.Provider
      value={{
        values,
        handleChange,
        errors,
        isVisibleSpanError,
        isValid,
      }}
    >
      <Button title="Отменить" onClick={onClose}></Button>
      {props.children}
      <VidgetSubmitForm isValid={isValid} />      
    </FormContext.Provider>
  );
}

export default FormGroup;

FormGroup.InputName = InputName;
FormGroup.InputOrganization = InputOrganization;
FormGroup.InputPhone = InputPhone;
FormGroup.InputTlgName = InputTlgName;
FormGroup.InputNameContact = InputNameContact;
FormGroup.InputSelectCity = InputSelectCity;
FormGroup.InputSelectTypeOrder = InputSelectTypeOrder;
FormGroup.InputFIO = InputFIO;
FormGroup.InputDateLeft = InputDateLeft;
FormGroup.InputDateWake = InputDateWake;
FormGroup.InputSelectTimeWake = InputSelectTimeWake;
FormGroup.InputComment = InputComment;
FormGroup.InpuMessafeFromAgent = InpuMessafeFromAgent;
FormGroup.InputIdAgent = InputIdAgent;
