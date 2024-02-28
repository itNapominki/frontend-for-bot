import Button from "../../components/Button/Bitton";
import FormGroup from "../../components/FormGroup/FormGroup";
import MenuGroup from "../../components/MenuGroup/MenuGroup";
import { useFormWithValidation } from "../../utils";
import styles from "./Start.module.css";
import { useCallback, useEffect } from "react";
import useChooseForm from "./utils/hooks/useChooseForm";

const tg = window.Telegram.WebApp;

function Start() {
  const { values, handleChange, errors, isValid, isVisibleSpanError } =
    useFormWithValidation();

  const { handleForm, visibleForm } = useChooseForm({
    formHandleButton: true,
  }); 

  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
    tg.MainButton.show();
    tg.MainButton.setParams({ text: "Отправить данные" });
  }, []);

  //данные в телеграмм
  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    if (!isValid) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [isValid]);

  return (
    <>
      <form className={styles.wrapper}>
        <Button title="Отменить" onClick={onClose}></Button>
        <div className="wrapper_input">
          <h2>Заполните форму регистрации</h2>          
        </div>
        {visibleForm.formHandleButton && (
          <MenuGroup handleForm={handleForm}></MenuGroup>
        )}
        {visibleForm.formRegistration ? (
          <>
            <FormGroup
              values={values}
              handleChange={handleChange}
              errors={errors}
              isValid={isValid}
              isVisibleSpanError={isVisibleSpanError}
            >
              <FormGroup.InputName />
              <FormGroup.InputOrganization />
              <FormGroup.InputPhone />
              {/* <FormGroup.InputTlgName /> */}
            </FormGroup>
            <span>
              {!isValid ? "Форма еще не заполнена" : "Форма заполнена"}
            </span>
          </>
        ) : null}

        {visibleForm.formOrder && <>В разработке formOrder</>}
        {visibleForm.formMessageForAgent && (
          <>В разработке formMessageForAgent</>
        )}
      </form>
    </>
  );
}

export default Start;
