import styles from "./MenuGroup.module.css"
import Button from "../Button/Bitton";


function MenuGroup ({handleForm}) {
    

    return (<>

    <Button title="Регистрация" onClick={() => handleForm("formRegistration")}></Button>
    <Button title="Оформить заявку" onClick={() => handleForm("formOrder")}></Button>
    <Button title="Написать Агенту" onClick={() => handleForm("formMessageForAgent")}></Button>
   
    
    </>)
}

export default MenuGroup;