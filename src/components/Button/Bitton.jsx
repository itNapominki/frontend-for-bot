import styles from "./Button.module.css";

function Button({title, onClick}) {

    function handleClick() {
        onClick()
    }

    return(<button className={styles.wrapper} onClick={handleClick}>{title}</button>)
}

export default Button;