import { useState } from "react";

const useChooseForm = (initial) => {
  const [visibleForm, setVisibleForm] = useState(initial);
  const handleForm = (form) => {
    setVisibleForm({ [form]: true });    
  };

  return {
    handleForm,
    visibleForm,
  };
};

export default useChooseForm;
