import styles from "./Header.module.css";
import Listitems from "./Listitems";
import BottomImage from "./BottomImage";
import TopImage from "./TopImage";
import Buttons from "./Buttons";
import ProfileImage from "../body/ProfileImage";
import Introduction from "../body/Introduction";
import FooterSection from "../Footer/FooterSection";
import Contact from "../Contact/Contact";
import React, { useState } from "react";
import MainProjectPage from "../Projects/MainProjectPage";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleContactClick = () => {
    setIsActive(true);
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setIsOpen(true);
    setIsActive(false);
  };

  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(false);
    setIsActive(false);
  }

  return (
    <div className={styles.header}>
      <TopImage />
      {/* List */}
      <div className={styles.Listitems}>
        {/* Home */}
        <Listitems
          h2="Home"
          id="User_Home_Details"
          name="User_Home_Details"
          onClick={handleHomeClick}
        />
        {/* Project */}
        <Listitems
          h2="project"
          id="User_Project_Details"
          name="User_Project_Details"
          onClick={handleClick}
        />
        {/* Contact */}
        <Listitems
          h2="Contact "
          id="User_contact_Details"
          name="User_contact_Details"
          onClick={handleContactClick}
        />
      </div>

      <Buttons className="resume" text="Download resume" />
      {/* // hide */}
      {isOpen && <ProfileImage />}
      {/* // hide */}
      {isOpen && <Introduction onClick={handleClick} />}

      {/* // hide */}
      {isActive && <Contact onClose={() => setIsActive(false)} />}

      {/* hide */}
      {!isOpen && !isActive && <MainProjectPage />}

      {/* Always show FooterSection at the bottom */}
      <BottomImage />
      {isOpen && <FooterSection />}
    </div>
  );
};

export default Header;
