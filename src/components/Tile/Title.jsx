import styles from "./Title.module.css";

function Title({title}) {
    return(<span className={styles.wrapper}>{title}</span>)
}

export default Title;