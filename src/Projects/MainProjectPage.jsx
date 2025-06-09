import styles from "./MainProjectPage.module.css";
import ProjectCards from "./ProjectCards";
const MainProjectPage = () => {
  return (
    <div className={`${styles.MainProjectPage}`}>
      <div className={styles.MainProjectPageDiv}>
        <ProjectCards className="ProjectCards1">
          <h1>Project 1</h1>
          <div>
            <button>View Project</button>
          </div>
          <p>
            A simple and interactive calculator built using HTML, CSS, and
            JavaScript. It performs basic arithmetic operations with a clean UI.
          </p>
        </ProjectCards>
        <ProjectCards className="ProjectCards2">
          <h1>Project 2</h1>
          <div>
            <button>View Project</button>
          </div>
          <p>
            "A dynamic To-Do App built using React, JSX, and CSS. It allows
            users to add, delete, and mark tasks as complete in real-time. Built
            with a responsive and user-friendly interface."
          </p>
        </ProjectCards>
        <ProjectCards className="ProjectCards3">
          <h1>Project 3</h1>
          <button>View Project</button>
          {/* <p>
            "A modern e-commerce website with product listing, search, cart, and
            checkout features. Built using React, HTML, CSS, and JavaScript for
            a smooth shopping experience."
          </p> */}
        </ProjectCards>
      </div>
    </div>
  );
};

export default MainProjectPage;
