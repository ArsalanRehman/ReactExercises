import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Arslan',
    Age: 24,
    Message: 'random message',
  });
  const changeMessage = () => {
    setPerson({ ...person, Message: 'newMessage' });
  };
  return (
    <>
      <div>{person.name}</div>
      <div>{person.Age}</div>
      <div>{person.Message}</div>
      <button className="btn" onClick={changeMessage}>
        change Message
      </button>
    </>
  );
};

export default UseStateObject;
