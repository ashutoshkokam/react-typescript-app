import React, { ReactEventHandler, ReactNode } from "react";
import { PersonModel } from "./Person.model";
import "./Person.css";

//Statleless/Presentational components
interface Props {
  person?: PersonModel;
  children?: ReactNode;
  click?: ReactEventHandler;
  nameChanged?: ReactEventHandler;
}
const Person: React.FC<Props> = ({ children, click, nameChanged, person }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I am {person?.name} and I am {person?.age} Years old.
      </p>
      <input type="text" onChange={nameChanged} value={person?.name}></input>
      <p>{children}</p>
    </div>
  );
};

export default Person;
