import React, { useState } from "react";
import ReactDom from "react-dom";
import { data } from "./data";
import "./index.css";

const title = "Birthday Reminder";

function BirthdayReminder() {
  const [birthDays, setDays] = React.useState(data);
  return (
    <>
      <h1>{title}</h1>

      {birthDays.map((birthDay) => {
        const { id, name, day, img } = birthDay;
        return (
          <div className="container" key={id}>
            <div className="birthday">
              <div className="image-wrapper">
                <img src={img} alt="" />
              </div>
              <h4>{name}</h4>
              <h2>{day}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

ReactDom.render(<BirthdayReminder />, document.getElementById("root"));
