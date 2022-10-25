import React from "react";
import classes from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className={classes.Contact}>
      <h2 className={classes.Contact__Head}>Contact</h2>

      <div className={classes.ContactContent}>
        You can contact us from the following platforms:
        <br />
        <br />
        <div>
          Linkedln:
          <a href="https://www.linkedin.com/in/shedrach-jonah-4894a72a">
            https://www.linkedin.com/in/shedrach-jonah-4894a72a
          </a>
        </div>
        <div className={classes.Links}>
          Twitter:
          <a href="https://www.twitter.com/Shedyyyyyy_">
            https://www.twitter.com/Shedyyyyyy_
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
