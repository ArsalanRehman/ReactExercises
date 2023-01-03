import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random text');
  const handleClick = () => {
    if (text === 'random text') {
      setText('new text');
    } else {
      setText('random text');
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        {' '}
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
