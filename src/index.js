import React, { useState } from "react";
import ReactDom from "react-dom";
import { data } from "./data";
import "./index.css";

const title = "Birthday Reminder";

function BirthdayReminder() {
  const [birthDays, setDays] = React.useState(data);
  const removeData = (id) => {
    let newBirthDays = birthDays.filter((birthDay) => birthDay.id !== id);
    setDays(newBirthDays);
  };
  return (
    <>
      <section className="page-wrapper">
        <h1>{title}</h1>

        {birthDays.map((birthDay) => {
          const { id, name, day, img } = birthDay;
          return (
            <div className="container" key={id}>
              <div className="birthday">
                <div className="image-wrapper">
                  <img src={img} alt="" />
                </div>
                <div className="month">
                  <h4>{name}</h4>
                  <p>{day}</p>
                </div>
                <button type="button" className="btn" onClick={() => removeData(id)}>remove</button>
              </div>
            </div>

          );
        })}
                      <button className='clear-data-button' onClick={() => setDays([])}>clear data</button>

      </section>
    </>
  );
}

ReactDom.render(<BirthdayReminder />, document.getElementById("root"));
