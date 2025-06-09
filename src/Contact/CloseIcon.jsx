import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./CloseIcon.module.css";
const CloseIcon = ({onClick}) => {
  return (
    <>
      <FontAwesomeIcon
        className={styles.closeIcon}
        icon={faXmark}
        onClick={onClick}
      />
    </>
  );
};

export default CloseIcon;
