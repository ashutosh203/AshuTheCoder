import React from "react";
import styles from "./Input.module.css"; // Assuming you have a CSS module for styling

const Input = ({ label, type, id, placeholder, className, autoComplete , name}) => {
  return (
    <>
      <div className={styles.inputcontainer}>
        <label htmlFor={id}>{label}</label>
        <input
          className={styles[className]}
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          autoComplete={autoComplete}

        />
      </div>
    </>
  );
};

export default Input;
