import React, { ReactNode, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
// import classes from "./App.module.css";
import { PersonModel } from "../components/Persons/Person/Person.model";
import Persons from "../components/Persons/Person/Persons";

// const personModel: PersonModel = { name: "Ashutosh", age: 29 };
//statefull components - Smart/Container Components - keep it less
const App: React.FC = () => {
  const persons: PersonModel[] = [
    { id: "asd", name: "Ashu", age: 29 },
    { id: "rgsf", name: "Max", age: 30 },
  ];
  const hobbies: string = "Racing";
  const showPersons: boolean = true;
  interface AppState {
    persons: PersonModel[];
    hobbies: string;
    showPersons: boolean;
  }
  const [personState, setPersonState] = useState<AppState>({
    persons: persons,
    hobbies: hobbies,
    showPersons: showPersons,
  });
  // const switchNameHandler = (newName: string) => {
  //   //this.state.persons[0] = { name: "Ashutosh Kokam", age: 300 };
  //   const modifiedPerson: PersonModel[] = [
  //     { name: newName, age: 29 },
  //     { name: "Max", age: 30 },
  //   ];
  //   const modifiedHobbies = "Car Racing";
  //   setPersonState({
  //     persons: modifiedPerson,
  //     hobbies: modifiedHobbies,
  //     showPersons: personState.showPersons,
  //   });
  // };
  const deletePersonHandler = (index: number) => {
    const prson = [...personState?.persons];
    prson.splice(index, 1);
    setPersonState({
      persons: prson,
      hobbies: personState.hobbies,
      showPersons: personState.showPersons,
    });
  };
  const nameChangedHandler = (event: any, id: string) => {
    //this.state.persons[0] = { name: "Ashutosh Kokam", age: 300 };
    // const modifiedPerson: PersonModel[] = [
    //   { name: event.target.value, age: 29 },
    //   { name: event.target.value, age: 30 },
    // ];
    const modifiedPerson = [...personState.persons];
    const person = modifiedPerson.find((p) => p.id === id);
    if (person) person.name = event.target.value;
    // const modifiedPerson = [...personState.persons];

    const modifiedHobbies = "Car Racing";
    setPersonState({
      persons: modifiedPerson,
      hobbies: modifiedHobbies,
      showPersons: personState.showPersons,
    });
  };
  let personDiv: ReactNode = null;
  if (personState.showPersons) {
    console.log(personState.showPersons);
    personDiv = (
      <div>
        <Persons
          persons={personState.persons}
          deletePerson={deletePersonHandler}
          nameChanged={nameChangedHandler}
        ></Persons>
      </div>
    );
  }
  const togglePersonHandler = () => {
    const showPersons = !personState.showPersons;
    //const modifiedPersonState = {...personState,showPersons:!showPersons}
    setPersonState({
      persons: personState.persons,
      hobbies: personState.hobbies,
      showPersons: showPersons,
    });
    console.log(JSON.stringify(personState));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button
          className="button"
          onClick={() => switchNameHandler("Ashutosh Kokam")}
        >
          Switch Name
        </button> */}
        <br />
        <button className="button" onClick={togglePersonHandler}>
          Toggle Persons
        </button>
        {/* {personState.persons.forEach((item) => {
          console.table(item);
        })} */}
        {personDiv}
      </header>
    </div>
  );
};

export default App;
