import FormGroup from "../../components/FormGroup/FormGroup";
import MenuGroup from "../../components/MenuGroup/MenuGroup";
import styles from "./Start.module.css";
import useChooseForm from "./utils/hooks/useChooseForm";
import Title from "../../components/Tile/Title";

function Start() {
  const { handleForm, visibleForm } = useChooseForm({
    formHandleButton: true,
  });

  return (
    <>
      <form className={styles.wrapper}>
        {visibleForm.formHandleButton && (
          <>
            <Title title="Выберите соответствующую форму" />
            <MenuGroup handleForm={handleForm}></MenuGroup>
          </>
        )}

        {visibleForm.formRegistration ? (
          <>
            <Title title="Заполните форму регистрации" />
            <FormGroup initial={{ role: "agent", form: "update" }}>
              <FormGroup.InputName name="name" />
              <FormGroup.InputOrganization name="role" />
              <FormGroup.InputPhone name="number" />
            </FormGroup>
          </>
        ) : null}

        {visibleForm.formOrder ? (
          <>
            <Title title="Заполните форму заказа" />
            <FormGroup
              initial={{ form: "order", typeOrder: "wake", city: "Москва" }}
            >
              <FormGroup.InputSelectTypeOrder name="typeOrder" />
              <FormGroup.InputNameContact name="nameContact" />
              <FormGroup.InputPhone name="number" />
              <FormGroup.InputFIO name="fio" />
              <FormGroup.InputDateLeft name="dateLeft" />
              <FormGroup.InputDateWake name="dateWake" />
              <FormGroup.InputSelectTimeWake name="timeWake" />
              <FormGroup.InputSelectCity name="city" />
              <FormGroup.InputComment name="comment" />
            </FormGroup>
          </>
        ) : null}

        {visibleForm.formMessageForAgent && (
          <>
            <Title title="Сообщение Агенту" />
            <FormGroup initial={{}}>
              <FormGroup.InputIdAgent name="idAgent" />
              <FormGroup.InpuMessafeFromAgent name="messageFromAgent" />
            </FormGroup>
          </>
        )}
      </form>
    </>
  );
}

export default Start;
