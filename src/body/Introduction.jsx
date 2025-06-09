import React from "react";
import styles from "./Introduction.module.css";
import Buttons from "../Header/Buttons";
// import { useTranslation } from 'react-i18next'

const Introduction = ({onClick}) => {
  return (
    <div className={styles.introduction}>
      <h1>Hi, I’m Ashutosh — a Passionate Full-Stack Web Developer</h1>
      <p>
        I have hands-on experience in building interactive and user-friendly
        websites. I specialize in:
      </p>
      <ul>
        <li>
          <strong>Frontend:</strong> React.js, HTML, CSS, Tailwind CSS,
          JavaScript
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js
        </li>
      </ul>
      <p>
        I love creating clean, functional, and high-performing web applications.
        From responsive UI to efficient server-side logic, I handle everything
        smoothly. You tell me what you want—I’ll build it better than you
        imagined.
      </p>
      <blockquote>
        <em>Hire me once, you won’t regret it — warna pachtaoge 😎</em>
      </blockquote>
      <Buttons onClick={onClick} className="primary" text="View Projects" />
    </div>
  );
};

export default Introduction;
