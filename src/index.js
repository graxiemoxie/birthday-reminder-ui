import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Birthdays from "./birthdays"

const title = "Birthday Reminder";

function BirthdayReminder() {
  
  return (
    <>
      <section className="page-wrapper">
        <h1>{title}</h1>
        <Birthdays />
      </section>
    </>
  );
}

ReactDom.render(<BirthdayReminder />, document.getElementById("root"));
