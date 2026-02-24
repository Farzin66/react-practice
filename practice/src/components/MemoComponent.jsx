import React, { useState, useMemo } from 'react'


const MemoComponent = () => {

    const [count, setCount] = useState (0);
    const [text, setText] = useState ('');

  function heavyCalculation(num) {
     console.log("Heavy calculation running..."); 
     for (let i = 0; i < 2000000000; i++) {}
     return num * 2;
  }

  const result = useMemo(() => heavyCalculation(count), [count]);

  return (
    <>
      <input value={text} onChange={(e) => {setText(e.target.value)}}/>
      <button onClick={() => {setCount(prev => prev + 1)}}>Increase</button>
      <p>{result}</p>
    </>
  )
}

export default MemoComponent