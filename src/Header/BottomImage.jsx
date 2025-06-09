import Bottom from "../assets/bottom.png";
import styles from "./BottomImage.module.css";


const BottomImage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Bottom} alt="" />
    </div>
  );
};

export default BottomImage;
