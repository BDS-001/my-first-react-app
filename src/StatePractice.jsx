import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;


function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
  
    // BAD - Don't do this!
    const handleIncreaseAgeBad = () => {
      // mutating the current state object
      person.age = person.age + 1;
      setPerson(person);
    };
  
    // GOOD - Do this!
    const handleIncreaseAgeGood = () => {
      // copy the existing person object into a new object
      // while updating the age property
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    };
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAgeGood}>Increase age</button>
      </>
    );
  }

  //this function will only increase the age based on current state
  // state only changes when webpage is rerendered
  //canot change the value multiple times this way
  let handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
    setPerson({ ...person, age: person.age + 1 });
  };
  
  // this lets you update with the new state
  // when you add a callback to setPerson the altes state automatically gets passed in
  handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };