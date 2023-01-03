import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
  };
  const handleDecrease = () => {
    const newValue = value - 1;
    if (newValue < 0 || newValue === 0) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };
  const handleReset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2> Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
