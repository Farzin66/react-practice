import React, { useEffect, useState } from "react";

const Effect = () => {
    const [count,setCount] = useState (0)
    function handleClick(){
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        console.log('Count changed to: ',count)
    },[count])

  return (
    <>
    {count}
    <br />
      <button onClick={handleClick}>Increase</button>
    </>
  );
};

export default Effect;
