import React from "react";
import styles from "./ProfileImage.module.css";
import profileImg from "../assets/Profileimage.jpeg"; // Assuming you have a profile image in assets


const ProfileImage = () => {
  return (
    <>
      <div className={styles.profileImageContainer}>
        <img src={profileImg} alt="Profile" />
      </div>
    </>
  );
};

export default ProfileImage;
