import styles from "./Input.module.css";

function InputSelect({ data, title, defaultValue, handleChange, ...props }) {
  return (
    <select defaultValue={defaultValue} className={styles.wrapper} {...props} onChange={handleChange} >      
      {data?.map((i) => (
        <option key={i.key} value={i.value}>
          {i.title}
        </option>
      ))}
    </select>
  );
}

export default InputSelect;
