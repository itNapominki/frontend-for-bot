import styles from "./Input.module.css";

function Input({ placeholder, handleChange, ...props }) {
  return (
    <input
      onChange={handleChange}
      className={styles.wrapper}
      placeholder={placeholder}
      {...props}
    ></input>
  );
}

export default Input;
