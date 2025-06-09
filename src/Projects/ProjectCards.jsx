import React from "react";
import styles from "./ProjectCards.module.css";

const ProjectCards = ({ className, children }) => {
  return <div className={styles[className]}>{children}</div>;
};

export default ProjectCards;
