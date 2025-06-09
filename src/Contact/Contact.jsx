import style from "./Contact.module.css";
import Input from "./Input";
import MyContact from "./MyContact";
import CloseIcon from "./CloseIcon";
import React, {useState} from "react";



const Contact = ({ onClose }) => {
  const [box, setBox] = useState(true);
  const handleBoxHide = () => {
    setBox(!box);
    if (onClose) onClose();
  };
  
  return (
    <div className={`${style.contact} ${box ? style.visible : style.hidden}`} >
      <div className={style.contactchild}>
        <h1>Contact Us</h1>
        <form>
          <Input
            className="UserName"
            type="text"
            label="Name :"
            placeholder="Your Name...."
            id="UserName"
            autoComplete="UserName"
            name="UserName"
          />

          <Input
            className="UserEmail"
            type="email"
            placeholder="Email example@gmial.com"
            label="Email :"
            id="UserEmail"
            autoComplete="UserEmail"
            name="UserEmail"
          />

          <Input
            className="UserSubject"
            type="text"
            placeholder="Subject"
            label="Subject :"
            id="UserSubject"
            autoComplete="UserSubject"
            name="UserSubject"
          />

          <textarea
            id="UserMessage"
            placeholder="Your Message"
            rows="5"
            name="UserMessage"
          ></textarea>
          <br />
          <button type="submit">Send Message</button>
        </form>
        <MyContact />
        <CloseIcon onClick={handleBoxHide} />
      </div>
    </div>
  );
};

export default Contact;
