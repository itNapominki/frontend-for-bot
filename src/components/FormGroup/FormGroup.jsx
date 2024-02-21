import { createContext } from "react";
import InputName from "./components/InputName";
import InputOrganization from "./components/InputOrganization";
import InputPhone from "./components/InputPhone";
import InputTlgName from "./components/InputTlgName";

const FormContext = createContext(undefined);

function FormGroup(props) {
  return (
    <FormContext.Provider value={props}>
      {props.children}      
    </FormContext.Provider>
  );
}

export default FormGroup;

FormGroup.InputName = InputName;
FormGroup.InputOrganization = InputOrganization;
FormGroup.InputPhone = InputPhone;
FormGroup.InputTlgName = InputTlgName;
