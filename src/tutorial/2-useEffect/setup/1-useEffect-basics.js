import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `NewMessages (${num}) `;
  });
  return (
    <>
      <h1>{num}</h1>
      <button className="btn" onClick={() => setNum(num + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
