import "./Welcome.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <main className="welcome-main-div">
      <div className="welcome-introdiv">
        <h2 className="welcome-welcome">Welcome to Intelstu!</h2>
        <p className="welcome-descrip">
          A student is a person enrolled in a school or other educational
          institution. In the United Kingdom and most commonwealth countries, a
          "student" attends a secondary school or higher; those in primary or
          elementary schools
        </p>
        <NavLink className="welcome-btn" to='enrollbot'>Enroll now!</NavLink>
      </div>
    </main>
  );
}

export default Welcome;
