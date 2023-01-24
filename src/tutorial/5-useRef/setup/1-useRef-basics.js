import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const useContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(useContainer.current);
    useContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={useContainer} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
