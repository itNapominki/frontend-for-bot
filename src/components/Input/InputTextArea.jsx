import styles from "./InputTextArea.module.css";

function InputTextArea({ placeholder, handleChange, ...props }) {
  return (
    <textarea
      className={styles.wrapper}
      rows="5"
      {...props}
      onChange={handleChange}
      placeholder={placeholder}
    ></textarea>
  );
}

export default InputTextArea;
