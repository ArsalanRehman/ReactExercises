import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState('');

  if (loading) {
    return <h2>loading</h2>;
  }
  if (isError) {
    return <h2>isError</h2>;
  }
  

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
 