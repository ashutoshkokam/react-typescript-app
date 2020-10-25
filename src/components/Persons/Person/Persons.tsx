import React from "react";
import Person from "./Person";
import { PersonModel } from "./Person.model";

interface Props {
  persons?: PersonModel[];
  nameChanged: (event: any, id: string) => void;
  deletePerson: (id: any) => void;
}
const Persons: React.FC<Props> = ({ persons, nameChanged, deletePerson }) => {
  return (
    <div>
      {persons?.map((item, index) => {
        return (
          <Person
            person={item}
            nameChanged={(event) => nameChanged(event, item.id)}
            key={item.id}
            click={() => deletePerson(index)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
