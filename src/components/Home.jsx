import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.HomeContent}>
        <h2 className={classes.Main}>
          Given free random users on several platforms.
        </h2>
        <div className={classes.Buttons}>
          <Link className={classes.BtnLink} to="/About">
            About
          </Link>
          <Link to="contact" className={classes.BtnLink}>
            Contact
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
