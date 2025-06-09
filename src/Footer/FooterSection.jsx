import React from "react";
import styles from "./FooterSection.module.css";

const FooterSection = () => {
  const Date1 = Date.now();
  const year = new Date(Date1).getFullYear();
  return (
    <div className={styles.footer}>
      <p>© {year} Ashutosh kumar shah. All rights reserved.</p>
    </div>
  );
};

export default FooterSection;
