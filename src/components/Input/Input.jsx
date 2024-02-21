import styles from "./Input.module.css"

function Input({placeholder}) {
    return(<input className={styles.wrapper} placeholder={placeholder}></input>)
}

export default Input;