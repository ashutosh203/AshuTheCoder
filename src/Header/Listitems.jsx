import styles from "./Listitems.module.css";
// import React , {useState}from "react";

const Listitems = (props) => {

  // props.onClose();

  return (
    <>
      <ol className={styles.list}>
        <li id={props.id} name={props.name} onClick={props.onClick} >
          <h2 >{props.h2}</h2>
        </li>
      </ol>
    </>
  );
};

export default Listitems;
