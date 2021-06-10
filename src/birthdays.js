import React from "react";
import { data } from "./data";



class Birthdays extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      people: data
    }
  }

  render() {
    return (
      <section>
        {
          this.state.people.map((person, index) => {
            return (
              <BirthDayList key={ index }
                id={ person.id }
                name={ person.name }
                day={ person.day }
                img={ person.img }
                onRemove={ () => { this.onRemove(person.id) } }
              />
            )
          })

        }
        <button className='clear-data-button' onClick={ () => { this.clearAll() } }>clear all</button>
      </section>
    )
  }

  onRemove(id) {
    console.log(id)
    let newList = [];
    this.state.people.forEach(item => {
      if (id != item.id) {
        newList.push(item);
      }
    });
    console.log(newList)
    this.setState({people: newList});
  }

  clearAll() {
    this.setState({people: []});
  }

}

const BirthDayList = (props) => {
  const removeData = (id) => {
    data.filter((data) => data.id !== id);
  };
  return (
    <div className="container" key={data.id}>
      <div className="birthday">
        <div className="image-wrapper">
          <img src={props.img} alt="" />
        </div>
        <div className="month">
          <h4>{props.name}</h4>
          <p>{props.day}</p>
        </div>
        <button type="button" className="btn" onClick={ () => props.onRemove() }>remove</button>
      </div>
    </div>
  )
}

export default Birthdays;