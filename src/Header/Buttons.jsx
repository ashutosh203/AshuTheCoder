import styles from './Buttons.module.css';

const Buttons = ({className, text , onClick}) => {
  return (
    <>
      <button onClick={onClick} className={`${styles[className]}`}>{text}</button>
    </>
  );
};

export default Buttons;
