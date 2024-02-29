import styles from "./MenuGroup.module.css";
import Button from "../Button/Bitton";
import { useTelegram } from "../../utils";

function MenuGroup({ handleForm }) {
  const { onClose } = useTelegram({}, false);

  return (
    <>
      <Button title="Отменить" onClick={onClose}></Button>
      <Button
        title="Регистрация"
        onClick={() => handleForm("formRegistration")}
      ></Button>
      <Button
        title="Оформить заявку"
        onClick={() => handleForm("formOrder")}
      ></Button>
      <Button
        title="Написать Агенту"
        onClick={() => handleForm("formMessageForAgent")}
      ></Button>
    </>
  );
}

export default MenuGroup;
