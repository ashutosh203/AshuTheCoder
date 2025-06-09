import styles from "./TopImage.module.css";
import Top from "../assets/top.png";

const TopImage = () => {
  return (
    <div className={styles.topImage}>
      <img src={Top} alt="" />
    </div>
  );
};

export default TopImage;
