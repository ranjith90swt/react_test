import React, { useState } from 'react'

const FirstUniqueNumber = () => {
  const [inputArray, setInputArray] = useState([4, 10, 5, 4, 2, 10]);
  const [result, setResult] = useState(null);

  const findFirstUniqueNumber = (arr) => {
    const countMap = new Map();

    arr.forEach((num) => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    for (let num of arr) {
      if (countMap.get(num) === 1) {
        return num;
      }
    }
    return -1;
  };

  const handleClick = () => {
    setResult(findFirstUniqueNumber(inputArray));
  };

  return (
    <div>
      <h2>1. Find First Unique Number</h2>
      <p>Array: {JSON.stringify(inputArray)}</p>
      <button onClick={handleClick}>Find Unique Number</button>
      {result !== null && <p><b>Answer</b>: First unique number {result}</p>}
    </div>
  )
}

export default FirstUniqueNumber