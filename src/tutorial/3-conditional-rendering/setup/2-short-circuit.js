import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {text || <h2>short circuit</h2>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle
      </button>
      {isError && <h1>Error</h1>}
      {isError ? <h1>Error</h1> : <h2>There is no error</h2>}
    </>
  );
};

export default ShortCircuit;
