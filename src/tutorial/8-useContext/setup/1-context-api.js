import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={mainData.removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const data = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => data.removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
