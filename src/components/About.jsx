import React from "react";
import classes from "../styles/About.module.css";
const About = () => {
  return (
    <div className={classes.About}>
      <h2 className={classes.About__Head}>About</h2>

      <p className={classes.AboutContent}>
        I'm Shedrach Jonah a resourceful frontend web developer who developed a web application that
        shows different user's profile with a pagination button. Kindly
        navigate to users page to view:routes, nested routes, error
        boundary, axios, pagination
      </p>
    </div>
  );
};

export default About;
