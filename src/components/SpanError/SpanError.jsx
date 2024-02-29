import styles from "./SpanError.module.css"

function SpanError({ message }) {
  return <span className={styles.wrapper}>{message && message}</span>;
}

export default SpanError;
